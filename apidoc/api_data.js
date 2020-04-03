define({ "api": [
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "useMode",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "userIds",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "validateCode",
            "description": "<p>预约场馆</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/index.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>预约信息查询</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/index.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": "<p>预约场馆 初始化</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/initOrder.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\initOrder.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\initOrder.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "ids",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "useTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "allowHalf",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "validateCode",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/judgeUser.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\judgeUser.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\judgeUser.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "cardnum",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/user.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\user.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\user.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "ip",
            "description": "<p>要下线的IP地址</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "mac",
            "description": "<p>要删除的设备MAC地址</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/wlan.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "months",
            "description": "<p>要开通/续期的月数</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/wlan.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "name": ""
  },
  {
    "type": "DELETE",
    "url": "/api/admin/admin",
    "title": "删除管理员权限",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "DeleteApiAdminAdmin"
  },
  {
    "type": "DELETE",
    "url": "/api/admin/banner",
    "title": "删除轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "DeleteApiAdminBanner"
  },
  {
    "type": "DELETE",
    "url": "/api/admin/notice",
    "title": "删除通知",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/notice.js",
    "groupTitle": "管理员接口",
    "name": "DeleteApiAdminNotice"
  },
  {
    "type": "Get",
    "url": "/api/admin/activity",
    "title": "getActivities",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页长</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"page\": 1,\n \"pagesize\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": true,\n  \"code\": 200\n  \"result\": [\n{ \n \"id\":\"9CBA606EC456E0F6E05012AC02002685\",\n \"click\":0,\n \"title\":\"测试标题6\",\n \"pic\":\"http://picurl\",\n \"url\":\"https://url\",\n \"content\":\"testContent\",\n \"endTime\":1582473601000,\n \"startTime:\":1579708800000\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminActivity"
  },
  {
    "type": "Get",
    "url": "/api/admin/admin",
    "title": "查询管理员",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "domain",
            "description": "<p>指定功能域 带 domain 参数表示查询指定域下的管理员；不带 domain 参数表示查询自己的管理员身份</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": true,\n  \"code\": 200\n  \"result\": [\n'authrization'\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminAdmin"
  },
  {
    "type": "GET",
    "url": "/api/admin/banner",
    "title": "获取轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页面尺寸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminBanner"
  },
  {
    "type": "GET",
    "url": "/api/admin/notice",
    "title": "获取通知",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页面尺寸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/notice.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminNotice"
  },
  {
    "type": "POST",
    "url": "/api/admin/activity",
    "title": "添加活动",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>指定功能域</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminActivity"
  },
  {
    "type": "POST",
    "url": "/api/admin/admin",
    "title": "添加管理员权限",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>指定功能域</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminAdmin"
  },
  {
    "type": "POST",
    "url": "/api/admin/banner",
    "title": "添加轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "banner",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminBanner"
  },
  {
    "type": "POST",
    "url": "/api/admin/notice",
    "title": "添加通知",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "notice",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/notice.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminNotice"
  },
  {
    "type": "PUT",
    "url": "/api/admin/activity",
    "title": "删除活动",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminActivity"
  },
  {
    "type": "PUT",
    "url": "/api/admin/activity",
    "title": "修改活动",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>指定功能域</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminActivity"
  },
  {
    "type": "PUT",
    "url": "/api/admin/admin",
    "title": "修改管理员信息",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminAdmin"
  },
  {
    "type": "PUT",
    "url": "/api/admin/banner",
    "title": "修改轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "banner",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminBanner"
  },
  {
    "type": "PUT",
    "url": "/api/admin/notice",
    "title": "修改通知",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "notice",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/notice.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminNotice"
  },
  {
    "type": "GET",
    "url": "/api/classroom/building",
    "title": "获取所有的可以查询的教室",
    "group": "classroom",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campus",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/classroom/building.js",
    "groupTitle": "教室接口",
    "name": "GetApiClassroomBuilding"
  },
  {
    "type": "GET",
    "url": "/api/classroom/campus",
    "title": "获取所有的可以查询的校区",
    "group": "classroom",
    "version": "0.0.0",
    "filename": "routes/api/classroom/campus.js",
    "groupTitle": "教室接口",
    "name": "GetApiClassroomCampus"
  },
  {
    "type": "GET",
    "url": "/api/classroom/current",
    "title": "获取当前时段所有可以用的空教室",
    "group": "classroom",
    "version": "0.0.0",
    "filename": "routes/api/classroom/index.js",
    "groupTitle": "教室接口",
    "name": "GetApiClassroomCurrent"
  },
  {
    "type": "GET",
    "url": "/api/classroom/current",
    "title": "获取当前时段所有可以用的空教室",
    "group": "classroom",
    "version": "0.0.0",
    "filename": "routes/api/classroom/current.js",
    "groupTitle": "教室接口",
    "name": "GetApiClassroomCurrent"
  },
  {
    "type": "GET",
    "url": "/api/classroom/term",
    "title": "获取所有的可以查询的学期",
    "group": "classroom",
    "version": "0.0.0",
    "filename": "routes/api/classroom/term.js",
    "groupTitle": "教室接口",
    "name": "GetApiClassroomTerm"
  },
  {
    "type": "DELETE",
    "url": "/api/exam",
    "title": "删除自定义考试课程",
    "group": "exam",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/exam.js",
    "groupTitle": "考试",
    "name": "DeleteApiExam"
  },
  {
    "type": "GET",
    "url": "/api/exam",
    "title": "创建自定义考试",
    "group": "exam",
    "version": "0.0.0",
    "filename": "routes/api/exam.js",
    "groupTitle": "考试",
    "name": "GetApiExam"
  },
  {
    "type": "POST",
    "url": "/api/exam",
    "title": "创建自定义考试课程",
    "group": "exam",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campus",
            "description": "<p>考试校区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>考试名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credit",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>考试地点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>考试持续时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teacherName",
            "description": "<p>课程类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>考试开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>学期</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/exam.js",
    "groupTitle": "考试",
    "name": "PostApiExam"
  },
  {
    "type": "DELETE",
    "url": "/api/gpa",
    "title": "删除自定义考试课程",
    "group": "gpa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>课程ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "groupTitle": "gpa相关接口",
    "name": "DeleteApiGpa"
  },
  {
    "type": "GET",
    "url": "/api/gpa",
    "title": "查询绩点信息",
    "group": "gpa",
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "groupTitle": "gpa相关接口",
    "name": "GetApiGpa"
  },
  {
    "type": "POST",
    "url": "/api/gpa",
    "title": "创建自定义考试课程",
    "group": "gpa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "credit",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>分数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseType",
            "description": "<p>课程类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scoreType",
            "description": "<p>修读类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>学期</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "groupTitle": "gpa相关接口",
    "name": "PostApiGpa"
  },
  {
    "type": "PUT",
    "url": "/api/gpa",
    "title": "修改自定义考试课程",
    "group": "gpa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "credit",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>分数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseType",
            "description": "<p>课程类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scoreType",
            "description": "<p>修读类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>学期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>课程ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "groupTitle": "gpa相关接口",
    "name": "PutApiGpa"
  },
  {
    "type": "DELETE",
    "url": "/api/lostAndFound",
    "title": "删除失物招领/寻物启事",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/index.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "DeleteApiLostandfound"
  },
  {
    "type": "GET",
    "url": "/api/lostAndFound",
    "title": "获取失物招领/寻物启事",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/index.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "GetApiLostandfound"
  },
  {
    "type": "GET",
    "url": "/api/lostAndFound/message",
    "title": "获取消息",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/message.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "GetApiLostandfoundMessage"
  },
  {
    "type": "GET",
    "url": "/api/lostAndFound/search",
    "title": "按类别/关键字搜索",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/search.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "GetApiLostandfoundSearch"
  },
  {
    "type": "POST",
    "url": "/api/lostAndFound",
    "title": "新建失物招领/寻物启事",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/index.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "PostApiLostandfound"
  },
  {
    "type": "POST",
    "url": "/api/lostAndFound/audit",
    "title": "审核失物招领/寻物启事",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pass",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/audit.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "PostApiLostandfoundAudit"
  },
  {
    "type": "POST",
    "url": "/api/lostAndFound/message",
    "title": "回复消息",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/message.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "PostApiLostandfoundMessage"
  },
  {
    "type": "POST",
    "url": "/api/lostAndFound/success",
    "title": "失物招领/寻物启事结项",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/success.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "PostApiLostandfoundSuccess"
  },
  {
    "type": "PUT",
    "url": "/api/lostAndFound",
    "title": "修改失物招领/寻物启事",
    "group": "lostAndFound",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lostAndFound/index.js",
    "groupTitle": "失物招领/寻物启事",
    "name": "PutApiLostandfound"
  },
  {
    "type": "GET",
    "url": "/api/notice",
    "title": "获取公告",
    "group": "notice",
    "version": "0.0.0",
    "filename": "routes/api/notice/index.js",
    "groupTitle": "通知/公告",
    "name": "GetApiNotice"
  },
  {
    "type": "GET",
    "url": "/api/notification",
    "title": "获取通知",
    "group": "notice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/notification/index.js",
    "groupTitle": "通知/公告",
    "name": "GetApiNotification"
  },
  {
    "type": "GET",
    "url": "/api/notification/read",
    "title": "获取通知阅读情况",
    "group": "notice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/notification/read/index.js",
    "groupTitle": "通知/公告",
    "name": "GetApiNotificationRead"
  },
  {
    "type": "GET",
    "url": "/api/notification/unread",
    "title": "获取未读通知的数量",
    "group": "notice",
    "version": "0.0.0",
    "filename": "routes/api/notification/unread.js",
    "groupTitle": "通知/公告",
    "name": "GetApiNotificationUnread"
  },
  {
    "type": "POST",
    "url": "/api/notice",
    "title": "新建公告",
    "group": "notice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/notice/index.js",
    "groupTitle": "通知/公告",
    "name": "PostApiNotice"
  },
  {
    "type": "POST",
    "url": "/api/notification",
    "title": "新建通知",
    "group": "notice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notificationId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "annex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/notification/index.js",
    "groupTitle": "通知/公告",
    "name": "PostApiNotification"
  },
  {
    "type": "POST",
    "url": "/api/notification/read",
    "title": "阅读通知",
    "group": "notice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/notification/read/index.js",
    "groupTitle": "通知/公告",
    "name": "PostApiNotificationRead"
  },
  {
    "type": "DELETE",
    "url": "/api/curriculum",
    "title": "删除自定义课程",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/curriculum.js",
    "groupTitle": "其他",
    "name": "DeleteApiCurriculum"
  },
  {
    "type": "DELETE",
    "url": "/api/exerciseNotification",
    "title": "删除跑操提醒",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/exerciseNotification.js",
    "groupTitle": "其他",
    "name": "DeleteApiExercisenotification"
  },
  {
    "type": "GET",
    "url": "/api/annex",
    "title": "附件下载接口",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "annex",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/minio.js",
    "groupTitle": "其他",
    "name": "GetApiAnnex"
  },
  {
    "type": "GET",
    "url": "/api/card",
    "title": "一卡通信息及流水查询",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "date",
            "description": "<p>查询日期，格式 YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/card.js",
    "groupTitle": "其他",
    "name": "GetApiCard"
  },
  {
    "type": "GET",
    "url": "/api/curriculum",
    "title": "课表查询",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "term",
            "description": "<p>学期号（不填则为教务处设定的当前学期）</p> <h2>返回格式举例：</h2> <p>{ term: { name, maxWeek, startDate?, endDate?, isCurrent?, isNext?, isPrev? } // 查不到开学日期时只有前两个 user: { cardnum, schoolnum, name, collegeId, collegeName, majorId, majorName } curriculum: [ { // 浮动课程只有前五个属性 courseName, teacherName, credit, beginWeek, endWeek,       // 1 ~ 16 // 非浮动课程兼有后面这些属性 dayOfWeek?,               // 为了数据直观以及前端绘图方便，1-7 分别表示周一到周日 flip?,                    // even 双周, odd 单周, none 全周 location?, beginPeriod?, endPeriod?, // 1 ~ 13 events: [ { week, startTime, endTime } // 课程每一周上课的具体时间戳 ] } ] }</p> <h2>关于丁家桥课表的周次问题：</h2> <p>在之前 webserv2 的使用中，我们发现部分院系课表的周次与常理相悖，这种现象尤以丁家桥校区为甚。 经过调查，该现象是因为丁家桥校区多数院系不设短学期，短学期和秋季学期合并为一个大学期， 而教务处系统不支持这种设定，致使排课老师对此进行主观处理导致的。 由于不同院系排课老师理解的区别，所做的主观处理也不尽相同，具体表现有以下三种：</p> <ol> <li> <p>短学期课表有 1-4 周，长学期课表有 1-16 周 这种课表属于正常课表，不需要做任何处理即可兼容；</p> </li> <li> <p>短学期课表为空，长学期课表有 1-20 周 这类课表出现时，老师通常让学生直接查询长学期课表，将短学期的开学日期当做长学期的开学日期。 对于这类课表，我们需要在系统中将长学期开学日期向前推4周，而且短学期为空时应当主动转化为长学期查询；</p> </li> <li> <p>短学期课表有 1-4 周，长学期课表有 5-20 周 这类课表出现时，老师通常让学生查询短学期课表作为前四周，长学期课表作为后 16 周。 对于这类课表，我们需要在系统中将长学期开学日期向前推4周。</p> </li> </ol>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/curriculum.js",
    "groupTitle": "其他",
    "name": "GetApiCurriculum"
  },
  {
    "type": "GET",
    "url": "/api/exerciseNotification",
    "title": "设置跑操提醒",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/exerciseNotification.js",
    "groupTitle": "其他",
    "name": "GetApiExercisenotification"
  },
  {
    "type": "GET",
    "url": "/api/lecture",
    "title": "人文讲座信息查询",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lecture",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/lecture.js",
    "groupTitle": "其他",
    "name": "GetApiLecture"
  },
  {
    "type": "GET",
    "url": "/api/library",
    "title": "查询图书借阅",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/library.js",
    "groupTitle": "其他",
    "name": "GetApiLibrary"
  },
  {
    "type": "GET",
    "url": "/api/scholarship",
    "title": "获取校历（图片地址）",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/schedule.js",
    "groupTitle": "其他",
    "name": "GetApiScholarship"
  },
  {
    "type": "GET",
    "url": "/api/schoolbus",
    "title": "校车时间表",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/schoolbus.js",
    "groupTitle": "其他",
    "name": "GetApiSchoolbus"
  },
  {
    "type": "GET",
    "url": "/api/term",
    "title": "获取学期信息",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/term.js",
    "groupTitle": "其他",
    "name": "GetApiTerm"
  },
  {
    "type": "GET",
    "url": "/api/user",
    "title": "用户基本信息查询",
    "group": "other",
    "version": "0.0.0",
    "filename": "routes/api/user.js",
    "groupTitle": "其他",
    "name": "GetApiUser"
  },
  {
    "type": "GET",
    "url": "/api/version",
    "title": "获取 App 版本信息",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/version.js",
    "groupTitle": "其他",
    "name": "GetApiVersion"
  },
  {
    "type": "POST",
    "url": "/api/curriculum",
    "title": "自定义课程",
    "group": "other",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "teacherName",
            "description": "<p>老师名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "beginWeek",
            "description": "<p>开始周次</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endWeek",
            "description": "<p>结束周次`</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayOfWeek",
            "description": "<p>星期几      // 为了数据直观以及前端绘图方便，1-7 分别表示周一到周日</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "flip",
            "description": "<p>单双周      // even 双周, odd 单周, none 全周</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "beginPeriod",
            "description": "<p>开始节次</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endPeriod",
            "description": "<p>结束节次</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "location",
            "description": "<p>地点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/curriculum.js",
    "groupTitle": "其他",
    "name": "PostApiCurriculum"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "bookId",
            "description": ""
          }
        ]
      }
    },
    "group": "other_暂时继借是不可能的",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/library.js",
    "groupTitle": "other_暂时继借是不可能的",
    "name": ""
  },
  {
    "type": "GET",
    "url": "/api/pe",
    "title": "跑操查询",
    "group": "pe",
    "version": "0.0.0",
    "filename": "routes/api/pe/index.js",
    "groupTitle": "体育",
    "name": "GetApiPe"
  },
  {
    "type": "GET",
    "url": "/api/pe/exam",
    "title": "获取理论考试参考",
    "group": "pe",
    "version": "0.0.0",
    "filename": "routes/api/pe/exam.js",
    "groupTitle": "体育",
    "name": "GetApiPeExam"
  },
  {
    "type": "GET",
    "url": "/api/pe/morningExerciseNotification",
    "title": "跑操状态查询",
    "group": "pe",
    "version": "0.0.0",
    "filename": "routes/api/pe/morningExerciseNotification.js",
    "groupTitle": "体育",
    "name": "GetApiPeMorningexercisenotification"
  },
  {
    "type": "POST",
    "url": "/api/pe/morningExerciseNotification",
    "title": "跑操状态建立",
    "group": "pe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/pe/morningExerciseNotification.js",
    "groupTitle": "体育",
    "name": "PostApiPeMorningexercisenotification"
  },
  {
    "type": "GET",
    "url": "/api/srtp",
    "title": "SRTP查询",
    "group": "srtp",
    "version": "0.0.0",
    "filename": "routes/api/srtp/index.js",
    "groupTitle": "srtp竞赛相关",
    "name": "GetApiSrtp"
  },
  {
    "type": "GET",
    "url": "/api/srtp/competition",
    "title": "获取竞赛列表",
    "group": "srtp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/srtp/competition.js",
    "groupTitle": "srtp竞赛相关",
    "name": "GetApiSrtpCompetition"
  },
  {
    "type": "POST",
    "url": "/api/srtp/competition",
    "title": "解析竞赛详情",
    "group": "srtp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/srtp/competition.js",
    "groupTitle": "srtp竞赛相关",
    "name": "PostApiSrtpCompetition"
  },
  {
    "type": "DELETE",
    "url": "/api/teamProject/participation",
    "title": "删除申请信息",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/participation.js",
    "groupTitle": "竞赛组队项目",
    "name": "DeleteApiTeamprojectParticipation"
  },
  {
    "type": "DELETE",
    "url": "/api/teamProject/project",
    "title": "删除组队项目",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deleted",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/project.js",
    "groupTitle": "竞赛组队项目",
    "name": "DeleteApiTeamprojectProject"
  },
  {
    "type": "GET",
    "url": "/api/teamProject/audit",
    "title": "获得待审核的列表",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页面尺寸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/audit.js",
    "groupTitle": "竞赛组队项目",
    "name": "GetApiTeamprojectAudit"
  },
  {
    "type": "GET",
    "url": "/api/teamProject/participation",
    "title": "获取申请信息",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamProjectId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromMe",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/participation.js",
    "groupTitle": "竞赛组队项目",
    "name": "GetApiTeamprojectParticipation"
  },
  {
    "type": "GET",
    "url": "/api/teamProject/project",
    "title": "根据关键字/类别搜索",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectedType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页面尺寸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/search.js",
    "groupTitle": "竞赛组队项目",
    "name": "GetApiTeamprojectProject"
  },
  {
    "type": "GET",
    "url": "/api/teamProject/project",
    "title": "获取组队项目",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "how",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页面尺寸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/project.js",
    "groupTitle": "竞赛组队项目",
    "name": "GetApiTeamprojectProject"
  },
  {
    "type": "POST",
    "url": "/api/teamProject/audit",
    "title": "审核组队",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamProjectId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPassed",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/audit.js",
    "groupTitle": "竞赛组队项目",
    "name": "PostApiTeamprojectAudit"
  },
  {
    "type": "POST",
    "url": "/api/teamProject/participation",
    "title": "创建申请信息",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teamProjectId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skill",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qqNum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/participation.js",
    "groupTitle": "竞赛组队项目",
    "name": "PostApiTeamprojectParticipation"
  },
  {
    "type": "POST",
    "url": "/api/teamProject/project",
    "title": "创建组队项目",
    "group": "teamProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectDesc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qqNum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skillRequirement",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duartion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherRequirement",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wantedNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "endTime",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/teamProject/project.js",
    "groupTitle": "竞赛组队项目",
    "name": "PostApiTeamprojectProject"
  }
] });
