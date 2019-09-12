export default {
  //设置工序控制面包屑
  setProcedureControl(state,procedureControl){
    state.procedureControl = procedureControl;
  },
  setRecInfo(state,recInfo) {
    state.recInfo = recInfo;
  },
  //设置总监办和业主用表表头信息
  setOwnerTableInfo(state,ownerTableInfo) {
    state.ownerTableInfo = ownerTableInfo;
  },
  //设置监理用表表头信息
  setSupervisorTableInfo(state,supervisorTableInfo) {
    state.supervisorTableInfo = supervisorTableInfo;
  },
  //设置审核人类型数组
  setAuditorTypeIds(state,auditorTypeIds) {
    state.auditorTypeIds = auditorTypeIds;
  },
  setSupervisingUnit(state,supervisingUnit) {
    state.supervisingUnit = supervisingUnit;
  },
  setSupervisingUnitList(state,supervisingUnitList) {
    state.supervisingUnitList = supervisingUnitList;
  },
  setModel(state, model) {
    state.model = model;
  },
  setModuleType(state, moduleType) {
    state.moduleType = moduleType;
  },

  setCurrentType(state, currentType) {
    state.currentType = currentType
  },

  setWatchState(state, watchState) {
    state.watchState = watchState
  },
  setRandom(state, random) {
    state.random = random;
  },
  setRecId(state, recId) {
    state.recId = recId;
  },
  setTableId(state, tableId) {
    state.tableId = tableId;
  },
  //设置流程人签字栏集合
  setNameList(state, nameList) {
    state.nameList = nameList;
  },
  //设置用户级别
  setUserLevel(state, userLevel) {
    state.userLevel = userLevel;
  },
  setProjPartsId(state, projPartsId) {
    state.projPartsId = projPartsId;
  },
  setWorkArea(state, workArea) {
    state.workArea = workArea;
  },
  setSection(state, section) {
    state.section = section;
  },
  setSupervisor(state, supervisor) {
    state.supervisor = supervisor;
  },
  setK01(state, k01) {
    state.k01 = k01;
  },
  setK02(state, k02) {
    state.k02 = k02;
  },
  setK03(state, k03) {
    state.k03 = k03;
  },
  //保存a、b、c模块的公用表头
  setUnitTable(state, unitTable) {
    state.unitTable = unitTable;
  },
  //修改路由集合
  setRouteList(state, routeList) {
    state.routerList = routeList;
  },
  setMenuList(state, menuList) {
    state.menuList = menuList
  },
  setProject_Divide(state, project_Divide) {
    state.project_Divide = project_Divide;
  },
  setPorjectDel(state, porjectDel) {
    state.porjectDel = porjectDel;
  },
  setDeviceStyle(state, deviceStyle) {
    state.deviceStyle = deviceStyle;
  },
  setProcess(state, process) {
    state.process = process;
  },
  setProject(state, projectType) {
    state.projectType = projectType
  },
  setToken(state, token) {
    state.token = token;
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setUser(state, user) {
    state.user = user;
  },
  setAduitStatus(state, aduitStatus) {
    state.aduitStatus = aduitStatus
  }
};
