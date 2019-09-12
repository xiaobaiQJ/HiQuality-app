import axios from 'axios'
import {store} from '.././store/store'

export default {
  //通过tableId查询审核人类型接口
  getAuditorTypeIds(tag) {
    let auditorTypeIds = [];
    axios.get('/HiQuality/auditFlow/getByTableId', {
      params: {
        tableId: store.state.tableId
      }
    }).then(res => {
      console.log("通过tableId查询审核人类型获取接口")
      console.log(res);
      if (res.data.status == 200) {
        auditorTypeIds = res.data.data
        store.commit("setAuditorTypeIds", auditorTypeIds);
      }
    })
    return new Promise(function (resolve, reject) {
      if (tag) {
        resolve('默认参数success');
      } else {
        reject('默认参数filed');
      }
    })

  },
  //绿化页面监理列表获取接口
  getSupervisingList() {
    let supervisingUnitList = [];
    axios.get('/HiQuality/tbInfo/getUnit', {
      params: {}
    }).then(res => {
      console.log("监理列表获取接口")
      console.log(res);
      if (res.data.status == 200) {
        supervisingUnitList = res.data.data
        store.commit("setSupervisingUnitList", supervisingUnitList);
      }
    })
  },
  //绿化页面监理对象获取接口
  getSupervisingUnit(consId) {
    let supervisingUnit = [];
    axios.get('/HiQuality/tbInfo/getUnit2', {
      params: {
        consId: consId
      }
    }).then(res => {
      console.log("监理对象获取接口")
      console.log(res);
      if (res.data.status == 200) {
        supervisingUnit = res.data.data
        store.commit("setSupervisingUnit", supervisingUnit);
      }
    })
  },
  //监理用表表头获取接口
  getSupervisorTableInfo() {
    let supervisorTableInfo = [];
    axios.get('/HiQuality/tbInfo/getUnitInfo2', {
      params: {
        /*contactId:store.state.contractId*/
      }
    }).then(res => {
      console.log("监理用表表头获取接口")
      console.log(res);
      if (res.data.status == 200) {
        supervisorTableInfo = res.data.data
        store.commit("setSupervisorTableInfo", supervisorTableInfo);
      }
    })
  },
  //总监办和业主用表表头获取接口
  getOwnerTableInfo() {
    let ownerTableInfo = [];
    axios.get('/HiQuality/tbInfo/getUnitInfo3', {
      params: {
        /*contactId:store.state.contractId*/
      }
    }).then(res => {
      console.log("总监办和业主用表表头获取接口")
      console.log(res);
      if (res.data.status == 200) {
        ownerTableInfo = res.data.data
        store.commit("setOwnerTableInfo", ownerTableInfo);
      }
    })
  },

  //rec记录获取接口
  getRecInfo() {
    let recInfo = {};
    axios.get('/HiQuality/rec/getRecInfoByTableId', {
      params: {
        projPartsId: store.state.projPartsId,
        tableId: store.state.tableId
      }
    }).then(res => {
      console.log("rec记录获取接口2222")
      console.log(res);
      recInfo = res.data.data
      if (res.data.status == 200) {
        if (res.data.data == null || res.data.data == '') {
          recInfo = {
            recNo: '',
            tableId: store.state.tableId,
            projPartsId: store.state.projPartsId
          };
        } else {

        }
        store.commit("setRecInfo", recInfo);
      }
    })
  },


}
