import axios from 'axios'
import {store} from '../../store/store'
import qs from 'qs'
import {router} from '../../router/devRouter'
import {splitDate, joinDate} from "../utils";

export default {

  /**
   * 拼接路径
   * @method 方法名
   * @param {无} 无 参数说明
   * @return {返回值类型} 返回值说明
   */
  joinPath(path) {
    let filePath = store.state.filePath + path
    console.log(filePath)
    return filePath
  },

  /**
   * 方法描述
   * @method 方法名
   * @param {无} separator 字符串或正则表达式，从该参数指定的地方分割 。
   * @param {无} howmany 以什么分割。
   * @return {Array} 返回值说明
   */
  splistData(separator, howmany) {
    let arr = [];
    if (separator == null || separator == undefined || separator == "") {
      return ""
    }
    arr = separator.split('-')
    return arr
  },


  /**
   * 修改全局contractId
   * @method setContractId
   * @param {int} contractId 合同段id
   * @return {返回值类型} 无
   */
  setContractId(obj) {
    axios.get("/HiQuality/rec/updateContractId", {
      params: {
        contractId: obj.contractId
      }
    }).then((res) => {
      console.log("修改全局contractId");
      console.log(res)
      return true
      scope.$router.push({
        path: obj.tableUrl,
        query: {
          id: obj.id,
          title: obj.tableName
        }
      })
    })
  },

  /**
   * 查询K模块无数据时调用，用于获取C模块对应的TableId
   * @method getTable
   * @param {Int} id 当前K模块的tableId
   * @return {object} 里面有个parentId用来查询C模块
   */
  getTable(callback) {
    axios.get('/HiQuality/table/findById', {
      params: {
        id: store.state.tableId,
      }
    }).then(res => {
      console.log("查询tableId");
      console.log(res.data);
      this.getC(res.data.data.parentId, res => {
        callback(res);
      });
      /*  */
    })
  },

  /**
   * C模块全局查询
   * @method getC
   * @param {int} tableId 当前查询模块tableId
   * @param {int} projPartsId 当前工程部位Id
   * @return {object} C模块查询对象
   */
  getC(tableId, callback) {
    let obj = {};//主表对象
    let arr = [];//临时容器
    let status = 200; //返回状态
    axios.get('/HiQuality/c/findById', {
      params: {
        tableId: tableId,
        projPartsId: store.state.projPartsId
      }
    }).then(res => {
      console.log("查询C表数据")
      console.log(res);
      if (res.data.status == 200) {
        obj = res.data.data.main;
        obj.subList = res.data.data.sub;
        if (obj.subList != undefined && obj.subList.length > 0) {
          obj.subList.forEach((item) => {
            delete item.id;
            delete item.mid;
            arr.push(item);
          })
          callback({
            status: 200,
            obj: obj,
            controlArr: arr
          })
        }
      } else {
        console.log("查询C表失败")
        callback({
          status: 400,
          obj: obj,
          controlArr: arr
        })
      }
    })
  },

  //k模块
  k: {
    /**
     * 查询K模块无数据时调用，用于获取C模块对应的TableId
     * @method getTable
     * @param {Int} id 当前K模块的tableId
     * @return {object} 里面有个parentId用来查询C模块
     */
    getTable(scope, callback) {
      axios.get('/HiQuality/table/findById', {
        params: {
          id: store.state.tableId,
        }
      }).then(res => {
        console.log("查询tableId");
        console.log(res.data);
        this.getC(scope, res.data.data.tableCId);
        /*  */
      })
    },

    /**
     * C模块全局查询
     * @method getC
     * @param {int} tableId 当前查询模块tableId
     * @param {int} projPartsId 当前工程部位Id
     * @return {object} C模块查询对象
     */
    getC(scope, tableId) {
      let obj = {};//主表对象
      let arr = [];//临时容器
      let status = 200; //返回状态
      axios.get('/HiQuality/c/findById', {
        params: {
          tableId: tableId,
          projPartsId: store.state.projPartsId
        }
      }).then(res => {
        console.log("查询C表数据")
        console.log(res);
        if (res.data.status == 200) {
          obj = res.data.data.main;
          obj.subList = res.data.data.sub;
          if (obj.subList != undefined && obj.subList.length > 0) {
            obj.subList.forEach((item) => {
              delete item.id;
              delete item.mid;
              arr.push(item);
            })
            scope.obj = {};
            scope.controlArr = arr;
          }
        } else {
          console.log("查询C表失败");

          console.log(res)
        }
      })
    },
    /**
     * K模块全局查询
     * @method getK
     * @param {int} tableId 当前查询模块tableId
     * @param {int} projPartsId 当前工程部位Id
     * @return {object} K模块查询对象
     */
    get(scope, callback) {
      let obj = {};//主表对象
      let arr = [];//临时容器
      let controlArr = [];//控制从表行和列
      let status = 200; //返回状态
      axios.get('/HiQuality/k/findById', {
        params: {
          tableId: store.state.tableId,
          projPartsId: store.state.projPartsId
        }
      }).then(res => {
        console.log("查询K模块接口");
        console.log(res.data);
        status = res.data.status;
        if (status == 400) {
          console.log("K模块无数据，默认调用C模块")
          console.log(this);
          this.getTable(scope, table => {
            if (table.status == 200) {
              scope.obj = table.obj;
              scope.controlArr = table.controlArr;
            }
          });
        } else {
          console.log("K模块有数据")
          console.log(res.data);
          obj = res.data.data.main;
          obj.subList = res.data.data.sub;
          if (obj.subList != undefined && obj.subList.length > 0) {
            obj.subList.forEach((item) => {
              arr.push(item);
            })
            scope.obj = obj;
            let filtrate = []
            if (scope.obj.apperanceIndentify != null){
              filtrate = scope.obj.apperanceIndentify.split(',');
            }
            filtrate.forEach((item)=>{
              scope.appearanceList.forEach((subItem)=>{
                if(item == subItem.id){
                  subItem.appearValue = true;
                }
              })
            })

            scope.controlArr = arr;
            /*    callback({
                  status: status,
                  obj: obj,
                  controlArr: arr
                })*/
          } else {

          }
        }

      })

    },

    //初始化模块
    init(scope) {

      scope.id = scope.$route.query.id;
      scope.rec.tableId = scope.$store.state.tableId;
      scope.rec.projPartsId = scope.$store.state.projPartsId;
      scope.setSubObj();
      scope.headerInfo = scope.$store.state.k01;
      if (scope.headerInfo.projDiv != '' && scope.headerInfo.projDiv != null && scope.headerInfo.projDiv != undefined) {
        scope.info1 = scope.headerInfo.projDiv;
      }
      if (scope.headerInfo.obj.data != '' && scope.headerInfo.obj.data != null && scope.headerInfo.obj.data != undefined) {
        scope.info2 = scope.headerInfo.obj.data;
      }
      //调用获取监理等流程人签字栏数据接口
      scope.getSignName();
      //获取监理等流程人签字栏数据
      scope.nameList = scope.$store.state.nameList;
    },

    //新增
    add(scope) {
      if (scope.obj.qualityGrade == undefined || scope.obj.qualityGrade === '') {
        scope.$tost.essential();
        return
      }
      scope.rec.tableId = scope.$store.state.tableId;
      scope.rec.projPartsId = scope.$store.state.projPartsId;
      if(scope.appearanceList!=null || scope.appearanceList!=undefined){
        let apperanceIndentify = "";
        scope.appearanceList.forEach((item, index) => {
          if (item.appearValue == true) {
            if (index == scope.appearanceList.length - 1) {
              apperanceIndentify += item.id
            } else {
              apperanceIndentify += item.id + ','
            }
          }
        });
        scope.obj.apperanceIndentify = apperanceIndentify;
      }
      scope.obj.subList = scope.controlArr;
      delete scope.obj.filtrate;
      scope.axios.post('/HiQuality/k/save', scope.$qs.stringify({
        BBtK1M: JSON.stringify(scope.obj),
        rec: JSON.stringify(scope.rec)
      }))
        .then(res => {
          console.log("新增接口")
          console.log(res);
          if (res.data.status == 200) {
            scope.isAdd = false;
            scope.$tost.add();
            scope.$skip.skipProcess();
          }
        })
    },
    //修改
    update(scope) {
      scope.obj.subList = scope.controlArr;
      if(scope.appearanceList!=null || scope.appearanceList!=undefined){
        let apperanceIndentify = "";
        scope.appearanceList.forEach((item, index) => {
          if (item.appearValue == true) {
            if (index == scope.appearanceList.length - 1) {
              apperanceIndentify += item.id
            } else {
              apperanceIndentify += item.id + ','
            }
          }
        });
        scope.obj.apperanceIndentify = apperanceIndentify;
      }
      scope.axios.post('/HiQuality/k/update', scope.$qs.stringify({
        BBtK1M: JSON.stringify(scope.obj)
      }))
        .then(res => {
          console.log("修改接口")
          console.log(res);
          if (res.data.status == 200) {
            scope.getData();
            scope.$tost.edit();
            scope.$skip.skipProcess();
          }
        })
    },
    //获取签字栏
    getNameList(scope) {
      scope.nameList = scope.$store.state.nameList;
      if (scope.nameList != '' && scope.nameList != undefined && scope.nameList.length > 0) {
        scope.nameList.forEach((item, index) => {
          if (item != '' && item != undefined) {
            if (item[1].auditTypeId == 26) {
              scope.nameList1 = item;
              scope.dateArr = splitDate(scope.nameList1[0].auditTime, '-');
            }
          }
        })
      }
    }
  }

}
