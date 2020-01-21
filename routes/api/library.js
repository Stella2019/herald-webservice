const cheerio = require('cheerio')
const oracle = require('../../database/oracle')

exports.route = {

  /**
  * GET /api/library
  * 图书馆信息查询
  **/
  async get() {
    const { cardnum } = this.user
    //const db = await oracle.getConnection()
    // 查询借阅信息

    let record = await this.db.execute(`
      SELECT 
        TSTM,TSMC,JSRQ,YHRQ,WID,XJBS,SFRZH
      FROM
        TOMMY.T_TS_JY_WGH
      WHERE
        DZTM = :cardnum
      `, { cardnum: cardnum})

    //测试
    // let record = await this.db.execute(`
    //   SELECT 
    //     TSTM,TSMC,JSRQ,YHRQ,WID,XJBS,SFRZH
    //   FROM
    //     TOMMY.T_TS_JY_WGH
    //   WHERE
    //     DZTM = 220161235
    //   `)

    //console.log(record)
    return record.rows.map(row => {
      const info = {
        bookId: row[0],
        name: row[1],
        borrowDate: row[2].valueOf(), //日期转为时间戳
        returnDate: row[3].valueOf(),
        WID: row[4],
        renewCount:row[5],
        SFRZH:row[6]
      }
      //console.log(info)
      return info
    });

  },

  //以下废弃？
  /**
  * POST /api/library
  * @apiParam bookId
  * 图书续借
  **/
  async post({ bookId }) {
    await this.useAuthCookie()
    await this.get('http://www.libopac.seu.edu.cn:8080/reader/hwthau.php')
    let res = await this.get('http://www.libopac.seu.edu.cn:8080/reader/book_lst.php')
    let $ = cheerio.load(res.data)

    let bookList = $('#mylib_content tr').toArray().slice(1).map(tr => {
      let bookId = $(tr).find('td').toArray().map(td => {
        return $(td).text().trim()
      })[0]
      let borrowId = $(tr).find('input').attr('onclick').substr(20, 8)
      return { bookId, borrowId }
    })

    let { borrowId } = bookList.find(k => k.bookId === bookId)
    let captcha = await this.libraryCaptcha()
    let time = +moment()

    res = await this.get('http://www.libopac.seu.edu.cn:8080/reader/ajax_renew.php', {
      params: {
        bar_code: bookId,
        check: borrowId,
        captcha, time
      }
    })
    return cheerio.load(res.data).text()
  }
}
