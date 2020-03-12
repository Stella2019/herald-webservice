const oracledb = require('oracledb')
const JPushKeys = require('../../../sdk/sdk.json').JPush
const Base64 = require('js-base64').Base64
exports.route = {
  async post({ id, title, content, tag, target, annex, role, key, name, source }) {
    if (!(id && title && content && key)) {
      throw '参数不全'
    }
    if (title.length > 60) {
      throw '标题过长'
    }
    if (content.length > 1200) {
      throw '内容过长'
    }
    if (!role) {
      throw 403
    }
    let cardnum = this.user.decrypt(key)
    let isAll = false
    let time = +moment()
    if (target === 'all') {
      isAll = true
      let record = await this.db.execute(`
      SELECT DISTINCT(CARDNUM)
      FROM H_AUTH 
      WHERE PLATFORM LIKE '%app%'
      `)
      target = record.rows.map(Element => {
        let [cardnum] = Element
        return cardnum
      })
    }
    // 将通知存入oracle
    await this.db.execute(`
      INSERT INTO H_NOTIFICATION
      (ID, TITLE, CONTENT, PUBLISHER, PUBLISHTIME, ROLE, TAG, ANNEX, SOURCE, PUBLISHERNAME)
      VALUES(:id, :title, :content, :cardnum, :time, :role, :tag, :annex, :source, :name)
      `, {
      id,
      title,
      content,
      cardnum,
      time,
      role,
      tag,
      annex,
      source,
      name
    })
    // 获取通知的 guid
    let record = await this.db.execute(`
    SELECT ID 
    FROM H_NOTIFICATION
    WHERE TITLE = :title AND PUBLISHTIME = :time
    `, {
      title,
      time
    })
    let notificationId = record.rows[0][0]

    // 插入与接受者的绑定记录
    const sql = 'INSERT INTO H_NOTIFICATION_ISREAD （NOTIFICATION_ID, CARDNUM） VALUES (:notificationId, :cardnum)'

    let binds = (typeof target === 'object') ? target.map(Element => {
      return {
        notificationId,
        cardnum: Element
      }
    }) : [{ notificationId, cardnum: target }]
    const options = {
      autoCommit: true,
      bindDefs: {
        notificationId: { type: oracledb.STRING, maxSize: 40 },
        cardnum: { type: oracledb.STRING, maxSize: 10 }
      }
    }
    await this.db.executeMany(sql, binds, options)

    // // 向app推送通知
    // if (isAll) {
    //   this.post('https://api.jpush.cn/v3/push', JSON.stringify({
    //     platform: 'all',
    //     audience: 'all',
    //     notification: {
    //       android: {
    //         alert: '',// 通知内容
    //         title: '',// 通知标题
    //         extras: {
    //           notificationId
    //         }
    //       },
    //       ios: {
    //         alert: '有一条新的通知~要记得看噢~',
    //         extras: {
    //           notificationId
    //         }
    //       }
    //     }
    //   }), { headers: { 'Authorization': Base64.encode(JPushKeys.appKey + ':' + JPushKeys.masterSecret) } })
    // } else {
    //   for (let i = 0; i < target.length; i += 900) {
    //     this.post('https://api.jpush.cn/v3/push', JSON.stringify({
    //       platform: 'all',
    //       audience: {
    //         alias: target.slice(i, i + 900).map(Element => { return Element + JPushKeys.heraldKey })
    //       },
    //       notification: {
    //         android: {
    //           alert: '',// 通知内容
    //           title: '',// 通知标题
    //           extras: {
    //             notificationId
    //           }
    //         },
    //         ios: {
    //           alert: '有一条新的通知~要记得看噢~',
    //           extras: {
    //             notificationId
    //           }
    //         }
    //       }
    //     }), { headers: { 'Authorization': Base64.encode(JPushKeys.appKey + ':' + JPushKeys.masterSecret) } })
    //   }

    // }
    return '推送成功'
  },

  async get({ id }) {
    // 未指定id则查看列表
    if (!id) {
      // 查询我收到的通知
      let { cardnum } = this.user
      let record = await this.db.execute(`
      SELECT H_NOTIFICATION.ID, TITLE, CONTENT, PUBLISHERNAME, PUBLISHTIME, ROLE, TAG, ANNEX, SOURCE, A.READ_TIME
      FROM (
        SELECT NOTIFICATION_ID, READ_TIME
        FROM H_NOTIFICATION_ISREAD
        WHERE CARDNUM = :cardnum
      )A
        LEFT JOIN H_NOTIFICATION
        ON H_NOTIFICATION.ID = A.NOTIFICATION_ID
      `, {
        cardnum
      })
      return record.rows.map(Element => {
        let [notificationId, title, content, publisher, publishTime, role, tag, annex, source, readTime] = Element
        return {
          notificationId,
          title,
          content,
          publisher,
          publishTime,
          role,
          tag,
          annex,
          source,
          isRead: readTime === null ? false : true,
          readTime
        }
      })
    } else {
      let record = await this.db.execute(`
      SELECT TITLE, CONTENT, PUBLISHER, PUBLISHERNAME, PUBLISHTIME, ROLE, TAG, ANNEX, SOURCE
      FROM H_NOTIFICATION
      WHERE ID = :id
      `, { id })
      if (record.rows.length === 0) {
        throw '没有您想要查看的通知'
      }
      record = record.rows.map(Element => {
        let [title, content, publisher, publisherName, publishTime, role, tag, annex, source] = Element
        return { title, content, publisher, publisherName, publishTime, role, tag, annex, source }
      })[0]
      
      return {
        title: record.title,
        content: record.content,
        publisherName: record.publishName,
        publishTime: record.publishTime,
        role: record.role,
        tag: record.tag,
        annex: record.annex,
        source: record.source
      }
    }
  },
}