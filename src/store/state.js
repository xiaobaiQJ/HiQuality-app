import {deviceH} from "../utils/utils";
import {store} from './store'

export default {
  ownerTableInfo: {},  //总监办和业主用表表头信息
  supervisorTableInfo: {}, //监理用表表头信息
  supervisingUnit: '', //绿化页面的监理对象
  supervisingUnitList: [], //绿化页面的监理列表
  random: '',//用于全局触发辨识
  loading: false,//全局加载动画
  projPartsId: '',//工程部位id
  // 1.工序列表面包屑  2.业务记录  3.表格审核 4.K模块
  moduleType: '',
  tableId: '',//业务表id
  recInfo: {},  //rec记录
  userLevel: "",//用户级别
  contractId: "",//合同段Id
  filePath: "http://192.168.1.53:9090/HiQuality",//公共附件列表
  k01: {
    projDiv: '',
    obj: {
      data: ""
    }
  },//k01 分项工程
  k02: '',//k02 分部工程
  k03: '',//k03 单位工程
  unitTable: "",//工程表头 a、b、c
  menuList: [],//菜单列表
  process: {},//工序列表
  project_Divide: {},//工程划分
  projectType: 1,
  porjectDel: '',
  routerList: [],//路由列表
  deviceStyle: deviceH(),
  recId: "",//当前记录id
  user: "",//当前用户   contractId 对象属性全局调用
  aduitStatus: "",//当前审核状态
  token: '',  //验证用户是否登录
  workArea: "",//当前工区id
  supervisor: '',//当前监理
  section: "",//当前标段
  nameList: [], //流程人签字栏集合
  currentType: 3, //1.新增 2.修改 3.查看+编辑 4.查看
  auditorTypeIds: [],//审核人类型数组
  procedureControl:[] //当前单位工程

}
