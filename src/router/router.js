import vueRouter from 'vue-router'
import {store} from '../store/store'

const Login = resolve => require(['@/components/Login'], resolve);
const ThirdPartyLogin = resolve => require(['@/components/ThirdPartyLogin'], resolve);
const Error = resolve => require(['@/components/common/Error'], resolve);
const Quality = resolve => require(['@/components/Quality'], resolve);
const Model = resolve => require(['@/components/model/Model'], resolve);
const Mission = resolve => require(['@/components/common/Mission'], resolve);


/*--------------工序控制----------------*/
const Engineering_Unit = resolve => require(['@/components/procedure_control/engineering/Engineering_Unit'], resolve);
const ProcedureControl = resolve => require(['@/views/engineering_unit/ProcedureControl'], resolve);
const SubentryProcessIndex = resolve => require(['@/views/engineering_unit/process/SubentryProcessIndex'], resolve);
const AuditProcess = resolve => require(['@/views/engineering_unit/process/AuditProcess'], resolve);
const Process = resolve => require(['@/views/engineering_unit/process/Process'], resolve);
const Add_Process_List = resolve => require(['@/views/setup/process_list/add_process_list/Add_Process_List'], resolve);
const ProjectPhotos = resolve => require(['@/views/engineering_unit/process/ProjectPhotos'], resolve);


/*--------------流程管理----------------*/

const process_manage = resolve => require(['@/views/process_manage/process_manage'], resolve);

const Process_Manage_Index = resolve => require(['@/views/process_manage/Process_Manage_Index'], resolve);

const Add_Process = resolve => require(['@/views/process_manage/conf_process_manage/Add_process'], resolve);

const Edit_Process = resolve => require(['@/views/process_manage/conf_process_manage/Edit_process'], resolve);


/*--------------表格审核----------------*/
const FormAudit = resolve => require(['@/views/form_audit/FormAudit'], resolve);

const FormAuditIndex = resolve => require(['@/views/form_audit/FormAuditIndex'], resolve);

const T_Audit_Status = resolve => require(['@/views/form_audit/audit_status/Audit_Status'], resolve);


/*--------------附件列表----------------*/
const AccessoryIndex = resolve => require(['@/views/engineering_unit/accessory/AccessoryIndex'], resolve);


/*-----------------------------------------系统设置----------------*/
const Setup = resolve => require(['@/components/setup/Setup'], resolve);


//系统用户
const Sys_User = resolve => require(['@/views/setup/sys_user/User'], resolve);

const Sys_UserIndex = resolve => require(['@/views/setup/sys_user/UserIndex'], resolve);

const Add_User = resolve => require(['@/views/setup/sys_user/add_user/Add_User'], resolve);

const Edit_User = resolve => require(['@/views/setup/sys_user/edit_user/Edit_User'], resolve);

//评定标准
const EvaluationStandard = resolve => require(['@/views/setup/evaluation_standard/EvaluationStandard'], resolve);

//工程划分
const Project_Divide = resolve => require(['@/views/setup/project_divide/Project_Divide'], resolve);
const Project_Divide_Index = resolve => require(['@/views/setup/project_divide/Project_Divide_Index'], resolve);
const Add_Project_Divide = resolve => require(['@/views/setup/project_divide/add_project_divide/Add_Project_Divide'], resolve);
const Edit_Project_Divide = resolve => require(['@/views/setup/project_divide/edit_project_divide/Edit_Project_Divide'], resolve);

//标准工程

const ProcessListIndex = resolve => require(['@/views/setup/process_list/ProcessListIndex'], resolve);

const Proecss_List = resolve => require(['@/views/setup/process_list/Proecss_List'], resolve);

const StandardEngineering = resolve => require(['@/views/setup/standard_engineering/StandardEngineering'], resolve);

const Standard_Engineering_Index = resolve => require(['@/views/setup/standard_engineering/Standard_Engineering_Index'], resolve);

const Edit_Standard_Engineering = resolve => require(['@/views/setup/standard_engineering/edit_standard_engineering/Edit_Standard_Engineering'], resolve);

const Add_Standard_Engineering = resolve => require(['@/views/setup/standard_engineering/add_standard_engineering/Add_Standard_Engineering'], resolve);
//单位工程
const UnitProject = resolve => require(['@/views/setup/unit_project/UnitProject'], resolve);

const UnitProjectIndex = resolve => require(['@/views/setup/unit_project/UnitProjectIndex'], resolve);

//工序列表
const Set_Add_Process_List = resolve => require(['@/views/setup/process_list/add_process_list/Add_Process_List'], resolve);
const Edit_Process_List = resolve => require(['@/views/setup/process_list/edit_process_list/Edit_Process_List'], resolve);


//业务记录
const BusinessRecord = resolve => require(['@/views/business_record/BusinessRecord'], resolve);
/*-----------------A模块----------------*/
const A01 = resolve => require(['@/components/a/a-01'], resolve);
const A02 = resolve => require(['@/components/a/a-02'], resolve);
const A03 = resolve => require(['@/components/a/a-03'], resolve);
const A04 = resolve => require(['@/components/a/a-04'], resolve);
const A05 = resolve => require(['@/components/a/a-05'], resolve);
const A06 = resolve => require(['@/components/a/a-06'], resolve);
const A07 = resolve => require(['@/components/a/a-07'], resolve);
const A08 = resolve => require(['@/components/a/a-08'], resolve);
const A09 = resolve => require(['@/components/a/a-09'], resolve);
const A10 = resolve => require(['@/components/a/a-10'], resolve);
const A11 = resolve => require(['@/components/a/a-11'], resolve);
const A12 = resolve => require(['@/components/a/a-12'], resolve);
const A13 = resolve => require(['@/components/a/a-13'], resolve);
const A14 = resolve => require(['@/components/a/a-14'], resolve);
const A15 = resolve => require(['@/components/a/a-15'], resolve);
const A16 = resolve => require(['@/components/a/a-16'], resolve);
const A17 = resolve => require(['@/components/a/a-17'], resolve);
const A18 = resolve => require(['@/components/a/a-18'], resolve);
const A19 = resolve => require(['@/components/a/a-19'], resolve);
const A20 = resolve => require(['@/components/a/a-20'], resolve);
const A21 = resolve => require(['@/components/a/a-21'], resolve);
const A22 = resolve => require(['@/components/a/a-22'], resolve);
const A23 = resolve => require(['@/components/a/a-23'], resolve);
const A24 = resolve => require(['@/components/a/a-24'], resolve);
const A25 = resolve => require(['@/components/a/a-25'], resolve);
const A26 = resolve => require(['@/components/a/a-26'], resolve);
const A27 = resolve => require(['@/components/a/a-27'], resolve);
const A28 = resolve => require(['@/components/a/a-28'], resolve);
const A29 = resolve => require(['@/components/a/a-29'], resolve);
const A30 = resolve => require(['@/components/a/a-30'], resolve);
const A31 = resolve => require(['@/components/a/a-31'], resolve);
const A32 = resolve => require(['@/components/a/a-32'], resolve);
const A33 = resolve => require(['@/components/a/a-33'], resolve);
const A34 = resolve => require(['@/components/a/a-34'], resolve);
const A35 = resolve => require(['@/components/a/a-35'], resolve);
const A36 = resolve => require(['@/components/a/a-36'], resolve);
const A37 = resolve => require(['@/components/a/a-37'], resolve);
const A38 = resolve => require(['@/components/a/a-38'], resolve);
const A39 = resolve => require(['@/components/a/a-39'], resolve);
const A40 = resolve => require(['@/components/a/a-40'], resolve);
const A41 = resolve => require(['@/components/a/a-41'], resolve);
const A42 = resolve => require(['@/components/a/a-42'], resolve);
const A43 = resolve => require(['@/components/a/a-43'], resolve);
const A44 = resolve => require(['@/components/a/a-44'], resolve);
const A45 = resolve => require(['@/components/a/a-45'], resolve);
const A46 = resolve => require(['@/components/a/a-46'], resolve);
const A47 = resolve => require(['@/components/a/a-47'], resolve);
const A48 = resolve => require(['@/components/a/a-48'], resolve);
const A49 = resolve => require(['@/components/a/a-49'], resolve);
const A50 = resolve => require(['@/components/a/a-50'], resolve);
const A51 = resolve => require(['@/components/a/a-51'], resolve);
const A52 = resolve => require(['@/components/a/a-52'], resolve);
const A53 = resolve => require(['@/components/a/a-53'], resolve);
const A54 = resolve => require(['@/components/a/a-54'], resolve);
const A55 = resolve => require(['@/components/a/a-55'], resolve);
const A56 = resolve => require(['@/components/a/a-56'], resolve);
const A57 = resolve => require(['@/components/a/a-57'], resolve);
const A58 = resolve => require(['@/components/a/a-58'], resolve);
const A59 = resolve => require(['@/components/a/a-59'], resolve);
const A60 = resolve => require(['@/components/a/a-60'], resolve);
const A61 = resolve => require(['@/components/a/a-61'], resolve);
const A62 = resolve => require(['@/components/a/a-62'], resolve);
const A63 = resolve => require(['@/components/a/a-63'], resolve);
const A64 = resolve => require(['@/components/a/a-64'], resolve);
const A65 = resolve => require(['@/components/a/a-65'], resolve);
const A66 = resolve => require(['@/components/a/a-66'], resolve);
const A67 = resolve => require(['@/components/a/a-67'], resolve);
const A68 = resolve => require(['@/components/a/a-68'], resolve);
const A69 = resolve => require(['@/components/a/a-69'], resolve);
const A70 = resolve => require(['@/components/a/a-70'], resolve);
const A71 = resolve => require(['@/components/a/a-71'], resolve);
const AB01 = resolve => require(['@/components/a/a-b01'], resolve);
const AB02 = resolve => require(['@/components/a/a-b02'], resolve);
const AB03 = resolve => require(['@/components/a/a-b03'], resolve);
const AZ11 = resolve => require(['@/components/a/a-z11'], resolve);
const A10M = resolve => require(['@/components/a/a-10-m'], resolve);
const A70M = resolve => require(['@/components/a/a-70-m'], resolve);
const A39O = resolve => require(['@/components/a/a-39-O'], resolve);
const A40O = resolve => require(['@/components/a/a-40-O'], resolve);
const A41O = resolve => require(['@/components/a/a-41-O'], resolve);
const AKG01 = resolve => require(['@/components/a/akg-01'], resolve);
const AKG02 = resolve => require(['@/components/a/akg-02'], resolve);
const AKG03 = resolve => require(['@/components/a/akg-03'], resolve);
const AKG04 = resolve => require(['@/components/a/akg-04'], resolve);
const AKGReport = resolve => require(['@/components/a/akg-report'], resolve);
const AKGInform = resolve => require(['@/components/a/akg-inform'], resolve);
const AKGCatalog = resolve => require(['@/components/a/akg-catalog'], resolve);

/*-----------------D模块----------------*/

const D01 = resolve => require(['@/components/d/d-01'], resolve);
const D0101 = resolve => require(['@/components/d/d-01-01'], resolve);
const D0102 = resolve => require(['@/components/d/d-01-02'], resolve);
const D02 = resolve => require(['@/components/d/d-02'], resolve);
const D03 = resolve => require(['@/components/d/d-03'], resolve);
const D04 = resolve => require(['@/components/d/d-04'], resolve);
const D05 = resolve => require(['@/components/d/d-05'], resolve);
const D06 = resolve => require(['@/components/d/d-06'], resolve);
const D07 = resolve => require(['@/components/d/d-07'], resolve);
const D08 = resolve => require(['@/components/d/d-08'], resolve);
const D09 = resolve => require(['@/components/d/d-09'], resolve);
const D10 = resolve => require(['@/components/d/d-10'], resolve);
const D11 = resolve => require(['@/components/d/d-11'], resolve);
const D12 = resolve => require(['@/components/d/d-12'], resolve);
const D13 = resolve => require(['@/components/d/d-13'], resolve);
const D1401 = resolve => require(['@/components/d/d-14-01'], resolve);
const D1402 = resolve => require(['@/components/d/d-14-02'], resolve);
const D15 = resolve => require(['@/components/d/d-15'], resolve);
const D16 = resolve => require(['@/components/d/d-16'], resolve);
const D17 = resolve => require(['@/components/d/d-17'], resolve);
const D18 = resolve => require(['@/components/d/d-18'], resolve);
const D19 = resolve => require(['@/components/d/d-19'], resolve);
const D20 = resolve => require(['@/components/d/d-20'], resolve);
const D21 = resolve => require(['@/components/d/d-21'], resolve);
const D22 = resolve => require(['@/components/d/d-22'], resolve);
const D23 = resolve => require(['@/components/d/d-23'], resolve);
const D24 = resolve => require(['@/components/d/d-24'], resolve);
const D25 = resolve => require(['@/components/d/d-25'], resolve);
const D26 = resolve => require(['@/components/d/d-26'], resolve);
const D27 = resolve => require(['@/components/d/d-27'], resolve);
const D28 = resolve => require(['@/components/d/d-28'], resolve);
const D29 = resolve => require(['@/components/d/d-29'], resolve);
const D30 = resolve => require(['@/components/d/d-30'], resolve);
const D31 = resolve => require(['@/components/d/d-31'], resolve);
const D32 = resolve => require(['@/components/d/d-32'], resolve);
const D33 = resolve => require(['@/components/d/d-33'], resolve);
const D34 = resolve => require(['@/components/d/d-34'], resolve);
const D35 = resolve => require(['@/components/d/d-35'], resolve);
const D36 = resolve => require(['@/components/d/d-36'], resolve);
const D37 = resolve => require(['@/components/d/d-37'], resolve);
const D38 = resolve => require(['@/components/d/d-38'], resolve);
const D39 = resolve => require(['@/components/d/d-39'], resolve);
const D40 = resolve => require(['@/components/d/d-40'], resolve);
const D41 = resolve => require(['@/components/d/d-41'], resolve);
const D42 = resolve => require(['@/components/d/d-42'], resolve);
const D43 = resolve => require(['@/components/d/d-43'], resolve);
const D44 = resolve => require(['@/components/d/d-44'], resolve);
const D45 = resolve => require(['@/components/d/d-45'], resolve);
const D46 = resolve => require(['@/components/d/d-46'], resolve);
const D4701 = resolve => require(['@/components/d/d-47-01'], resolve);
const D4702 = resolve => require(['@/components/d/d-47-02'], resolve);
const D48 = resolve => require(['@/components/d/d-48'], resolve);
const D49 = resolve => require(['@/components/d/d-49'], resolve);
const D50 = resolve => require(['@/components/d/d-50'], resolve);
const D51 = resolve => require(['@/components/d/d-51'], resolve);
const D52 = resolve => require(['@/components/d/d-52'], resolve);
const D53 = resolve => require(['@/components/d/d-53'], resolve);
const D54 = resolve => require(['@/components/d/d-54'], resolve);
const D55 = resolve => require(['@/components/d/d-55'], resolve);
const D56 = resolve => require(['@/components/d/d-56'], resolve);
const D57 = resolve => require(['@/components/d/d-57'], resolve);
const D58 = resolve => require(['@/components/d/d-58'], resolve);
const D59 = resolve => require(['@/components/d/d-59'], resolve);
const D60 = resolve => require(['@/components/d/d-60'], resolve);
const D61 = resolve => require(['@/components/d/d-61'], resolve);
const D62 = resolve => require(['@/components/d/d-62'], resolve);
const D63 = resolve => require(['@/components/d/d-63'], resolve);
const D64 = resolve => require(['@/components/d/d-64'], resolve);
const D65 = resolve => require(['@/components/d/d-65'], resolve);
const D66 = resolve => require(['@/components/d/d-66'], resolve);
const D67 = resolve => require(['@/components/d/d-67'], resolve);
const D68 = resolve => require(['@/components/d/d-68'], resolve);
const D69 = resolve => require(['@/components/d/d-69'], resolve);
const D70 = resolve => require(['@/components/d/d-70'], resolve);
const DCL01 = resolve => require(['@/components/d/dcl-01'], resolve);
const DCL02 = resolve => require(['@/components/d/dcl-02'], resolve);
const DCL03 = resolve => require(['@/components/d/dcl-03'], resolve);
const DCL04 = resolve => require(['@/components/d/dcl-04'], resolve);
const DCL05 = resolve => require(['@/components/d/dcl-05'], resolve);
const DCL06 = resolve => require(['@/components/d/dcl-06'], resolve);
const DCL07 = resolve => require(['@/components/d/dcl-07'], resolve);
const DCL08 = resolve => require(['@/components/d/dcl-08'], resolve);
const DCL09 = resolve => require(['@/components/d/dcl-09'], resolve);
const DCL10 = resolve => require(['@/components/d/dcl-10'], resolve);
const DCL11 = resolve => require(['@/components/d/dcl-11'], resolve);
const DCL12 = resolve => require(['@/components/d/dcl-12'], resolve);
const DCL13 = resolve => require(['@/components/d/dcl-13'], resolve);
const DCL14 = resolve => require(['@/components/d/dcl-14'], resolve);
const DCL15 = resolve => require(['@/components/d/dcl-15'], resolve);
const DCL16 = resolve => require(['@/components/d/dcl-16'], resolve);
const DCL17 = resolve => require(['@/components/d/dcl-17'], resolve);
const DLJ01 = resolve => require(['@/components/d/dlj-01'], resolve);
const DLJ02 = resolve => require(['@/components/d/dlj-02'], resolve);
const DLJ03 = resolve => require(['@/components/d/dlj-03'], resolve);
const DLJ04 = resolve => require(['@/components/d/dlj-04'], resolve);
const DLJ05 = resolve => require(['@/components/d/dlj-05'], resolve);
const DQQT01 = resolve => require(['@/components/d/dqqt-01'], resolve);
const QLZJ01 = resolve => require(['@/components/d/QLZJ-01'], resolve);
const DZ061 = resolve => require(['@/components/d/DZ-06-1'], resolve);
const DGJGJ01 = resolve => require(['@/components/d/DGJGJ-01'], resolve);

/*-----------------C模块----------------*/
const C01 = resolve => require(['@/components/c/c-01'], resolve);
const C02 = resolve => require(['@/components/c/c-02'], resolve);
const C03 = resolve => require(['@/components/c/c-03'], resolve);
const C04 = resolve => require(['@/components/c/c-04'], resolve);
const C05 = resolve => require(['@/components/c/c-05'], resolve);
const C06 = resolve => require(['@/components/c/c-06'], resolve);
const C07 = resolve => require(['@/components/c/c-07'], resolve);
const C08 = resolve => require(['@/components/c/c-08'], resolve);
const C09 = resolve => require(['@/components/c/c-09'], resolve);
const C10 = resolve => require(['@/components/c/c-10'], resolve);
const CB01 = resolve => require(['@/components/c/c-b01'], resolve);

const CFH01 = resolve => require(['@/components/c/cfh-01'], resolve);
const CFH02 = resolve => require(['@/components/c/cfh-02'], resolve);
const CFH03 = resolve => require(['@/components/c/cfh-03'], resolve);
const CFH04 = resolve => require(['@/components/c/cfh-04'], resolve);
const CFH05 = resolve => require(['@/components/c/cfh-05'], resolve);
const CFH06 = resolve => require(['@/components/c/cfh-06'], resolve);
const CFH07 = resolve => require(['@/components/c/cfh-07'], resolve);
const CFH08 = resolve => require(['@/components/c/cfh-08'], resolve);
const CFH09 = resolve => require(['@/components/c/cfh-09'], resolve);
const CFH10 = resolve => require(['@/components/c/cfh-10'], resolve);
const CFH11 = resolve => require(['@/components/c/cfh-11'], resolve);
const CFH12 = resolve => require(['@/components/c/cfh-12'], resolve);
const CFH13 = resolve => require(['@/components/c/cfh-13'], resolve);
const CFH14 = resolve => require(['@/components/c/cfh-14'], resolve);
const CFH15 = resolve => require(['@/components/c/cfh-15'], resolve);
const CFH16 = resolve => require(['@/components/c/cfh-16'], resolve);
const CFH17 = resolve => require(['@/components/c/cfh-17'], resolve);
const CFH18 = resolve => require(['@/components/c/cfh-18'], resolve);
const CFH19 = resolve => require(['@/components/c/cfh-19'], resolve);
const CFHB01 = resolve => require(['@/components/c/cfh-b01'], resolve);
const CFHB02 = resolve => require(['@/components/c/cfh-b02'], resolve);
const CFHB03 = resolve => require(['@/components/c/cfh-b03'], resolve);
const CFHB04 = resolve => require(['@/components/c/cfh-b04'], resolve);
const CFHB05 = resolve => require(['@/components/c/cfh-b05'], resolve);
const CFHB06 = resolve => require(['@/components/c/cfh-b06'], resolve);
const CFHB07 = resolve => require(['@/components/c/cfh-b07'], resolve);

const CLH01 = resolve => require(['@/components/c/clh-01'], resolve);
const CLH02 = resolve => require(['@/components/c/clh-02'], resolve);
const CLH03 = resolve => require(['@/components/c/clh-03'], resolve);
const CLH04 = resolve => require(['@/components/c/clh-04'], resolve);
const CLH05 = resolve => require(['@/components/c/clh-05'], resolve);
const CLH061 = resolve => require(['@/components/c/clh-06-1'], resolve);
const CLH062 = resolve => require(['@/components/c/clh-06-2'], resolve);
const CLH063 = resolve => require(['@/components/c/clh-06-3'], resolve);
const CLH064 = resolve => require(['@/components/c/clh-06-4'], resolve);
const CLH065 = resolve => require(['@/components/c/clh-06-5'], resolve);
const CLH066 = resolve => require(['@/components/c/clh-06-6'], resolve);
const CLH07 = resolve => require(['@/components/c/clh-07'], resolve);
const CLH08 = resolve => require(['@/components/c/clh-08'], resolve);
const CLH09 = resolve => require(['@/components/c/clh-09'], resolve);
const CLH10 = resolve => require(['@/components/c/clh-10'], resolve);
const CLH11 = resolve => require(['@/components/c/clh-11'], resolve);
const CLH12 = resolve => require(['@/components/c/clh-12'], resolve);
const CLH13 = resolve => require(['@/components/c/clh-13'], resolve);
const CLH14 = resolve => require(['@/components/c/clh-14'], resolve);
const CLH15 = resolve => require(['@/components/c/clh-15'], resolve);
const CLH16 = resolve => require(['@/components/c/clh-16'], resolve);
const CLH17 = resolve => require(['@/components/c/clh-17'], resolve);
const CLH18 = resolve => require(['@/components/c/clh-18'], resolve);
const CLH19 = resolve => require(['@/components/c/clh-19'], resolve);
const CLH201 = resolve => require(['@/components/c/clh-20-1'], resolve);
const CLH202 = resolve => require(['@/components/c/clh-20-2'], resolve);
const CLH203 = resolve => require(['@/components/c/clh-20-3'], resolve);
const CLH204 = resolve => require(['@/components/c/clh-20-4'], resolve);
const CLH211 = resolve => require(['@/components/c/clh-21-1'], resolve);
const CLH212 = resolve => require(['@/components/c/clh-21-2'], resolve);
const CLH213 = resolve => require(['@/components/c/clh-21-3'], resolve);
const CLH214 = resolve => require(['@/components/c/clh-21-4'], resolve);
const CLH221 = resolve => require(['@/components/c/clh-22-1'], resolve);
const CLH222 = resolve => require(['@/components/c/clh-22-2'], resolve);
const CLH223 = resolve => require(['@/components/c/clh-22-3'], resolve);
const CLH224 = resolve => require(['@/components/c/clh-22-4'], resolve);
const CLH231 = resolve => require(['@/components/c/clh-23-1'], resolve);
const CLH232 = resolve => require(['@/components/c/clh-23-2'], resolve);
const CLH233 = resolve => require(['@/components/c/clh-23-3'], resolve);
const CLH234 = resolve => require(['@/components/c/clh-23-4'], resolve);
const CLH241 = resolve => require(['@/components/c/clh-24-1'], resolve);
const CLH242 = resolve => require(['@/components/c/clh-24-2'], resolve);
const CLH243 = resolve => require(['@/components/c/clh-24-3'], resolve);
const CLH244 = resolve => require(['@/components/c/clh-24-4'], resolve);
const CLH251 = resolve => require(['@/components/c/clh-25-1'], resolve);
const CLH252 = resolve => require(['@/components/c/clh-25-2'], resolve);
const CLH253 = resolve => require(['@/components/c/clh-25-3'], resolve);
const CLH254 = resolve => require(['@/components/c/clh-25-4'], resolve);

const CLM01 = resolve => require(['@/components/c/clm-01'], resolve);
const CLM02 = resolve => require(['@/components/c/clm-02'], resolve);
const CLM03 = resolve => require(['@/components/c/clm-03'], resolve);
const CLM04 = resolve => require(['@/components/c/clm-04'], resolve);
const CLM05 = resolve => require(['@/components/c/clm-05'], resolve);
const CLM06 = resolve => require(['@/components/c/clm-06'], resolve);
const CLM07 = resolve => require(['@/components/c/clm-07'], resolve);
const CLM08 = resolve => require(['@/components/c/clm-08'], resolve);
const CLM09 = resolve => require(['@/components/c/clm-09'], resolve);
const CLM10 = resolve => require(['@/components/c/clm-10'], resolve);
const CLM11 = resolve => require(['@/components/c/clm-11'], resolve);
const CLM12 = resolve => require(['@/components/c/clm-12'], resolve);
const CLM13 = resolve => require(['@/components/c/clm-13'], resolve);
const CLM14 = resolve => require(['@/components/c/clm-14'], resolve);

const CLS01 = resolve => require(['@/components/c/cls-01'], resolve);
const CLS02 = resolve => require(['@/components/c/cls-02'], resolve);
const CLS03 = resolve => require(['@/components/c/cls-03'], resolve);
const CLS04 = resolve => require(['@/components/c/cls-04'], resolve);
const CLS05 = resolve => require(['@/components/c/cls-05'], resolve);
const CLS06 = resolve => require(['@/components/c/cls-06'], resolve);
const CLS07 = resolve => require(['@/components/c/cls-07'], resolve);
const CLS08 = resolve => require(['@/components/c/cls-08'], resolve);
const CLS09 = resolve => require(['@/components/c/cls-09'], resolve);
const CLS10 = resolve => require(['@/components/c/cls-10'], resolve);
const CLS11 = resolve => require(['@/components/c/cls-11'], resolve);
const CLS12 = resolve => require(['@/components/c/cls-12'], resolve);
const CLSB01 = resolve => require(['@/components/c/cls-b01'], resolve);
const CLSB02 = resolve => require(['@/components/c/cls-b02'], resolve);
const CLSB03 = resolve => require(['@/components/c/cls-b03'], resolve);
const CLSX02 = resolve => require(['@/components/c/cls-x02'], resolve);

const CP01 = resolve => require(['@/components/c/cp-01'], resolve);
const CP02 = resolve => require(['@/components/c/cp-02'], resolve);
const CP03 = resolve => require(['@/components/c/cp-03'], resolve);
const CP04 = resolve => require(['@/components/c/cp-04'], resolve);
const CP05 = resolve => require(['@/components/c/cp-05'], resolve);
const CP06 = resolve => require(['@/components/c/cp-06'], resolve);
const CP07 = resolve => require(['@/components/c/cp-07'], resolve);
const CPB01 = resolve => require(['@/components/c/cp-b01'], resolve);

const CQH01 = resolve => require(['@/components/c/cqh-01'], resolve);
const CQH02 = resolve => require(['@/components/c/cqh-02'], resolve);
const CQH03 = resolve => require(['@/components/c/cqh-03'], resolve);
const CQH04 = resolve => require(['@/components/c/cqh-04'], resolve);
const CQH05 = resolve => require(['@/components/c/cqh-05'], resolve);
const CQH06 = resolve => require(['@/components/c/cqh-06'], resolve);
const CQH07 = resolve => require(['@/components/c/cqh-07'], resolve);
const CQH08 = resolve => require(['@/components/c/cqh-08'], resolve);
const CQH09 = resolve => require(['@/components/c/cqh-09'], resolve);
const CQH10 = resolve => require(['@/components/c/cqh-10'], resolve);
const CQH11 = resolve => require(['@/components/c/cqh-11'], resolve);
const CQH12 = resolve => require(['@/components/c/cqh-12'], resolve);
const CQH13 = resolve => require(['@/components/c/cqh-13'], resolve);
const CQH14 = resolve => require(['@/components/c/cqh-14'], resolve);
const CQH15 = resolve => require(['@/components/c/cqh-15'], resolve);
const CQH16 = resolve => require(['@/components/c/cqh-16'], resolve)
const CQH17 = resolve => require(['@/components/c/cqh-17'], resolve);
const CQH18 = resolve => require(['@/components/c/cqh-18'], resolve);
const CQH19 = resolve => require(['@/components/c/cqh-19'], resolve);
const CQH20 = resolve => require(['@/components/c/cqh-20'], resolve);
const CQH21 = resolve => require(['@/components/c/cqh-21'], resolve);
const CQH22 = resolve => require(['@/components/c/cqh-22'], resolve);
const CQH23 = resolve => require(['@/components/c/cqh-23'], resolve);
const CQH24 = resolve => require(['@/components/c/cqh-24'], resolve);
const CQH25 = resolve => require(['@/components/c/cqh-25'], resolve);
const CQH26 = resolve => require(['@/components/c/cqh-26'], resolve);
const CQH27 = resolve => require(['@/components/c/cqh-27'], resolve);
const CQH28 = resolve => require(['@/components/c/cqh-28'], resolve);
const CQH29 = resolve => require(['@/components/c/cqh-29'], resolve);
const CQH30 = resolve => require(['@/components/c/cqh-30'], resolve);
const CQH31 = resolve => require(['@/components/c/cqh-31'], resolve);
const CQH32 = resolve => require(['@/components/c/cqh-32'], resolve);
const CQH33 = resolve => require(['@/components/c/cqh-33'], resolve);
const CQH34 = resolve => require(['@/components/c/cqh-34'], resolve);
const CQH35 = resolve => require(['@/components/c/cqh-35'], resolve);
const CQH36 = resolve => require(['@/components/c/cqh-36'], resolve);
const CQH37 = resolve => require(['@/components/c/cqh-37'], resolve);
const CQH38 = resolve => require(['@/components/c/cqh-38'], resolve);
const CQH39 = resolve => require(['@/components/c/cqh-39'], resolve);
const CQH40 = resolve => require(['@/components/c/cqh-40'], resolve);
const CQH41 = resolve => require(['@/components/c/cqh-41'], resolve);
const CQH42 = resolve => require(['@/components/c/cqh-42'], resolve);
const CQH43 = resolve => require(['@/components/c/cqh-43'], resolve);
const CQH44 = resolve => require(['@/components/c/cqh-44'], resolve);
const CQH45 = resolve => require(['@/components/c/cqh-45'], resolve);
const CQH46 = resolve => require(['@/components/c/cqh-46'], resolve);
const CQH47 = resolve => require(['@/components/c/cqh-47'], resolve);
const CQH48 = resolve => require(['@/components/c/cqh-48'], resolve);
const CQH49 = resolve => require(['@/components/c/cqh-49'], resolve);
const CQH50 = resolve => require(['@/components/c/cqh-50'], resolve);
const CQH51 = resolve => require(['@/components/c/cqh-51'], resolve);
const CQH52 = resolve => require(['@/components/c/cqh-52'], resolve);
const CQH53 = resolve => require(['@/components/c/cqh-53'], resolve);
const CQH54 = resolve => require(['@/components/c/cqh-54'], resolve);
const CQH55 = resolve => require(['@/components/c/cqh-55'], resolve);
const CQH56 = resolve => require(['@/components/c/cqh-56'], resolve);
const CQH57 = resolve => require(['@/components/c/cqh-57'], resolve);
const CQH58 = resolve => require(['@/components/c/cqh-58'], resolve);
const CQH59 = resolve => require(['@/components/c/cqh-59'], resolve);
const CQH60 = resolve => require(['@/components/c/cqh-60'], resolve);
const CQH61 = resolve => require(['@/components/c/cqh-61'], resolve);
const CQH62 = resolve => require(['@/components/c/cqh-62'], resolve);
const CQH63 = resolve => require(['@/components/c/cqh-63'], resolve);
const CQH64 = resolve => require(['@/components/c/cqh-64'], resolve);
const CQH65 = resolve => require(['@/components/c/cqh-65'], resolve);
const CQH66 = resolve => require(['@/components/c/cqh-66'], resolve);
const CQH67 = resolve => require(['@/components/c/cqh-67'], resolve);
const CQH68 = resolve => require(['@/components/c/cqh-68'], resolve);
const CQH69 = resolve => require(['@/components/c/cqh-69'], resolve);
const CQH70 = resolve => require(['@/components/c/cqh-70'], resolve);
const CQH71 = resolve => require(['@/components/c/cqh-71'], resolve);
const CQH72 = resolve => require(['@/components/c/cqh-72'], resolve);
const CQH73 = resolve => require(['@/components/c/cqh-73'], resolve);
const CQH74 = resolve => require(['@/components/c/cqh-74'], resolve);
const CQH75 = resolve => require(['@/components/c/cqh-75'], resolve);
const CQH76 = resolve => require(['@/components/c/cqh-76'], resolve);
const CQH77 = resolve => require(['@/components/c/cqh-77'], resolve);
const CQH78 = resolve => require(['@/components/c/cqh-78'], resolve);
const CQH79 = resolve => require(['@/components/c/cqh-79'], resolve);
const CQH80 = resolve => require(['@/components/c/cqh-80'], resolve);
const CQH81 = resolve => require(['@/components/c/cqh-81'], resolve);
const CQH82 = resolve => require(['@/components/c/cqh-82'], resolve);
const CQH83 = resolve => require(['@/components/c/cqh-83'], resolve);
const CQH84 = resolve => require(['@/components/c/cqh-84'], resolve);
const CQH85 = resolve => require(['@/components/c/cqh-85'], resolve);
const CQH86 = resolve => require(['@/components/c/cqh-86'], resolve);
const CQH87 = resolve => require(['@/components/c/cqh-87'], resolve);
const CQH88 = resolve => require(['@/components/c/cqh-88'], resolve);
const CQH89 = resolve => require(['@/components/c/cqh-89'], resolve);
const CQHB01 = resolve => require(['@/components/c/cqh-B01'], resolve);

const CSD01 = resolve => require(['@/components/c/csd-01'], resolve);
const CSD02 = resolve => require(['@/components/c/csd-02'], resolve);
const CSD03 = resolve => require(['@/components/c/csd-03'], resolve);
const CSD04 = resolve => require(['@/components/c/csd-04'], resolve);
const CSD05 = resolve => require(['@/components/c/csd-05'], resolve);
const CSD06 = resolve => require(['@/components/c/csd-06'], resolve);
const CSD07 = resolve => require(['@/components/c/csd-07'], resolve);
const CSD08 = resolve => require(['@/components/c/csd-08'], resolve);
const CSD09 = resolve => require(['@/components/c/csd-09'], resolve);
const CSD10 = resolve => require(['@/components/c/csd-10'], resolve);
const CSD11 = resolve => require(['@/components/c/csd-11'], resolve);
const CSD12 = resolve => require(['@/components/c/csd-12'], resolve);
const CSD13 = resolve => require(['@/components/c/csd-13'], resolve);
const CSD14 = resolve => require(['@/components/c/csd-14'], resolve);
const CSD15 = resolve => require(['@/components/c/csd-15'], resolve);
const CSD16 = resolve => require(['@/components/c/csd-16'], resolve);
const CSD17 = resolve => require(['@/components/c/csd-17'], resolve);
const CSD18 = resolve => require(['@/components/c/csd-18'], resolve);
const CSD19 = resolve => require(['@/components/c/csd-19'], resolve);
const CSDB02 = resolve => require(['@/components/c/csd-b02'], resolve);
const CSDB03 = resolve => require(['@/components/c/csd-b03'], resolve);

const CSP01 = resolve => require(['@/components/c/csp-01'], resolve);
const CSP02 = resolve => require(['@/components/c/csp-02'], resolve);
const CSP03 = resolve => require(['@/components/c/csp-03'], resolve);

const CXSQ01 = resolve => require(['@/components/c/cxsq-01'], resolve);
const CXSQ02 = resolve => require(['@/components/c/cxsq-02'], resolve);
const CXSQ03 = resolve => require(['@/components/c/cxsq-03'], resolve);
const CXSQ04 = resolve => require(['@/components/c/cxsq-04'], resolve);
const CXSQ05 = resolve => require(['@/components/c/cxsq-05'], resolve);
const CXSQ06 = resolve => require(['@/components/c/cxsq-06'], resolve);
const CXSQ07 = resolve => require(['@/components/c/cxsq-07'], resolve);
const CXSQ08 = resolve => require(['@/components/c/cxsq-08'], resolve);
const CXSQ09 = resolve => require(['@/components/c/cxsq-09'], resolve);
const CXSQ10 = resolve => require(['@/components/c/cxsq-10'], resolve);
const CXSQ11 = resolve => require(['@/components/c/cxsq-11'], resolve);
const CXSQ12 = resolve => require(['@/components/c/cxsq-12'], resolve);
const CXSQ13 = resolve => require(['@/components/c/cxsq-13'], resolve);
const CXSQ14 = resolve => require(['@/components/c/cxsq-14'], resolve);
const CXSQ15 = resolve => require(['@/components/c/cxsq-15'], resolve);
const CXSQ16 = resolve => require(['@/components/c/cxsq-16'], resolve);
const CXSQ17 = resolve => require(['@/components/c/cxsq-17'], resolve);
const CXSQ18 = resolve => require(['@/components/c/cxsq-18'], resolve);
const CXSQ19 = resolve => require(['@/components/c/cxsq-19'], resolve);
const CXSQ20 = resolve => require(['@/components/c/cxsq-20'], resolve);
const CXSQ21 = resolve => require(['@/components/c/cxsq-21'], resolve);

const CXY01 = resolve => require(['@/components/c/cxy-01'], resolve);
const CXY02 = resolve => require(['@/components/c/cxy-02'], resolve);
const CXY03 = resolve => require(['@/components/c/cxy-03'], resolve);
const CXY04 = resolve => require(['@/components/c/cxy-04'], resolve);
const CXY05 = resolve => require(['@/components/c/cxy-05'], resolve);
const CXY06 = resolve => require(['@/components/c/cxy-06'], resolve);
const CXY07 = resolve => require(['@/components/c/cxy-07'], resolve);
const CXY08 = resolve => require(['@/components/c/cxy-08'], resolve);
const CXY09 = resolve => require(['@/components/c/cxy-09'], resolve);

/*-----------------K模块----------------*/
const K2 = resolve => require(['@/components/k/k2'], resolve);
const K3 = resolve => require(['@/components/k/k3'], resolve);
const K01 = resolve => require(['@/components/k/k-01'], resolve);
const K02 = resolve => require(['@/components/k/k-02'], resolve);
const K03 = resolve => require(['@/components/k/k-03'], resolve);
const K04 = resolve => require(['@/components/k/k-04'], resolve);
const K05 = resolve => require(['@/components/k/k-05'], resolve);
const K06 = resolve => require(['@/components/k/k-06'], resolve);
const K07 = resolve => require(['@/components/k/k-07'], resolve);
const K08 = resolve => require(['@/components/k/k-08'], resolve);
const K09 = resolve => require(['@/components/k/k-09'], resolve);
const K10 = resolve => require(['@/components/k/k-10'], resolve);
const KB01 = resolve => require(['@/components/k/k-b01'], resolve);

const KFH01 = resolve => require(['@/components/k/kfh-01'], resolve);
const KFH02 = resolve => require(['@/components/k/kfh-02'], resolve);
const KFH03 = resolve => require(['@/components/k/kfh-03'], resolve);
const KFH04 = resolve => require(['@/components/k/kfh-04'], resolve);
const KFH05 = resolve => require(['@/components/k/kfh-05'], resolve);
const KFH06 = resolve => require(['@/components/k/kfh-06'], resolve);
const KFH07 = resolve => require(['@/components/k/kfh-07'], resolve);
const KFH08 = resolve => require(['@/components/k/kfh-08'], resolve);
const KFH09 = resolve => require(['@/components/k/kfh-09'], resolve);
const KFH10 = resolve => require(['@/components/k/kfh-10'], resolve);
const KFH11 = resolve => require(['@/components/k/kfh-11'], resolve);
const KFH12 = resolve => require(['@/components/k/kfh-12'], resolve);
const KFH13 = resolve => require(['@/components/k/kfh-13'], resolve);
const KFH14 = resolve => require(['@/components/k/kfh-14'], resolve);
const KFH15 = resolve => require(['@/components/k/kfh-15'], resolve);
const KFH16 = resolve => require(['@/components/k/kfh-16'], resolve);
const KFH17 = resolve => require(['@/components/k/kfh-17'], resolve);
const KFH18 = resolve => require(['@/components/k/kfh-18'], resolve);
const KFH19 = resolve => require(['@/components/k/kfh-19'], resolve);
const KFHB01 = resolve => require(['@/components/k/kfh-b01'], resolve);
const KFHB02 = resolve => require(['@/components/k/kfh-b02'], resolve);
const KFHB03 = resolve => require(['@/components/k/kfh-b03'], resolve);
const KFHB04 = resolve => require(['@/components/k/kfh-b04'], resolve);
const KFHB05 = resolve => require(['@/components/k/kfh-b05'], resolve);
const KFHB06 = resolve => require(['@/components/k/kfh-b06'], resolve);
const KFHB07 = resolve => require(['@/components/k/kfh-b07'], resolve);

const KLH01 = resolve => require(['@/components/k/klh-01'], resolve);
const KLH02 = resolve => require(['@/components/k/klh-02'], resolve);
const KLH03 = resolve => require(['@/components/k/klh-03'], resolve);
const KLH04 = resolve => require(['@/components/k/klh-04'], resolve);
const KLH05 = resolve => require(['@/components/k/klh-05'], resolve);
const KLH061 = resolve => require(['@/components/k/klh-06-1'], resolve);
const KLH062 = resolve => require(['@/components/k/klh-06-2'], resolve);
const KLH063 = resolve => require(['@/components/k/klh-06-3'], resolve);
const KLH064 = resolve => require(['@/components/k/klh-06-4'], resolve);
const KLH065 = resolve => require(['@/components/k/klh-06-5'], resolve);
const KLH066 = resolve => require(['@/components/k/klh-06-6'], resolve);
const KLH07 = resolve => require(['@/components/k/klh-07'], resolve);
const KLH08 = resolve => require(['@/components/k/klh-08'], resolve);
const KLH09 = resolve => require(['@/components/k/klh-09'], resolve);
const KLH10 = resolve => require(['@/components/k/klh-10'], resolve);
const KLH11 = resolve => require(['@/components/k/klh-11'], resolve);
const KLH12 = resolve => require(['@/components/k/klh-12'], resolve);
const KLH13 = resolve => require(['@/components/k/klh-13'], resolve);
const KLH14 = resolve => require(['@/components/k/klh-14'], resolve);
const KLH15 = resolve => require(['@/components/k/klh-15'], resolve);
const KLH16 = resolve => require(['@/components/k/klh-16'], resolve);
const KLH17 = resolve => require(['@/components/k/klh-17'], resolve);
const KLH18 = resolve => require(['@/components/k/klh-18'], resolve);
const KLH19 = resolve => require(['@/components/k/klh-19'], resolve);
const KLH201 = resolve => require(['@/components/k/klh-20-1'], resolve);
const KLH202 = resolve => require(['@/components/k/klh-20-2'], resolve);
const KLH203 = resolve => require(['@/components/k/klh-20-3'], resolve);
const KLH204 = resolve => require(['@/components/k/klh-20-4'], resolve);
const KLH211 = resolve => require(['@/components/k/klh-21-1'], resolve);
const KLH212 = resolve => require(['@/components/k/klh-21-2'], resolve);
const KLH213 = resolve => require(['@/components/k/klh-21-3'], resolve);
const KLH214 = resolve => require(['@/components/k/klh-21-4'], resolve);
const KLH221 = resolve => require(['@/components/k/klh-22-1'], resolve);
const KLH222 = resolve => require(['@/components/k/klh-22-2'], resolve);
const KLH223 = resolve => require(['@/components/k/klh-22-3'], resolve);
const KLH224 = resolve => require(['@/components/k/klh-22-4'], resolve);
const KLH231 = resolve => require(['@/components/k/klh-23-1'], resolve);
const KLH232 = resolve => require(['@/components/k/klh-23-2'], resolve);
const KLH233 = resolve => require(['@/components/k/klh-23-3'], resolve);
const KLH234 = resolve => require(['@/components/k/klh-23-4'], resolve);
const KLH241 = resolve => require(['@/components/k/klh-24-1'], resolve);
const KLH242 = resolve => require(['@/components/k/klh-24-2'], resolve);
const KLH243 = resolve => require(['@/components/k/klh-24-3'], resolve);
const KLH244 = resolve => require(['@/components/k/klh-24-4'], resolve);
const KLH251 = resolve => require(['@/components/k/klh-25-1'], resolve);
const KLH252 = resolve => require(['@/components/k/klh-25-2'], resolve);
const KLH253 = resolve => require(['@/components/k/klh-25-3'], resolve);
const KLH254 = resolve => require(['@/components/k/klh-25-4'], resolve);

const KLM01 = resolve => require(['@/components/k/klm-01'], resolve);
const KLM02 = resolve => require(['@/components/k/klm-02'], resolve);
const KLM03 = resolve => require(['@/components/k/klm-03'], resolve);
const KLM04 = resolve => require(['@/components/k/klm-04'], resolve);
const KLM05 = resolve => require(['@/components/k/klm-05'], resolve);
const KLM06 = resolve => require(['@/components/k/klm-06'], resolve);
const KLM07 = resolve => require(['@/components/k/klm-07'], resolve);
const KLM08 = resolve => require(['@/components/k/klm-08'], resolve);
const KLM09 = resolve => require(['@/components/k/klm-09'], resolve);
const KLM10 = resolve => require(['@/components/k/klm-10'], resolve);

const KLS01 = resolve => require(['@/components/k/kls-01'], resolve);
const KLS02 = resolve => require(['@/components/k/kls-02'], resolve);
const KLS03 = resolve => require(['@/components/k/kls-03'], resolve);
const KLS04 = resolve => require(['@/components/k/kls-04'], resolve);
const KLS05 = resolve => require(['@/components/k/kls-05'], resolve);
const KLS06 = resolve => require(['@/components/k/kls-06'], resolve);
const KLS07 = resolve => require(['@/components/k/kls-07'], resolve);
const KLS08 = resolve => require(['@/components/k/kls-08'], resolve);
const KLS09 = resolve => require(['@/components/k/kls-09'], resolve);
const KLS10 = resolve => require(['@/components/k/kls-10'], resolve);
const KLS11 = resolve => require(['@/components/k/kls-11'], resolve);
const KLS12 = resolve => require(['@/components/k/kls-12'], resolve);

const KP01 = resolve => require(['@/components/k/kp-01'], resolve);
const KP02 = resolve => require(['@/components/k/kp-02'], resolve);
const KP03 = resolve => require(['@/components/k/kp-03'], resolve);
const KP04 = resolve => require(['@/components/k/kp-04'], resolve);
const KP05 = resolve => require(['@/components/k/kp-05'], resolve);
const KP06 = resolve => require(['@/components/k/kp-06'], resolve);
const KP07 = resolve => require(['@/components/k/kp-07'], resolve);
const KPB01 = resolve => require(['@/components/k/kp-b01'], resolve);

const KQH01 = resolve => require(['@/components/k/kqh-01'], resolve);
const KQH02 = resolve => require(['@/components/k/kqh-02'], resolve);
const KQH03 = resolve => require(['@/components/k/kqh-03'], resolve);
const KQH04 = resolve => require(['@/components/k/kqh-04'], resolve);
const KQH05 = resolve => require(['@/components/k/kqh-05'], resolve);
const KQH06 = resolve => require(['@/components/k/kqh-06'], resolve);
const KQH07 = resolve => require(['@/components/k/kqh-07'], resolve);
const KQH08 = resolve => require(['@/components/k/kqh-08'], resolve);
const KQH09 = resolve => require(['@/components/k/kqh-09'], resolve);
const KQH10 = resolve => require(['@/components/k/kqh-10'], resolve);
const KQH11 = resolve => require(['@/components/k/kqh-11'], resolve);
const KQH12 = resolve => require(['@/components/k/kqh-12'], resolve);
const KQH13 = resolve => require(['@/components/k/kqh-13'], resolve);
const KQH14 = resolve => require(['@/components/k/kqh-14'], resolve);
const KQH15 = resolve => require(['@/components/k/kqh-15'], resolve);
const KQH16 = resolve => require(['@/components/k/kqh-16'], resolve);
const KQH17 = resolve => require(['@/components/k/kqh-17'], resolve);
const KQH18 = resolve => require(['@/components/k/kqh-18'], resolve);
const KQH19 = resolve => require(['@/components/k/kqh-19'], resolve);
const KQH20 = resolve => require(['@/components/k/kqh-20'], resolve);
const KQH21 = resolve => require(['@/components/k/kqh-21'], resolve);
const KQH22 = resolve => require(['@/components/k/kqh-22'], resolve);
const KQH23 = resolve => require(['@/components/k/kqh-23'], resolve);
const KQH24 = resolve => require(['@/components/k/kqh-24'], resolve);
const KQH25 = resolve => require(['@/components/k/kqh-25'], resolve);
const KQH26 = resolve => require(['@/components/k/kqh-26'], resolve);
const KQH27 = resolve => require(['@/components/k/kqh-27'], resolve);
const KQH28 = resolve => require(['@/components/k/kqh-28'], resolve);
const KQH29 = resolve => require(['@/components/k/kqh-29'], resolve);
const KQH30 = resolve => require(['@/components/k/kqh-30'], resolve);
const KQH31 = resolve => require(['@/components/k/kqh-31'], resolve);
const KQH32 = resolve => require(['@/components/k/kqh-32'], resolve);
const KQH33 = resolve => require(['@/components/k/kqh-33'], resolve);
const KQH34 = resolve => require(['@/components/k/kqh-34'], resolve);
const KQH35 = resolve => require(['@/components/k/kqh-35'], resolve);
const KQH36 = resolve => require(['@/components/k/kqh-36'], resolve);
const KQH37 = resolve => require(['@/components/k/kqh-37'], resolve);
const KQH38 = resolve => require(['@/components/k/kqh-38'], resolve);
const KQH39 = resolve => require(['@/components/k/kqh-39'], resolve);
const KQH40 = resolve => require(['@/components/k/kqh-40'], resolve);
const KQH41 = resolve => require(['@/components/k/kqh-41'], resolve);
const KQH42 = resolve => require(['@/components/k/kqh-42'], resolve);
const KQH43 = resolve => require(['@/components/k/kqh-43'], resolve);
const KQH44 = resolve => require(['@/components/k/kqh-44'], resolve);
const KQH45 = resolve => require(['@/components/k/kqh-45'], resolve);
const KQH46 = resolve => require(['@/components/k/kqh-46'], resolve);
const KQH47 = resolve => require(['@/components/k/kqh-47'], resolve);
const KQH48 = resolve => require(['@/components/k/kqh-48'], resolve);
const KQH49 = resolve => require(['@/components/k/kqh-49'], resolve);
const KQH50 = resolve => require(['@/components/k/kqh-50'], resolve);
const KQH51 = resolve => require(['@/components/k/kqh-51'], resolve);
const KQH52 = resolve => require(['@/components/k/kqh-52'], resolve);
const KQH53 = resolve => require(['@/components/k/kqh-53'], resolve);
const KQH54 = resolve => require(['@/components/k/kqh-54'], resolve);
const KQH55 = resolve => require(['@/components/k/kqh-55'], resolve);
const KQH56 = resolve => require(['@/components/k/kqh-56'], resolve);
const KQH57 = resolve => require(['@/components/k/kqh-57'], resolve);
const KQH58 = resolve => require(['@/components/k/kqh-58'], resolve);
const KQH59 = resolve => require(['@/components/k/kqh-59'], resolve);
const KQH60 = resolve => require(['@/components/k/kqh-60'], resolve);
const KQH61 = resolve => require(['@/components/k/kqh-61'], resolve);
const KQH62 = resolve => require(['@/components/k/kqh-62'], resolve);
const KQH63 = resolve => require(['@/components/k/kqh-63'], resolve);
const KQH64 = resolve => require(['@/components/k/kqh-64'], resolve);
const KQH65 = resolve => require(['@/components/k/kqh-65'], resolve);
const KQH66 = resolve => require(['@/components/k/kqh-66'], resolve);
const KQH67 = resolve => require(['@/components/k/kqh-67'], resolve);
const KQH68 = resolve => require(['@/components/k/kqh-68'], resolve);
const KQH69 = resolve => require(['@/components/k/kqh-69'], resolve);
const KQH70 = resolve => require(['@/components/k/kqh-70'], resolve);
const KQH71 = resolve => require(['@/components/k/kqh-71'], resolve);
const KQH72 = resolve => require(['@/components/k/kqh-72'], resolve);
const KQH73 = resolve => require(['@/components/k/kqh-73'], resolve);
const KQH74 = resolve => require(['@/components/k/kqh-74'], resolve);
const KQH75 = resolve => require(['@/components/k/kqh-75'], resolve);
const KQH76 = resolve => require(['@/components/k/kqh-76'], resolve);
const KQH77 = resolve => require(['@/components/k/kqh-77'], resolve);
const KQH78 = resolve => require(['@/components/k/kqh-78'], resolve);
const KQH79 = resolve => require(['@/components/k/kqh-79'], resolve);
const KQH80 = resolve => require(['@/components/k/kqh-80'], resolve);
const KQH81 = resolve => require(['@/components/k/kqh-81'], resolve);
const KQH82 = resolve => require(['@/components/k/kqh-82'], resolve);

const KQH84 = resolve => require(['@/components/k/kqh-84'], resolve);
const KQH85 = resolve => require(['@/components/k/kqh-85'], resolve);
const KQH86 = resolve => require(['@/components/k/kqh-86'], resolve);
const KQH87 = resolve => require(['@/components/k/kqh-87'], resolve);
const KQH88 = resolve => require(['@/components/k/kqh-88'], resolve);
const KQH89 = resolve => require(['@/components/k/kqh-89'], resolve);
const KQHB01 = resolve => require(['@/components/k/kqh-b01'], resolve);

const KSD01 = resolve => require(['@/components/k/ksd-01'], resolve);
const KSD02 = resolve => require(['@/components/k/ksd-02'], resolve);
const KSD03 = resolve => require(['@/components/k/ksd-03'], resolve);
const KSD04 = resolve => require(['@/components/k/ksd-04'], resolve);
const KSD05 = resolve => require(['@/components/k/ksd-05'], resolve);
const KSD06 = resolve => require(['@/components/k/ksd-06'], resolve);
const KSD07 = resolve => require(['@/components/k/ksd-07'], resolve);
const KSD08 = resolve => require(['@/components/k/ksd-08'], resolve);
const KSD09 = resolve => require(['@/components/k/ksd-09'], resolve);
const KSD10 = resolve => require(['@/components/k/ksd-10'], resolve);
const KSD11 = resolve => require(['@/components/k/ksd-11'], resolve);
const KSD12 = resolve => require(['@/components/k/ksd-12'], resolve);
const KSD13 = resolve => require(['@/components/k/ksd-13'], resolve);
const KSD14 = resolve => require(['@/components/k/ksd-14'], resolve);
const KSD15 = resolve => require(['@/components/k/ksd-15'], resolve);
const KSD16 = resolve => require(['@/components/k/ksd-16'], resolve);
const KSD17 = resolve => require(['@/components/k/ksd-17'], resolve);
const KSD18 = resolve => require(['@/components/k/ksd-18'], resolve);
const KSD19 = resolve => require(['@/components/k/ksd-19'], resolve);
const KSDB02 = resolve => require(['@/components/k/ksd-b02'], resolve);
const KSDB03 = resolve => require(['@/components/k/ksd-b03'], resolve);

const KSP01 = resolve => require(['@/components/k/ksp-01'], resolve);
const KSP02 = resolve => require(['@/components/k/ksp-02'], resolve);
const KSP03 = resolve => require(['@/components/k/ksp-03'], resolve);

const KXSQ01 = resolve => require(['@/components/k/kxsq-01'], resolve);
const KXSQ02 = resolve => require(['@/components/k/kxsq-02'], resolve);
const KXSQ03 = resolve => require(['@/components/k/kxsq-03'], resolve);
const KXSQ04 = resolve => require(['@/components/k/kxsq-04'], resolve);
const KXSQ05 = resolve => require(['@/components/k/kxsq-05'], resolve);
const KXSQ06 = resolve => require(['@/components/k/kxsq-06'], resolve);
const KXSQ07 = resolve => require(['@/components/k/kxsq-07'], resolve);
const KXSQ08 = resolve => require(['@/components/k/kxsq-08'], resolve);
const KXSQ09 = resolve => require(['@/components/k/kxsq-09'], resolve);
const KXSQ10 = resolve => require(['@/components/k/kxsq-10'], resolve);
const KXSQ11 = resolve => require(['@/components/k/kxsq-11'], resolve);
const KXSQ12 = resolve => require(['@/components/k/kxsq-12'], resolve);
const KXSQ13 = resolve => require(['@/components/k/kxsq-13'], resolve);
const KXSQ14 = resolve => require(['@/components/k/kxsq-14'], resolve);
const KXSQ15 = resolve => require(['@/components/k/kxsq-15'], resolve);
const KXSQ16 = resolve => require(['@/components/k/kxsq-16'], resolve);
const KXSQ17 = resolve => require(['@/components/k/kxsq-17'], resolve);
const KXSQ18 = resolve => require(['@/components/k/kxsq-18'], resolve);
const KXSQ19 = resolve => require(['@/components/k/kxsq-19'], resolve);
const KXSQ20 = resolve => require(['@/components/k/kxsq-20'], resolve);
const KXSQ21 = resolve => require(['@/components/k/kxsq-21'], resolve);

const KXY01 = resolve => require(['@/components/k/kxy-01'], resolve);
const KXY02 = resolve => require(['@/components/k/kxy-02'], resolve);
const KXY03 = resolve => require(['@/components/k/kxy-03'], resolve);
const KXY04 = resolve => require(['@/components/k/kxy-04'], resolve);
const KXY05 = resolve => require(['@/components/k/kxy-05'], resolve);
const KXY06 = resolve => require(['@/components/k/kxy-06'], resolve);
const KXY07 = resolve => require(['@/components/k/kxy-07'], resolve);
const KXY08 = resolve => require(['@/components/k/kxy-08'], resolve);
const KXY09 = resolve => require(['@/components/k/kxy-09'], resolve);

/*-----------------JL模块 (检查记录)----------------*/
const JL01 = resolve => require(['@/components/jl/jl-01'], resolve);
const JL02 = resolve => require(['@/components/jl/jl-02'], resolve);
const JL03 = resolve => require(['@/components/jl/jl-03'], resolve);
const JL04 = resolve => require(['@/components/jl/jl-04'], resolve);
const JL05 = resolve => require(['@/components/jl/jl-05'], resolve);
const JL06 = resolve => require(['@/components/jl/jl-06'], resolve);
const JL07 = resolve => require(['@/components/jl/jl-07'], resolve);
const JL08 = resolve => require(['@/components/jl/jl-08'], resolve);
const JL09 = resolve => require(['@/components/jl/jl-09'], resolve);
const JL10 = resolve => require(['@/components/jl/jl-10'], resolve);
const JL11 = resolve => require(['@/components/jl/jl-11'], resolve);
const JL12 = resolve => require(['@/components/jl/jl-12'], resolve);
const JL13 = resolve => require(['@/components/jl/jl-13'], resolve);
const JL14 = resolve => require(['@/components/jl/jl-14'], resolve);
const JL16 = resolve => require(['@/components/jl/jl-16'], resolve);
const JL17 = resolve => require(['@/components/jl/jl-17'], resolve);
const JL18 = resolve => require(['@/components/jl/jl-18'], resolve);
const JL19 = resolve => require(['@/components/jl/jl-19'], resolve);
const JL20 = resolve => require(['@/components/jl/jl-20'], resolve);
const JL21 = resolve => require(['@/components/jl/jl-21'], resolve);
const JL22 = resolve => require(['@/components/jl/jl-22'], resolve);
const JL23 = resolve => require(['@/components/jl/jl-23'], resolve);
const JL24 = resolve => require(['@/components/jl/jl-24'], resolve);
const JL25 = resolve => require(['@/components/jl/jl-25'], resolve);
const JL26 = resolve => require(['@/components/jl/jl-26'], resolve);

/*-----------------AQ模块----------------*/
const AQ01 = resolve => require(['@/components/aq/aq-01'], resolve);
const AQ02 = resolve => require(['@/components/aq/aq-02'], resolve);
const AQ03 = resolve => require(['@/components/aq/aq-03'], resolve);
const AQ04 = resolve => require(['@/components/aq/aq-04'], resolve);
const AQ05 = resolve => require(['@/components/aq/aq-05'], resolve);
const AQ06 = resolve => require(['@/components/aq/aq-06'], resolve);
const AQ07 = resolve => require(['@/components/aq/aq-07'], resolve);
const AQ08 = resolve => require(['@/components/aq/aq-08'], resolve);
const AQ09 = resolve => require(['@/components/aq/aq-09'], resolve);
const AQ10 = resolve => require(['@/components/aq/AQ-10'], resolve);
const AQ11 = resolve => require(['@/components/aq/AQ-11'], resolve);
const AQ12 = resolve => require(['@/components/aq/AQ-12'], resolve);
const AQ13 = resolve => require(['@/components/aq/AQ-13'], resolve);
const AQ14 = resolve => require(['@/components/aq/AQ-14'], resolve);
const AQ15 = resolve => require(['@/components/aq/AQ-15'], resolve);
const AQ16 = resolve => require(['@/components/aq/AQ-16'], resolve);
const AQ17 = resolve => require(['@/components/aq/AQ-17'], resolve);
const AQ18 = resolve => require(['@/components/aq/AQ-18'], resolve);
const AQ19 = resolve => require(['@/components/aq/aq-19'], resolve);
const AQ20 = resolve => require(['@/components/aq/aq-20'], resolve);
const AQ21 = resolve => require(['@/components/aq/aq-21'], resolve);
const AQ22 = resolve => require(['@/components/aq/aq-22'], resolve);
const AQ23 = resolve => require(['@/components/aq/aq-23'], resolve);
const AQ24 = resolve => require(['@/components/aq/aq-24'], resolve);
const AQ25 = resolve => require(['@/components/aq/aq-25'], resolve);
const AQ26 = resolve => require(['@/components/aq/aq-26'], resolve);
const AQ27 = resolve => require(['@/components/aq/aq-27'], resolve);
const AQ28 = resolve => require(['@/components/aq/AQ-28'], resolve);
const AQ29 = resolve => require(['@/components/aq/AQ-29'], resolve);
const AQ30 = resolve => require(['@/components/aq/AQ-30'], resolve);
const AQ31 = resolve => require(['@/components/aq/AQ-31'], resolve);
const AQ32 = resolve => require(['@/components/aq/AQ-32'], resolve);
const AQ33 = resolve => require(['@/components/aq/AQ-33'], resolve);
const AQ34 = resolve => require(['@/components/aq/AQ-34'], resolve);
const AQ35 = resolve => require(['@/components/aq/AQ-35'], resolve);
const AQ36 = resolve => require(['@/components/aq/AQ-36'], resolve);


/*-----------------JC模块 (检查记录)----------------*/
const ctrlPointMonitor = resolve => require(['@/components/jc/CtrlPointMonitor'], resolve);
const InspectRecord = resolve => require(['@/components/jc/InspectRecord'], resolve);
const penalty = resolve => require(['@/components/jc/Penalty'], resolve);
const qualityImprove = resolve => require(['@/components/jc/QualityImprove'], resolve);
const verifyConsign = resolve => require(['@/components/jc/VerifyConsign'], resolve);


const routes = [


  {
    path: "/thirdPartyLogin",
    meta: {
      title: '单点登录'
    },
    component: ThirdPartyLogin,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录页",
    },
  },


  {
    path: "/procedure_control",
    alias: '/procedureCtrl',
    component: Engineering_Unit,
    redirect: "/procedure_control/index",
    children: [
      {
        path: "/procedure_control/index",
        component: ProcedureControl,
        meta: {
          title: "工序控制首页",
          keepAlive:true,
          code: "procedureCtrl/"
        }
      },
      {
        path: "/procedure_control/process_list",
        component: Process,
        meta: {
          title: "工序列表根路由"
        },
        redirect: "/procedure_control/process_list/audit-process",
        children: [
          {
            path: "audit-process",
            component: AuditProcess,
            meta: {
              title: "审核流程"
            }
          },
          {
            path: "index",
            component: SubentryProcessIndex,
            meta: {
              title: "工序列表"
            }
          },
          {
            path: "project-photos",
            component: ProjectPhotos,
            meta: {
              title: "工程照片",
              arr: ["add", "edit", ""]
            }
          }
        ]
      },

      {
        path: "/procedure_control/accessory",
        component: AccessoryIndex,
        meta: {
          title: "附件列表"
        }
      }


    ],
    meta: {
      title: "工序管理根路由"
    }
  },

  {
    path: "/",
    meta: {
      title: "模块页面"
    },
    component: Model,
    children: [

      {
        path: 'ctrlPointMonitor',
        component: ctrlPointMonitor,
        meta: {
          title: "重要质量控制点监控检查表"
        }
      },
      {
        path: 'InspectRecord',
        component: InspectRecord
      },
      {
        path: 'penalty',
        component: penalty
      },

      {
        path: "a01",
        alias: "/A-01",
        component: A01
      },
      {
        path: "a02",
        alias: "/A-02",
        component: A02
      },
      {
        path: "a03",

        alias: "/A-03",
        component: A03
      },
      {
        path: "a04",
        alias: "/A-04",
        component: A04
      },
      {
        path: "a05",

        alias: "/A-05",
        component: A05
      },
      {
        path: "a06",

        alias: "/A-06",
        component: A06
      },
      {
        path: "a07",

        alias: "/A-07",
        component: A07
      },
      {
        path: "a08",

        alias: "/A-08",
        component: A08
      },
      {
        path: "a09",
        alias: "/A-09",
        component: A09
      },
      {
        path: "a10",
        alias: "/A-10",
        component: A10
      },
      {
        path: "a11",
        alias: "/A-11",
        component: A11
      },
      {
        path: "a12",
        alias: "/A-12",
        component: A12
      },
      {
        path: "a13",
        alias: "/A-13",
        component: A13
      },
      {
        path: "a14",
        alias: "/A-14",
        component: A14
      },
      {
        path: "a15",
        alias: "/A-15",
        component: A15
      },
      {
        path: "a16",
        alias: "/A-16",
        component: A16
      },
      {
        path: "a17",
        alias: "/A-17",
        component: A17
      },
      {
        path: "a18",
        alias: "/A-18",
        component: A18
      },
      {
        path: "a19",
        alias: "/A-19",
        component: A19
      },
      {
        path: "a20",
        alias: "/A-20",
        component: A20
      },
      {
        path: "a21",
        alias: "/A-21",
        component: A21
      },
      {
        path: "a22",
        alias: "/A-22",
        component: A22
      },
      {
        path: "a23",
        alias: "/A-23",
        component: A23
      },
      {
        path: "a24",
        alias: "/A-24",
        component: A24
      },
      {
        path: "a25",
        alias: "/A-25",
        component: A25
      }, {
        path: "a26",
        alias: "/A-26",
        component: A26
      }, {
        path: "a27",
        alias: "/A-27",
        component: A27
      },
      {
        path: "a28",
        alias: "/A-28",
        component: A28
      },
      {
        path: "a29",
        alias: "/A-29",
        component: A29
      },
      {
        path: "a30",
        alias: "/A-30",
        component: A30
      },
      {
        path: "a31",
        alias: "/A-31",
        component: A31
      }, {
        path: "a32",
        alias: "/A-32",
        component: A32
      }, {
        path: "a33",
        alias: "/A-33",
        component: A33
      }, {
        path: "a34",
        alias: "/A-34",
        component: A34
      }, {
        path: "a35",
        alias: "/A-35",
        component: A35
      }, {
        path: "a36",
        alias: "/A-36",
        component: A36
      }, {
        path: "a37",
        alias: "/A-36",
        component: A37
      }, {
        path: "a38",
        alias: "/A-38",
        component: A38
      },
      {
        path: "a39",
        alias: "/A-39",
        component: A39
      },
      {
        path: "a40",
        alias: "/A-40",
        component: A40
      },
      {
        path: "a41",
        alias: "/A-41",
        component: A41
      },
      {
        path: "a42",
        alias: "/A-42",
        component: A42
      }, {
        path: "a43",
        alias: "/A-43",
        component: A43
      }, {
        path: "a44",
        alias: "/A-44",
        component: A44
      }, {
        path: "a45",
        alias: "/A-45",
        component: A45
      }, {
        path: "a46",
        alias: "/A-46",
        component: A46
      }, {
        path: "a47",
        alias: "/A-47",
        component: A47
      },
      {
        path: "a48",
        alias: "/A-48",
        component: A48
      },
      {
        path: "a49",
        alias: "/A-49",
        component: A49
      },
      {
        path: "a50",
        alias: "/A-50",
        component: A50
      },
      {
        path: "a51",
        alias: "/A-51",
        component: A51
      },
      {
        path: "a52",
        alias: "/A-52",
        component: A52
      },
      {
        path: "a53",
        alias: "/A-53",
        component: A53
      },
      {
        path: "a54",
        alias: "/A-54",
        component: A54
      }, {
        path: "a55",
        alias: "/A-55",
        component: A55
      }, {
        path: "a56",
        alias: "/A-56",
        component: A56
      },
      {
        path: "a57",
        alias: "/A-57",
        component: A57
      },
      {
        path: "a58",
        alias: "/A-58",
        component: A58
      },
      {
        path: "a59",
        alias: "/A-59",
        component: A59
      },
      {
        path: "a60",
        alias: "/A-60",
        component: A60
      },
      {
        path: "a61",
        alias: "/A-61",
        component: A61
      }, {
        path: "a62",
        alias: "/A-62",
        component: A62
      }, {
        path: "a63",
        alias: "/A-63",
        component: A63
      }, {
        path: "a64",
        alias: "/A-64",
        component: A64
      }, {
        path: "a65",
        alias: "/A-65",
        component: A65
      }, {
        path: "a66",
        alias: "/A-66",
        component: A66
      }, {
        path: "a67",
        alias: "/A-67",
        component: A67
      }, {
        path: "a68",
        alias: "/A-68",
        component: A68
      }, {
        path: "a69",
        alias: "/A-69",
        component: A69
      },
      {
        path: "a70",
        alias: "/A-70",
        component: A70
      },
      {
        path: "a71",
        alias: "/A-71",
        component: A71
      },
      {
        path: "ab01",
        alias: "/A-B01",
        component: AB01
      },
      {
        path: "ab02",
        alias: "/A-B02",
        component: AB02
      },
      {
        path: "ab03",
        alias: "/A-B03",
        component: AB03
      },
      {
        path: "az11",
        alias: "/A-Z11",
        component: AZ11
      },
      {
        path: "a10m",
        alias: "/A-10-M",
        component: A10M
      },
      {
        path: "a70m",
        alias: "/A-70-M",
        component: A70M
      },
      {
        path: "a39o",
        alias: "/A-39-O",
        component: A39O
      },
      {
        path: "a40o",
        alias: "/A-40-O",
        component: A40O
      },
      {
        path: "a41o",
        alias: "/A-41-O",
        component: A41O
      },
      {
        path: "akg01",
        alias: "/KG-01",
        component: AKG01
      },
      {
        path: "akg02",
        alias: "/KG-02",
        component: AKG02
      },
      {
        path: "akg03",
        alias: "/KG-03",
        component: AKG03
      },
      {
        path: "akg04",
        alias: "/KG-04",
        component: AKG04
      },
      {
        path: "akgReport",
        alias: "/KG-report",
        component: AKGReport
      },
      {
        path: "akgInform",
        alias: "/KG-notice",
        component: AKGInform
      },
      {
        path: "akgCatalog",
        alias: "/KG-catalog",
        component: AKGCatalog
      },

      {
        path: "d01",
        alias: "/D-01",
        component: D01
      },
      {
        path: "d0101",
        alias: "/D-01-1",
        component: D0101
      }, {
        path: "d0102",
        alias: "/D-01-2",
        component: D0102
      },
      {
        path: "d02",
        alias: "/D-02",
        component: D02
      },
      {
        path: "d03",
        alias: "/D-03",
        component: D03
      },
      {
        path: "d04",
        alias: "/D-04",
        component: D04
      },
      {
        path: "d05",
        alias: "/D-05",
        component: D05
      },
      {
        path: "d06",
        alias: "/D-06",
        component: D06
      },
      {
        path: "d07",
        alias: "/D-07",
        component: D07
      },
      {
        path: "d08",
        alias: "/D-08",
        component: D08
      },
      {
        path: "d09",
        alias: "/D-9",
        component: D09
      },
      {
        path: "d10",
        alias: "/D-10",
        component: D10
      }, {
        path: "d11",
        alias: "/D-11",
        component: D11
      },
      {
        path: "d12",
        alias: "/D-12",
        component: D12
      },
      {
        path: "d13",
        alias: "/D-13",
        component: D13
      },
      {
        path: "d1401",
        alias: "/D-14-01",
        component: D1401
      },
      {
        path: "d1402",
        alias: "/D-14-02",
        component: D1402
      },
      {
        path: "d15",
        alias: "/D-15",
        component: D15
      },
      {
        path: "d16",
        alias: "/D-16",
        component: D16
      },
      {
        path: "d17",
        alias: "/D-17",
        component: D17
      },
      {
        path: "d18",
        alias: "/D-18",
        component: D18
      },
      {
        path: "d19",
        alias: "/D-19",
        component: D19
      },
      {
        path: "d20",
        alias: "/D-20",
        component: D20
      },
      {
        path: "d21",
        alias: "/D-21",
        component: D21
      },
      {
        path: "d22",
        alias: "/D-22",
        component: D22
      },
      {
        path: "d23",
        alias: "/D-23",
        component: D23
      },
      {
        path: "d24",
        alias: "/D-24",
        component: D24
      },
      {
        path: "d25",
        alias: "/D-25",
        component: D25
      }, {
        path: "d26",
        alias: "/D-26",
        component: D26
      },
      {
        path: "d27",
        alias: "/D-27",
        component: D27
      },
      {
        path: "d28",
        alias: "/D-28",
        component: D28
      },
      {
        path: "d29",
        alias: "/D-29",
        component: D29
      },
      {
        path: "d30",
        alias: "/D-30",
        component: D30
      },
      {
        path: "d31",
        alias: "/D-31",
        component: D31
      },
      {
        path: "d32",
        alias: "/D-32",
        component: D32
      },
      {
        path: "d33",
        alias: "/D-33",
        component: D33
      },
      {
        path: "d34",
        alias: "/D-34",
        component: D34
      },
      {
        path: "d35",
        alias: "/D-35",
        component: D35
      },
      {
        path: "d36",
        alias: "/D-36",
        component: D36
      },
      {
        path: "d37",
        alias: "/D-37",
        component: D37
      },
      {
        path: "d38",
        alias: "/D-38",
        component: D38
      },
      {
        path: "d39",
        alias: "/D-39",
        component: D39
      },
      {
        path: "d40",
        alias: "/D-40",
        component: D40
      },
      {
        path: "d41",
        alias: "/D-41",
        component: D41
      },
      {
        path: "d42",
        alias: "/D-42",
        component: D42
      },
      {
        path: "d43",
        alias: "/D-43",
        component: D43
      },
      {
        path: "d44",
        alias: "/D-44",
        component: D44
      },
      {
        path: "d45",
        alias: "/D-45",
        component: D45
      },
      {
        path: "d46",
        alias: "/D-46",
        component: D46
      },
      {
        path: "d4701",
        alias: "/D-47-01",
        component: D4701
      },
      {
        path: "d4702",
        alias: "/D-47-02",
        component: D4702
      },
      {
        path: "d48",
        alias: "/D-48",
        component: D48
      },
      {
        path: "d49",
        alias: "/D-49",
        component: D49
      },
      {
        path: "d50",
        alias: "/D-50",
        component: D50
      },
      {
        path: "d51",
        alias: "/D-51",
        component: D51
      },
      {
        path: "d52",
        alias: "/D-52",
        component: D52
      },
      {
        path: "d53",
        alias: "/D-53",
        component: D53
      },

      {
        path: "d54",
        alias: "/D-54",
        component: D54
      },
      {
        path: "d55",
        alias: "/D-55",
        component: D55
      },
      {
        path: "d56",
        alias: "/D-57",
        component: D56
      },
      {
        path: "d57",
        alias: "/D-57",
        component: D57
      },
      {
        path: "d58",
        alias: "/D-58",
        component: D58
      },
      {
        path: "d59",
        alias: "/D-59",
        component: D59
      },
      {
        path: "d60",
        alias: "/D-60",
        component: D60
      },
      {
        path: "d61",
        alias: "/D-61",
        component: D61
      },
      {
        path: "d62",
        alias: "/D-62",
        component: D62
      },
      {
        path: "d63",
        alias: "/D-63",
        component: D63
      },
      {
        path: "d64",
        alias: "/D-64",
        component: D64
      },
      {
        path: "d65",
        alias: "/D-65",
        component: D65
      }, {
        path: "d66",
        alias: "/D-66",
        component: D66
      },
      {
        path: "d67",
        alias: "/D-67",
        component: D67
      },
      {
        path: "d68",
        alias: "/D-68",
        component: D68
      },
      {
        path: "d69",
        alias: "/D-69",
        component: D69
      },
      {
        path: "d70",
        alias: "/D-70",
        component: D70
      },
      {
        path: "dcl01",
        alias: "/DCL-01",
        component: DCL01
      },
      {
        path: "dcl02",
        alias: "/DCL-02",
        component: DCL02
      },
      {
        path: "dcl03",
        alias: "/DCL-03",
        component: DCL03
      },
      {
        path: "dcl04",
        alias: "/DCL-04",
        component: DCL04
      },
      {
        path: "dcl05",
        alias: "/DCL-05",
        component: DCL05
      },
      {
        path: "dcl06",
        alias: "/DCL-06",
        component: DCL06
      }, {
        path: "dcl07",
        alias: "/DCL-07",
        component: DCL07
      },
      {
        path: "dcl08",
        alias: "/DCL-08",
        component: DCL08
      },
      {
        path: "dcl09",
        alias: "/DCL-09",
        component: DCL09
      },
      {
        path: "dcl10",
        alias: "/DCL-10",
        component: DCL10
      },
      {
        path: "dcl11",
        alias: "/DCL-11",
        component: DCL11
      },
      {
        path: "dcl12",
        alias: "/DCL-12",
        component: DCL12
      },
      {
        path: "dcl13",
        alias: "/DCL-13",
        component: DCL13
      },
      {
        path: "dcl14",
        alias: "/DCL-14",
        component: DCL14
      },
      {
        path: "dcl15",
        alias: "/DCL-15",
        component: DCL15
      },
      {
        path: "dcl16",
        alias: "/DCL-16",
        component: DCL16
      },
      {
        path: "dcl17",
        alias: "/DCL-17",
        component: DCL17
      },

      {
        path: "dlj01",
        alias: "/DLJ-01",
        component: DLJ01
      },
      {
        path: "dlj02",
        alias: "/DLJ-02",
        component: DLJ02
      },
      {
        path: "dlj03",
        alias: "/DLJ-03",
        component: DLJ03
      },
      {
        path: "dlj04",
        alias: "/DLJ-04",
        component: DLJ04
      },
      {
        path: "dlj05",
        alias: "/DLJ-05",
        component: DLJ05
      },
      {
        path: "dqqt01",
        alias: "/DQQT-01",
        component: DQQT01
      },

      {
        path: "qlzj01",
        alias: "/DQCK-01",
        component: QLZJ01
      },
      {
        path: "dz061",
        alias: "/DZ-06",
        component: DZ061
      },
      {
        path: "dgjgj01",
        alias: "/DGJGJ-01",
        component: DGJGJ01
      },

      {
        path: 'c01',
        alias: "/C-01",
        component: C01
      },
      {
        path: 'c02',
        alias: "/C-02",
        component: C02
      },
      {
        path: 'c03',
        alias: "/C-03",
        component: C03
      },
      {
        path: 'c04',
        alias: "/C-04",
        component: C04
      },
      {
        path: 'c05',
        alias: "/C-05",
        component: C05
      },
      {
        path: 'c06',
        alias: "/C-06",
        component: C06
      },
      {
        path: 'c07',
        alias: "/C-07",
        component: C07
      },
      {
        path: 'c08',
        alias: "/C-08",
        component: C08
      },
      {
        path: 'c09',
        alias: "/C-09",
        component: C09
      },
      {
        path: 'c10',
        alias: "/C-10",
        component: C10
      },
      {
        path: 'cb01',
        alias: "/C-B01",
        component: CB01
      },
      {
        path: 'cfh01',
        alias: "/CFH-01",
        component: CFH01
      },
      {
        path: 'cfh02',
        alias: "/CFH-02",
        component: CFH02
      },
      {
        path: 'cfh03',
        alias: "/CFH-03",
        component: CFH03
      },
      {
        path: 'cfh04',
        alias: "/CFH-04",
        component: CFH04
      },
      {
        path: 'cfh05',
        alias: "/CFH-05",
        component: CFH05
      },
      {
        path: 'cfh06',
        alias: "/CFH-06",
        component: CFH06
      },
      {
        path: 'cfh07',
        alias: "/CFH-07",
        component: CFH07
      },
      {
        path: 'cfh08',
        alias: "/CFH-08",
        component: CFH08
      },
      {
        path: 'cfh09',
        alias: "/CFH-09",
        component: CFH09
      },
      {
        path: 'cfh10',
        alias: "/CFH-10",
        component: CFH10
      },
      {
        path: 'cfh11',
        alias: "/CFH-11",
        component: CFH11
      },
      {
        path: 'cfh12',
        alias: "/CFH-12",
        component: CFH12
      },
      {
        path: 'cfh13',
        alias: "/CFH-13",
        component: CFH13
      },
      {
        path: 'cfh14',
        alias: "/CFH-14",
        component: CFH14
      },
      {
        path: 'cfh15',
        alias: "/CFH-15",
        component: CFH15
      },
      {
        path: 'cfh16',
        alias: "/CFH-16",
        component: CFH16
      },
      {
        path: 'cfh17',
        alias: "/CFH-17",
        component: CFH17
      },
      {
        path: 'cfh18',
        alias: "/CFH-18",
        component: CFH18
      },
      {
        path: 'cfh19',
        alias: "/CFH-19",
        component: CFH19
      },
      {
        path: 'cfhb01',
        alias: "/CFH-B01",
        component: CFHB01
      },
      {
        path: 'cfhb02',
        alias: "/CFH-B02",
        component: CFHB02
      },
      {
        path: 'cfhb03',
        alias: "/CFH-B03",
        component: CFHB03
      },
      {
        path: 'cfhb04',
        alias: "/CFH-B04",
        component: CFHB04
      },
      {
        path: 'cfhb05',
        alias: "/CFH-B05",
        component: CFHB05
      },
      {
        path: 'cfhb06',
        alias: "/CFH-B06",
        component: CFHB06
      },
      {
        path: 'cfhb07',
        alias: "/CFH-B07",
        component: CFHB07
      },
      {
        path: 'clh01',
        alias: "/CLH-01",
        component: CLH01
      },
      {
        path: 'clh02',
        alias: "/CLH-02",
        component: CLH02
      },
      {
        path: 'clh03',
        alias: "/CLH-03",
        component: CLH03
      },
      {
        path: 'clh04',
        alias: "/CLH-04",
        component: CLH04
      },
      {
        path: 'clh05',
        alias: "/CLH-05",
        component: CLH05
      },
      {
        path: 'clh061',
        alias: "/CLH-06-1",
        component: CLH061
      },
      {
        path: 'clh062',
        alias: "/CLH-06-2",
        component: CLH062
      },
      {
        path: 'clh063',
        alias: "/CLH-06-3",
        component: CLH063
      },
      {
        path: 'clh064',
        alias: "/CLH-06-4",
        component: CLH064
      },
      {
        path: 'clh065',
        alias: "/CLH-06-5",
        component: CLH065
      },
      {
        path: 'clh066',
        alias: "/CLH-06-6",
        component: CLH066
      },
      {
        path: 'clh07',
        alias: "/CLH-07",
        component: CLH07
      },
      {
        path: 'clh08',
        alias: "/CLH-08",
        component: CLH08
      },
      {
        path: 'clh09',
        alias: "/CLH-09",
        component: CLH09
      },
      {
        path: 'clh10',
        alias: "/CLH-10",
        component: CLH10
      },
      {
        path: 'clh11',
        alias: "/CLH-11",
        component: CLH11
      },
      {
        path: 'clh12',
        alias: "/CLH-12",
        component: CLH12
      },
      {
        path: 'clh13',
        alias: "/CLH-13",
        component: CLH13
      },
      {
        path: 'clh14',
        alias: "/CLH-14",
        component: CLH14
      },
      {
        path: 'clh15',
        alias: "/CLH-15",
        component: CLH15
      },
      {
        path: 'clh16',
        alias: "/CLH-16",
        component: CLH16
      },
      {
        path: 'clh17',
        alias: "/CLH-17",
        component: CLH17
      },
      {
        path: 'clh18',
        alias: "/CLH-18",
        component: CLH18
      },
      {
        path: 'clh19',
        alias: "/CLH-19",
        component: CLH19
      },
      {
        path: 'clh201',
        alias: "/CLH-20-1",
        component: CLH201
      },
      {
        path: 'clh202',
        alias: "/CLH-20-2",
        component: CLH202
      },
      {
        path: 'clh203',
        alias: "/CLH-20-3",
        component: CLH203
      },
      {
        path: 'clh204',
        alias: "/CLH-20-4",
        component: CLH204
      },
      {
        path: 'clh211',
        alias: "/CLH-21-1",
        component: CLH211
      },
      {
        path: 'clh212',
        alias: "/CLH-21-2",
        component: CLH212
      },
      {
        path: 'clh213',
        alias: "/CLH-21-3",
        component: CLH213
      },
      {
        path: 'clh214',
        alias: "/CLH-21-4",
        component: CLH214
      },
      {
        path: 'clh221',
        alias: "/CLH-22-1",
        component: CLH221
      },
      {
        path: 'clh222',
        alias: "/CLH-22-2",
        component: CLH222
      },
      {
        path: 'clh223',
        alias: "/CLH-22-3",
        component: CLH223
      },
      {
        path: 'clh224',
        alias: "/CLH-22-4",
        component: CLH224
      },
      {
        path: 'clh231',
        alias: "/CLH-23-1",
        component: CLH231
      },
      {
        path: 'clh232',
        alias: "/CLH-23-2",
        component: CLH232
      },
      {
        path: 'clh233',
        alias: "/CLH-23-3",
        component: CLH233
      },
      {
        path: 'clh234',
        alias: "/CLH-23-4",
        component: CLH234
      },
      {
        path: 'clh241',
        alias: "/CLH-24-1",
        component: CLH241
      },
      {
        path: 'clh242',
        alias: "/CLH-24-2",
        component: CLH242
      },
      {
        path: 'clh243',
        alias: "/CLH-24-3",
        component: CLH243
      },
      {
        path: 'clh244',
        alias: "/CLH-24-4",
        component: CLH244
      },
      {
        path: 'clh251',
        alias: "/CLH-25-1",
        component: CLH251
      },
      {
        path: 'clh252',
        alias: "/CLH-25-2",
        component: CLH252
      },
      {
        path: 'clh253',
        alias: "/CLH-25-3",
        component: CLH253
      },
      {
        path: 'clh254',
        alias: "/CLH-25-4",
        component: CLH254
      },
      {
        path: 'clm01',
        alias: "/CLM-01",
        component: CLM01
      },
      {
        path: 'clm02',
        alias: "/CLM-02",
        component: CLM02
      },
      {
        path: 'clm03',
        alias: "/CLM-03",
        component: CLM03
      },
      {
        path: 'clm04',
        alias: "/CLM-04",
        component: CLM04
      },
      {
        path: 'clm05',
        alias: "/CLM-05",
        component: CLM05
      },
      {
        path: 'clm06',
        alias: "/CLM-06",
        component: CLM06
      },
      {
        path: 'clm07',
        alias: "/CLM-07",
        component: CLM07
      },
      {
        path: 'clm08',
        alias: "/CLM-08",
        component: CLM08
      },
      {
        path: 'clm09',
        alias: "/CLM-09",
        component: CLM09
      },
      {
        path: 'clm10',
        alias: "/CLM-10",
        component: CLM10
      },
      {
        path: 'clm11',
        alias: "/CLM-11",
        component: CLM11
      },
      {
        path: 'clm12',
        alias: "/CLM-12",
        component: CLM12
      },
      {
        path: 'clm13',
        alias: "/CLM-13",
        component: CLM13
      },
      {
        path: 'clm14',
        alias: "/CLM-14",
        component: CLM14
      },
      {
        path: 'cls01',
        alias: "/CLS-01",
        component: CLS01
      },
      {
        path: 'cls02',
        alias: "/CLS-02",
        component: CLS02
      },
      {
        path: 'cls03',
        alias: "/CLS-03",
        component: CLS03
      },
      {
        path: 'cls04',
        alias: "/CLS-04",
        component: CLS04
      },
      {
        path: 'cls05',
        alias: "/CLS-05",
        component: CLS05
      },
      {
        path: 'cls06',
        alias: "/CLS-06",
        component: CLS06
      },
      {
        path: 'cls07',
        alias: "/CLS-07",
        component: CLS07
      },
      {
        path: 'cls08',
        alias: "/CLS-08",
        component: CLS08
      },
      {
        path: 'cls09',
        alias: "/CLS-09",
        component: CLS09
      },
      {
        path: 'cls10',
        alias: "/CLS-10",
        component: CLS10
      },
      {
        path: 'cls11',
        alias: "/CLS-11",
        component: CLS11
      },
      {
        path: 'cls12',
        alias: "/CLS-12",
        component: CLS12
      },
      {
        path: 'cls01b',
        alias: "/CLS-B01",
        component: CLSB01
      },
      {
        path: 'cls02b',
        alias: "/CLS-B02",
        component: CLSB02
      },
      {
        path: 'cls03b',
        alias: "/CLS-B03",
        component: CLSB03
      },
      {
        path: 'clsx02',
        alias: "/CLS-X02",
        component: CLSX02
      },
      {
        path: 'cp01',
        alias: "/CP-01",
        component: CP01
      },
      {
        path: 'cp02',
        alias: "/CP-02",
        component: CP02
      },
      {
        path: 'cp03',
        alias: "/CP-03",
        component: CP03
      },
      {
        path: 'cp04',
        alias: "/CP-04",
        component: CP04
      },
      {
        path: 'cp05',
        alias: "/CP-05",
        component: CP05
      },
      {
        path: 'cp06',
        alias: "/CP-06",
        component: CP06
      },
      {
        path: 'cp07',
        alias: "/CP-07",
        component: CP07
      },
      {
        path: 'cpb01',
        alias: "/CP-B01",
        component: CPB01
      },
      {
        path: 'cqh01',
        alias: "/CQH-01",
        component: CQH01
      },
      {
        path: 'cqh02',
        alias: "/CQH-02",
        component: CQH02
      },
      {
        path: 'cqh03',
        alias: "/CQH-03",
        component: CQH03
      },
      {
        path: 'cqh04',
        alias: "/CQH-04",
        component: CQH04
      },
      {
        path: 'cqh05',
        alias: "/CQH-05",
        component: CQH05
      },
      {
        path: 'cqh06',
        alias: "/CQH-06",
        component: CQH06
      },
      {
        path: 'cqh07',
        alias: "/CQH-07",
        component: CQH07
      },
      {
        path: 'cqh08',
        alias: "/CQH-08",
        component: CQH08
      },
      {
        path: 'cqh09',
        alias: "/CQH-09",
        component: CQH09
      },
      {
        path: 'cqh10',
        alias: "/CQH-10",
        component: CQH10
      },
      {
        path: 'cqh11',
        alias: "/CQH-11",
        component: CQH11
      },
      {
        path: 'cqh12',
        alias: "/CQH-12",
        component: CQH12
      },
      {
        path: 'cqh13',
        alias: "/CQH-13",
        component: CQH13
      },
      {
        path: 'cqh14',
        alias: "/CQH-14",
        component: CQH14
      },
      {
        path: 'cqh15',
        alias: "/CQH-15",
        component: CQH15
      },
      {
        path: 'cqh16',
        alias: "/CQH-16",
        component: CQH16
      },
      {
        path: 'cqh17',
        alias: "/CQH-17",
        component: CQH17
      },
      {
        path: 'cqh18',
        alias: "/CQH-18",
        component: CQH18
      },
      {
        path: 'cqh19',
        alias: "/CQH-19",
        component: CQH19
      },
      {
        path: 'cqh20',
        alias: "/CQH-20",
        component: CQH20
      },
      {
        path: 'cqh21',
        alias: "/CQH-21",
        component: CQH21
      },
      {
        path: 'cqh22',
        alias: "/CQH-22",
        component: CQH22
      },
      {
        path: 'cqh23',
        alias: "/CQH-23",
        component: CQH23
      },
      {
        path: 'cqh24',
        alias: "/CQH-24",
        component: CQH24
      },
      {
        path: 'cqh25',
        alias: "/CQH-25",
        component: CQH25
      },
      {
        path: 'cqh26',
        alias: "/CQH-26",
        component: CQH26
      },
      {
        path: 'cqh27',
        alias: "/CQH-27",
        component: CQH27
      },
      {
        path: 'cqh28',
        alias: "/CQH-28",
        component: CQH28
      },
      {
        path: 'cqh29',
        alias: "/CQH-29",
        component: CQH29
      },
      {
        path: 'cqh30',
        alias: "/CQH-30",
        component: CQH30
      },
      {
        path: 'cqh31',
        alias: "/CQH-31",
        component: CQH31
      },
      {
        path: 'cqh32',
        alias: "/CQH-32",
        component: CQH32
      },
      {
        path: 'cqh33',
        alias: "/CQH-33",
        component: CQH33
      },
      {
        path: 'cqh34',
        alias: "/CQH-34",
        component: CQH34
      },
      {
        path: 'cqh35',
        alias: "/CQH-35",
        component: CQH35
      },
      {
        path: 'cqh36',
        alias: "/CQH-36",
        component: CQH36
      },
      {
        path: 'cqh37',
        alias: "/CQH-37",
        component: CQH37
      },
      {
        path: 'cqh38',
        alias: "/CQH-38",
        component: CQH38
      },
      {
        path: 'cqh39',
        alias: "/CQH-39",
        component: CQH39
      },
      {
        path: 'cqh40',
        alias: "/CQH-40",
        component: CQH40
      },
      {
        path: 'cqh41',
        alias: "/CQH-41",
        component: CQH41
      },
      {
        path: 'cqh42',
        alias: "/CQH-42",
        component: CQH42
      },
      {
        path: 'cqh43',
        alias: "/CQH-43",
        component: CQH43
      },
      {
        path: 'cqh44',
        alias: "/CQH-44",
        component: CQH44
      },
      {
        path: 'cqh45',
        alias: "/CQH-45",
        component: CQH45
      },
      {
        path: 'cqh46',
        alias: "/CQH-46",
        component: CQH46
      },
      {
        path: 'cqh47',
        alias: "/CQH-47",
        component: CQH47
      },
      {
        path: 'cqh46',
        alias: "/CQH-46",
        component: CQH46
      },
      {
        path: 'cqh48',
        alias: "/CQH-48",
        component: CQH48
      },
      {
        path: 'cqh49',
        alias: "/CQH-49",
        component: CQH49
      },
      {
        path: 'cqh50',
        alias: "/CQH-50",
        component: CQH50
      },
      {
        path: 'cqh51',
        alias: "/CQH-51",
        component: CQH51
      },
      {
        path: 'cqh52',
        alias: "/CQH-52",
        component: CQH52
      },
      {
        path: 'cqh53',
        alias: "/CQH-53",
        component: CQH53
      },
      {
        path: 'cqh54',
        alias: "/CQH-54",
        component: CQH54
      },
      {
        path: 'cqh55',
        alias: "/CQH-55",
        component: CQH55
      },
      {
        path: 'cqh56',
        alias: "/CQH-56",
        component: CQH56
      },
      {
        path: 'cqh57',
        alias: "/CQH-57",
        component: CQH57
      },
      {
        path: 'cqh58',
        alias: "/CQH-58",
        component: CQH58
      },
      {
        path: 'cqh59',
        alias: "/CQH-59",
        component: CQH59
      },
      {
        path: 'cqh60',
        alias: "/CQH-60",
        component: CQH60
      },
      {
        path: 'cqh61',
        alias: "/CQH-61",
        component: CQH61
      },
      {
        path: 'cqh62',
        alias: "/CQH-62",
        component: CQH62
      },
      {
        path: 'cqh63',
        alias: "/CQH-63",
        component: CQH63
      },
      {
        path: 'cqh64',
        alias: "/CQH-64",
        component: CQH64
      },
      {
        path: 'cqh65',
        alias: "/CQH-65",
        component: CQH65
      },
      {
        path: 'cqh66',
        alias: "/CQH-66",
        component: CQH66
      },
      {
        path: 'cqh67',
        alias: "/CQH-67",
        component: CQH67
      },
      {
        path: 'cqh68',
        alias: "/CQH-68",
        component: CQH68
      },
      {
        path: 'cqh69',
        alias: "/CQH-69",
        component: CQH69
      },
      {
        path: 'cqh70',
        alias: "/CQH-70",
        component: CQH70
      },
      {
        path: 'cqh71',
        alias: "/CQH-71",
        component: CQH71
      },
      {
        path: 'cqh72',
        alias: "/CQH-72",
        component: CQH72
      },
      {
        path: 'cqh73',
        alias: "/CQH-73",
        component: CQH73
      },
      {
        path: 'cqh74',
        alias: "/CQH-74",
        component: CQH74
      },
      {
        path: 'cqh75',
        alias: "/CQH-75",
        component: CQH75
      },
      {
        path: 'cqh76',
        alias: "/CQH-76",
        component: CQH76
      },
      {
        path: 'cqh77',
        alias: "/CQH-77",
        component: CQH77
      },
      {
        path: 'cqh78',
        alias: "/CQH-78",
        component: CQH78
      },
      {
        path: 'cqh79',
        alias: "/CQH-79",
        component: CQH79
      },
      {
        path: 'cqh80',
        alias: "/CQH-80",
        component: CQH80
      },
      {
        path: 'cqh81',
        alias: "/CQH-81",
        component: CQH81
      },
      {
        path: 'cqh82',
        alias: "/CQH-82",
        component: CQH82
      },
      {
        path: 'cqh83',
        alias: "/CQH-83",
        component: CQH83
      },
      {
        path: 'cqh84',
        alias: "/CQH-84",
        component: CQH84
      },
      {
        path: 'cqh85',
        alias: "/CQH-85",
        component: CQH85
      },
      {
        path: 'cqh86',
        alias: "/CQH-86",
        component: CQH86
      },
      {
        path: 'cqh87',
        alias: "/CQH-87",
        component: CQH87
      },
      {
        path: 'cqh88',
        alias: "/CQH-88",
        component: CQH88
      },
      {
        path: 'cqh89',
        alias: "/CQH-89",
        component: CQH89
      },
      {
        path: 'cqhB01',
        alias: "/CQH-B01",
        component: CQHB01
      },
      {
        path: 'csd01',
        alias: "/CSD-01",
        component: CSD01
      },
      {
        path: 'csd02',
        alias: "/CSD-02",
        component: CSD02
      },
      {
        path: 'csd03',
        alias: "/CSD-03",
        component: CSD03
      },
      {
        path: 'csd04',
        alias: "/CSD-04",
        component: CSD04
      },
      {
        path: 'csd05',
        alias: "/CSD-05",
        component: CSD05
      },
      {
        path: 'csd06',
        alias: "/CSD-06",
        component: CSD06
      },
      {
        path: 'csd07',
        alias: "/CSD-07",
        component: CSD07
      },
      {
        path: 'csd08',
        alias: "/CSD-08",
        component: CSD08
      },
      {
        path: 'csd09',
        alias: "/CSD-09",
        component: CSD09
      },
      {
        path: 'csd10',
        alias: "/CSD-10",
        component: CSD10
      },
      {
        path: 'csd11',
        alias: "/CSD-11",
        component: CSD11
      },
      {
        path: 'csd12',
        alias: "/CSD-12",
        component: CSD12
      },
      {
        path: 'csd13',
        alias: "/CSD-13",
        component: CSD13
      },
      {
        path: 'csd14',
        alias: "/CSD-14",
        component: CSD14
      },
      {
        path: 'csd15',
        alias: "/CSD-15",
        component: CSD15
      },
      {
        path: 'csd16',
        alias: "/CSD-16",
        component: CSD16
      },
      {
        path: 'csd17',
        alias: "/CSD-17",
        component: CSD17
      },
      {
        path: 'csd18',
        alias: "/CSD-18",
        component: CSD18
      },
      {
        path: 'csd19',
        alias: "/CSD-19",
        component: CSD19
      },
      {
        path: 'csdb02',
        alias: "/CSD-B02",
        component: CSDB02
      },
      {
        path: 'csdb03',
        alias: "/CSD-B03",
        component: CSDB03
      },
      {
        path: 'csp01',
        alias: "/CSP-01",
        component: CSP01
      },
      {
        path: 'csp02',
        alias: "/CSP-02",
        component: CSP02
      },
      {
        path: 'csp03',
        alias: "/CSP-03",
        component: CSP03
      },
      {
        path: 'cxsq01',
        alias: "/CXSQ-01",
        component: CXSQ01
      },
      {
        path: 'cxsq02',
        alias: "/CXSQ-02",
        component: CXSQ02
      },
      {
        path: 'cxsq03',
        alias: "/CXSQ-03",
        component: CXSQ03
      },
      {
        path: 'cxsq04',
        alias: "/CXSQ-04",
        component: CXSQ04
      },
      {
        path: 'cxsq05',
        alias: "/CXSQ-05",
        component: CXSQ05
      },
      {
        path: 'cxsq06',
        alias: "/CXSQ-06",
        component: CXSQ06
      },
      {
        path: 'cxsq07',
        alias: "/CXSQ-07",
        component: CXSQ07
      },
      {
        path: 'cxsq08',
        alias: "/CXSQ-08",
        component: CXSQ08
      },
      {
        path: 'cxsq09',
        alias: "/CXSQ-09",
        component: CXSQ09
      },
      {
        path: 'cxsq10',
        alias: "/CXSQ-10",
        component: CXSQ10
      },
      {
        path: 'cxsq11',
        alias: "/CXSQ-11",
        component: CXSQ11
      },
      {
        path: 'cxsq12',
        alias: "/CXSQ-12",
        component: CXSQ12
      },
      {
        path: 'cxsq13',
        alias: "/CXSQ-13",
        component: CXSQ13
      },
      {
        path: 'cxsq14',
        alias: "/CXSQ-14",
        component: CXSQ14
      },
      {
        path: 'cxsq15',
        alias: "/CXSQ-15",
        component: CXSQ15
      },
      {
        path: 'cxsq16',
        alias: "/CXSQ-16",
        component: CXSQ16
      },
      {
        path: 'cxsq17',
        alias: "/CXSQ-17",
        component: CXSQ17
      },
      {
        path: 'cxsq18',
        alias: "/CXSQ-18",
        component: CXSQ18
      },
      {
        path: 'cxsq19',
        alias: "/CXSQ-19",
        component: CXSQ19
      },
      {
        path: 'cxsq20',
        alias: "/CXSQ-20",
        component: CXSQ20
      },
      {
        path: 'cxsq21',
        alias: "/CXSQ-21",
        component: CXSQ21
      },
      {
        path: 'cxy01',
        alias: "/CXY-01",
        component: CXY01
      },
      {
        path: 'cxy02',
        alias: "/CXY-02",
        component: CXY02
      },
      {
        path: 'cxy03',
        alias: "/CXY-03",
        component: CXY03
      },
      {
        path: 'cxy04',
        alias: "/CXY-04",
        component: CXY04
      },
      {
        path: 'cxy05',
        alias: "/CXY-05",
        component: CXY05
      },
      {
        path: 'cxy06',
        alias: "/CXY-06",
        component: CXY06
      },
      {
        path: 'cxy07',
        alias: "/CXY-07",
        component: CXY07
      },
      {
        path: 'cxy08',
        alias: "/CXY-08",
        component: CXY08
      },
      {
        path: 'cxy09',
        alias: "/CXY-09",
        component: CXY09
      },

      {
        path: 'k01',
        alias: "/K-01",
        component: K01
      },
      {
        path: 'k2',
        alias: "/subProjectEvaluate",
        component: K2
      },
      {
        path: 'k3',
        alias: "/unitProjectEvaluate",
        component: K3
      },
      {
        path: 'k02',
        alias: "/K-02",
        component: K02
      },
      {
        path: 'k03',
        alias: "/K-03",
        component: K03
      },
      {
        path: 'k04',
        alias: "/K-04",
        component: K04
      },
      {
        path: 'k05',
        alias: "/K-05",
        component: K05
      },
      {
        path: 'k06',
        alias: "/K-06",
        component: K06
      },
      {
        path: 'k07',
        alias: "/K-07",
        component: K07
      },
      {
        path: 'k08',
        alias: "/K-08",
        component: K08
      },
      {
        path: 'k09',
        alias: "/K-09",
        component: K09
      },
      {
        path: 'k10',
        alias: "/K-10",
        component: K10
      },
      {
        path: 'kb01',
        alias: "/K-B01",
        component: KB01
      },
      {
        path: 'kfh01',
        alias: "/KFH-01",
        component: KFH01
      },
      {
        path: 'kfh02',
        alias: "/KFH-02",
        component: KFH02
      },
      {
        path: 'kfh03',
        alias: "/KFH-03",
        component: KFH03
      },
      {
        path: 'kfh04',
        alias: "/KFH-04",
        component: KFH04
      },
      {
        path: 'kfh05',
        alias: "/KFH-05",
        component: KFH05
      },
      {
        path: 'kfh06',
        alias: "/KFH-06",
        component: KFH06
      },
      {
        path: 'kfh07',
        alias: "/KFH-07",
        component: KFH07
      },
      {
        path: 'kfh08',
        alias: "/KFH-08",
        component: KFH08
      },
      {
        path: 'kfh09',
        alias: "/KFH-09",
        component: KFH09
      },
      {
        path: 'kfh10',
        alias: "/KFH-10",
        component: KFH10
      },
      {
        path: 'kfh11',
        alias: "/KFH-11",
        component: KFH11
      },
      {
        path: 'kfh12',
        alias: "/KFH-12",
        component: KFH12
      },
      {
        path: 'kfh13',
        alias: "/KFH-13",
        component: KFH13
      },
      {
        path: 'kfh14',
        alias: "/KFH-14",
        component: KFH14
      },
      {
        path: 'kfh15',
        alias: "/KFH-15",
        component: KFH15
      },
      {
        path: 'kfh16',
        alias: "/KFH-16",
        component: KFH16
      },
      {
        path: 'kfh17',
        alias: "/KFH-17",
        component: KFH17
      },
      {
        path: 'kfh18',
        alias: "/KFH-18",
        component: KFH18
      },
      {
        path: 'kfh19',
        alias: "/KFH-19",
        component: KFH19
      },
      {
        path: 'kfhb01',
        alias: "/KFH-B01",
        component: KFHB01
      },
      {
        path: 'kfhb01',
        alias: "/KFH-B01",
        component: KFHB01
      },
      {
        path: 'kfhb02',
        alias: "/KFH-B02",
        component: KFHB02
      },
      {
        path: 'kfhb03',
        alias: "/KFH-B03",
        component: KFHB03
      },
      {
        path: 'kfhb04',
        alias: "/KFH-B04",
        component: KFHB04
      },
      {
        path: 'kfhb05',
        alias: "/KFH-B05",
        component: KFHB05
      },
      {
        path: 'kfhb06',
        alias: "/KFH-B06",
        component: KFHB06
      },
      {
        path: 'kfhb07',
        alias: "/KFH-B07",
        component: KFHB07
      },
      {
        path: 'klh01',
        alias: "/KLH-01",
        component: KLH01
      },
      {
        path: 'klh02',
        alias: "/KLH-02",
        component: KLH02
      },
      {
        path: 'klh03',
        alias: "/KLH-03",
        component: KLH03
      },
      {
        path: 'klh04',
        alias: "/KLH-04",
        component: KLH04
      },
      {
        path: 'klh05',
        alias: "/KLH-05",
        component: KLH05
      },
      {
        path: 'klh061',
        alias: "/KLH-06-1",
        component: KLH061
      },
      {
        path: 'klh062',
        alias: "/KLH-06-2",
        component: KLH062
      },
      {
        path: 'klh063',
        alias: "/KLH-06-3",
        component: KLH063
      },
      {
        path: 'klh064',
        alias: "/KLH-06-4",
        component: KLH064
      },
      {
        path: 'klh065',
        alias: "/KLH-06-5",
        component: KLH065
      },
      {
        path: 'klh066',
        alias: "/KLH-06-6",
        component: KLH066
      },
      {
        path: 'klh07',
        alias: "/KLH-07",
        component: KLH07
      },
      {
        path: 'klh08',
        alias: "/KLH-08",
        component: KLH08
      },
      {
        path: 'klh09',
        alias: "/KLH-09",
        component: KLH09
      },
      {
        path: 'klh10',
        alias: "/KLH-10",
        component: KLH10
      },
      {
        path: 'klh11',
        alias: "/KLH-11",
        component: KLH11
      },
      {
        path: 'klh12',
        alias: "/KLH-12",
        component: KLH12
      },
      {
        path: 'klh13',
        alias: "/KLH-13",
        component: KLH13
      },
      {
        path: 'klh14',
        alias: "/KLH-14",
        component: KLH14
      },
      {
        path: 'klh15',
        alias: "/KLH-15",
        component: KLH15
      },
      {
        path: 'klh16',
        alias: "/KLH-16",
        component: KLH16
      },
      {
        path: 'klh17',
        alias: "/KLH-17",
        component: KLH17
      },
      {
        path: 'klh18',
        alias: "/KLH-18",
        component: KLH18
      },
      {
        path: 'klh19',
        alias: "/KLH-19",
        component: KLH19
      },
      {
        path: 'klh201',
        alias: "/KLH-20-1",
        component: KLH201
      },
      {
        path: 'klh202',
        alias: "/KLH-20-2",
        component: KLH202
      },
      {
        path: 'klh203',
        alias: "/KLH-20-3",
        component: KLH203
      },
      {
        path: 'klh204',
        alias: "/KLH-20-4",
        component: KLH204
      },
      {
        path: 'klh211',
        alias: "/klh-21-1",
        component: KLH211
      },
      {
        path: 'klh212',
        alias: "/KLH-21-2",
        component: KLH212
      },
      {
        path: 'klh213',
        alias: "/KLH-21-3",
        component: KLH213
      },
      {
        path: 'klh214',
        alias: "/KLH-21-4",
        component: KLH214
      },
      {
        path: 'klh221',
        alias: "/KLH-22-1",
        component: KLH221
      },
      {
        path: 'klh222',
        alias: "/KLH-22-2",
        component: KLH222
      },
      {
        path: 'klh223',
        alias: "/KLH-22-3",
        component: KLH223
      },
      {
        path: 'klh224',
        alias: "/KLH-22-4",
        component: KLH224
      },
      {
        path: 'klh231',
        alias: "/KLH-23-1",
        component: KLH231
      },
      {
        path: 'klh232',
        alias: "/KLH-23-2",
        component: KLH232
      },
      {
        path: 'klh233',
        alias: "/KLH-23-3",
        component: KLH233
      },
      {
        path: 'klh234',
        alias: "/KLH-23-4",
        component: KLH234
      },
      {
        path: 'klh241',
        alias: "/KLH-24-1",
        component: KLH241
      },
      {
        path: 'klh242',
        alias: "/KLH-24-2",
        component: KLH242
      },
      {
        path: 'klh243',
        alias: "/KLH-24-3",
        component: KLH243
      },
      {
        path: 'klh244',
        alias: "/KLH-24-4",
        component: KLH244
      },
      {
        path: 'klh251',
        alias: "/KLH-25-1",
        component: KLH251
      },
      {
        path: 'klh252',
        alias: "/KLH-25-2",
        component: KLH252
      },
      {
        path: 'klh253',
        alias: "/KLH-25-3",
        component: KLH253
      },
      {
        path: 'klh254',
        alias: "/KLH-25-4",
        component: KLH254
      },
      {
        path: 'klm01',
        alias: "/KLM-01",
        component: KLM01
      },
      {
        path: 'klm02',
        alias: "/KLM-02",
        component: KLM02
      },
      {
        path: 'klm03',
        alias: "/KLM-03",
        component: KLM03
      },
      {
        path: 'klm04',
        alias: "/KLM-04",
        component: KLM04
      },
      {
        path: 'klm05',
        alias: "/KLM-05",
        component: KLM05
      },
      {
        path: 'klm06',
        alias: "/KLM-06",
        component: KLM06
      },
      {
        path: 'klm07',
        alias: "/KLM-07",
        component: KLM07
      },
      {
        path: 'klm08',
        alias: "/KLM-08",
        component: KLM08
      },
      {
        path: 'klm09',
        alias: "/KLM-09",
        component: KLM09
      },
      {
        path: 'klm10',
        alias: "/KLM-10",
        component: KLM10
      },
      {
        path: 'kls01',
        alias: "/KLS-01",
        component: KLS01
      },
      {
        path: 'kls02',
        alias: "/KLS-02",
        component: KLS02
      },
      {
        path: 'kls03',
        alias: "/KLS-03",
        component: KLS03
      },
      {
        path: 'kls04',
        alias: "/KLS-04",
        component: KLS04
      },
      {
        path: 'kls05',
        alias: "/KLS-05",
        component: KLS05
      },
      {
        path: 'kls06',
        alias: "/KLS-06",
        component: KLS06
      },
      {
        path: 'kls07',
        alias: "/KLS-07",
        component: KLS07
      },
      {
        path: 'kls08',
        alias: "/KLS-08",
        component: KLS08
      },
      {
        path: 'kls09',
        alias: "/KLS-09",
        component: KLS09
      },
      {
        path: 'kls10',
        alias: "/KLS-10",
        component: KLS10
      },
      {
        path: 'kls11',
        alias: "/KLS-11",
        component: KLS11
      },
      {
        path: 'kls12',
        alias: "/KLS-12",
        component: KLS12
      },
      {
        path: 'kp01',
        alias: "/KP-01",
        component: KP01
      },
      {
        path: 'kp02',
        alias: "/KP-02",
        component: KP02
      },
      {
        path: 'kp03',
        alias: "/KP-03",
        component: KP03
      },
      {
        path: 'kp04',
        alias: "/KP-04",
        component: KP04
      },
      {
        path: 'kp05',
        alias: "/KP-05",
        component: KP05
      },
      {
        path: 'kp06',
        alias: "/KP-06",
        component: KP06
      },
      {
        path: 'kp07',
        alias: "/KP-07",
        component: KP07
      },
      {
        path: 'kpb01',
        alias: "/KP-B01",
        component: KPB01
      },
      {
        path: 'kqh01',
        alias: "/KQH-01",
        component: KQH01
      },
      {
        path: 'kqh02',
        alias: "/KQH-02",
        component: KQH02
      },
      {
        path: 'kqh03',
        alias: "/KQH-03",
        component: KQH03
      },
      {
        path: 'kqh04',
        alias: "/KQH-04",
        component: KQH04
      },
      {
        path: 'kqh05',
        alias: "/KQH-05",
        component: KQH05
      },
      {
        path: 'kqh06',
        alias: "/KQH-06",
        component: KQH06
      },
      {
        path: 'kqh07',
        alias: "/KQH-07",
        component: KQH07
      },
      {
        path: 'kqh08',
        alias: "/KQH-08",
        component: KQH08
      },
      {
        path: 'kqh09',
        alias: "/KQH-09",
        component: KQH09
      },
      {
        path: 'kqh10',
        alias: "/KQH-10",
        component: KQH10
      },
      {
        path: 'kqh11',
        alias: "/KQH-11",
        component: KQH11
      },
      {
        path: 'kqh12',
        alias: "/KQH-12",
        component: KQH12
      },
      {
        path: 'kqh13',
        alias: "/KQH-13",
        component: KQH13
      },
      {
        path: 'kqh14',
        alias: "/KQH-14",
        component: KQH14
      },
      {
        path: 'kqh15',
        alias: "/KQH-15",
        component: KQH15
      },
      {
        path: 'kqh16',
        alias: "/KQH-16",
        component: KQH16
      },
      {
        path: 'kqh17',
        alias: "/KQH-17",
        component: KQH17
      },
      {
        path: 'kqh18',
        alias: "/KQH-18",
        component: KQH18
      },
      {
        path: 'kqh19',
        alias: "/KQH-19",
        component: KQH19
      },
      {
        path: 'kqh20',
        alias: "/KQH-20",
        component: KQH20
      },
      {
        path: 'kqh21',
        alias: "/KQH-21",
        component: KQH21
      },
      {
        path: 'kqh22',
        alias: "/KQH-22",
        component: KQH22
      },
      {
        path: 'kqh23',
        alias: "/KQH-23",
        component: KQH23
      },
      {
        path: 'kqh24',
        alias: "/KQH-24",
        component: KQH24
      },
      {
        path: 'kqh25',
        alias: "/KQH-25",
        component: KQH25
      },
      {
        path: 'kqh26',
        alias: "/KQH-26",
        component: KQH26
      },
      {
        path: 'kqh27',
        alias: "/KQH-27",
        component: KQH27
      },
      {
        path: 'kqh28',
        alias: "/KQH-28",
        component: KQH28
      },
      {
        path: 'kqh29',
        alias: "/KQH-29",
        component: KQH29
      },
      {
        path: 'kqh30',
        alias: "/KQH-30",
        component: KQH30
      },
      {
        path: 'kqh31',
        alias: "/KQH-31",
        component: KQH31
      },
      {
        path: 'kqh32',
        alias: "/KQH-32",
        component: KQH32
      },
      {
        path: 'kqh33',
        alias: "/KQH-33",
        component: KQH33
      },
      {
        path: 'kqh34',
        alias: "/KQH-34",
        component: KQH34
      },
      {
        path: 'kqh35',
        alias: "/KQH-35",
        component: KQH35
      },
      {
        path: 'kqh36',
        alias: "/KQH-36",
        component: KQH36
      },
      {
        path: 'kqh37',
        alias: "/KQH-37",
        component: KQH37
      },
      {
        path: 'kqh38',
        alias: "/KQH-38",
        component: KQH38
      },
      {
        path: 'kqh39',
        alias: "/KQH-39",
        component: KQH39
      },
      {
        path: "KQH40",
        alias: "/KQH-40",
        component: KQH40
      },
      {
        path: "KQH41",
        alias: "/KQH-41",
        component: KQH41
      },
      {
        path: "kqh42",
        alias: "/KQH-42",
        component: KQH42
      },
      {
        path: "kqh43",
        alias: "/KQH-43",
        component: KQH43
      },
      {
        path: "KQH44",
        alias: "/KQH-44",
        component: KQH44
      },
      {
        path: "KQH45",
        alias: "/KQH-45",
        component: KQH45
      },
      {
        path: "KQH46",
        alias: "/KQH-46",
        component: KQH46
      },
      {
        path: "kqh47",
        alias: "/KQH-47",
        component: KQH47
      },
      {
        path: "kqh48",
        alias: "/KQH-48",
        component: KQH48
      },
      {
        path: "kqh49",
        alias: "/KQH-40",
        component: KQH49
      },
      {
        path: "kqh50",
        alias: "/KQH-50",
        component: KQH50
      },
      {
        path: "kqh51",
        alias: "/KQH-51",
        component: KQH51
      },
      {
        path: "kqh52",
        alias: "/KQH-52",
        component: KQH52
      },
      {
        path: "kqh53",
        alias: "/KQH-53",
        component: KQH53
      },
      {
        path: "kqh54",
        alias: "/KQH-54",
        component: KQH54
      },
      {
        path: "kqh55",
        alias: "/KQH-55",
        component: KQH55
      },
      {
        path: "kqh56",
        alias: "/KQH-56",
        component: KQH56
      },
      {
        path: "kqh57",
        alias: "/KQH-57",
        component: KQH57
      },
      {
        path: "kqh58",
        alias: "/KQH-58",
        component: KQH58
      },
      {
        path: "kqh59",
        alias: "/KQH-59",
        component: KQH59
      },
      {
        path: "kqh60",
        alias: "/KQH-60",
        component: KQH60
      },
      {
        path: "kqh61",
        alias: "/KQH-61",
        component: KQH61
      },
      {
        path: "kqh62",
        alias: "/KQH-62",
        component: KQH62
      },
      {
        path: "kqh63",
        alias: "/KQH-63",
        component: KQH63
      },
      {
        path: "kqh64",
        alias: "/KQH-64",
        component: KQH64
      },
      {
        path: "kqh65",
        alias: "/KQH-65",
        component: KQH65
      },
      {
        path: "kqh66",
        alias: "/KQH-66",
        component: KQH66
      },
      {
        path: "kqh67",
        alias: "/KQH-67",
        component: KQH67
      },
      {
        path: "kqh68",
        alias: "/KQH-68",
        component: KQH68
      },
      {
        path: "kqh69",
        alias: "/KQH-69",
        component: KQH69
      },
      {
        path: "kqh70",
        alias: "/KQH-70",
        component: KQH70
      },
      {
        path: "kqh71",
        alias: "/KQH-71",
        component: KQH71
      },
      {
        path: "kqh72",
        alias: "/KQH-72",
        component: KQH72
      },
      {
        path: "kqh73",
        alias: "/KQH-73",
        component: KQH73
      },
      {
        path: "kqh74",
        alias: "/KQH-74",
        component: KQH74
      },
      {
        path: "kqh75",
        alias: "/KQH-75",
        component: KQH75
      },
      {
        path: "kqh76",
        alias: "/KQH-76",
        component: KQH76
      },
      {
        path: "kqh77",
        alias: "/KQH-77",
        component: KQH77
      },
      {
        path: "kqh78",
        alias: "/KQH-78",
        component: KQH78
      },
      {
        path: "kqh79",
        alias: "/KQH-79",
        component: KQH79
      },
      {
        path: "kqh80",
        alias: "/KQH-80",
        component: KQH80
      }, {
        path: "kqh81",
        alias: "/KQH-81",
        component: KQH81
      },
      {
        path: "kqh82",
        alias: "/KQH-82",
        component: KQH82
      },

      {
        path: "kqh84",
        alias: "/KQH-84",
        component: KQH84
      },
      {
        path: 'kqh85',
        alias: "/KQH-85",
        component: KQH85
      },
      {
        path: 'kqh86',
        alias: "/KQH-86",
        component: KQH86
      },
      {
        path: 'kqh87',
        alias: "/KQH-87",
        component: KQH87
      },
      {
        path: 'kqh88',
        alias: "/KQH-88",
        component: KQH88
      },
      {
        path: 'kqh89',
        alias: "/KQH-89",
        component: KQH89
      },
      {
        path: 'kqhb01',
        alias: "/KQH-B01",
        component: KQHB01
      },
      {
        path: 'ksd01',
        alias: "/KSD-01",
        component: KSD01
      },
      {
        path: 'ksd02',
        alias: "/KSD-02",
        component: KSD02
      },
      {
        path: 'ksd03',
        alias: "/KSD-03",
        component: KSD03
      },
      {
        path: 'ksd04',
        alias: "/KSD-04",
        component: KSD04
      },
      {
        path: 'ksd05',
        alias: "/KSD-05",
        component: KSD05
      },
      {
        path: 'ksd06',
        alias: "/KSD-06",
        component: KSD06
      },
      {
        path: 'ksd07',
        alias: "/KSD-07",
        component: KSD07
      },
      {
        path: 'ksd08',
        alias: "/KSD-08",
        component: KSD08
      },
      {
        path: 'ksd09',
        alias: "/KSD-09",
        component: KSD09
      },
      {
        path: 'ksd10',
        alias: "/KSD-10",
        component: KSD10
      },
      {
        path: 'ksd11',
        alias: "/KSD-11",
        component: KSD11
      },
      {
        path: 'ksd12',
        alias: "/KSD-12",
        component: KSD12
      },
      {
        path: 'ksd13',
        alias: "/KSD-13",
        component: KSD13
      },
      {
        path: 'ksd14',
        alias: "/KSD-14",
        component: KSD14
      },
      {
        path: 'ksd15',
        alias: "/KSD-15",
        component: KSD15
      },
      {
        path: 'ksd16',
        alias: "/KSD-16",
        component: KSD16
      },
      {
        path: 'ksd17',
        alias: "/KSD-17",
        component: KSD17
      },
      {
        path: 'ksd18',
        alias: "/KSD-18",
        component: KSD18
      },
      {
        path: 'ksd19',
        alias: "/KSD-19",
        component: KSD19
      },
      {
        path: 'ksdb02',
        alias: "/KSD-B02",
        component: KSDB02
      },
      {
        path: 'ksdb03',
        alias: "/KSD-B03",
        component: KSDB03
      },
      {
        path: 'ksp01',
        alias: "/KSP-01",
        component: KSP01
      },
      {
        path: 'ksp02',
        alias: "/KSP-02",
        component: KSP02
      },
      {
        path: 'ksp03',
        alias: "/KSP-03",
        component: KSP03
      },
      {
        path: 'kxsq01',
        alias: "/KXSQ-01",
        component: KXSQ01
      },
      {
        path: 'kxsq02',
        alias: "/KXSQ-02",
        component: KXSQ02
      },
      {
        path: 'kxsq03',
        alias: "/KXSQ-03",
        component: KXSQ03
      },
      {
        path: 'kxsq04',
        alias: "/KXSQ-04",
        component: KXSQ04
      },
      {
        path: 'kxsq05',
        alias: "/KXSQ-05",
        component: KXSQ05
      },
      {
        path: 'kxsq06',
        alias: "/KXSQ-06",
        component: KXSQ06
      },
      {
        path: 'kxsq07',
        alias: "/KXSQ-07",
        component: KXSQ07
      },
      {
        path: 'kxsq08',
        alias: "/KXSQ-08",
        component: KXSQ08
      },
      {
        path: 'kxsq09',
        alias: "/KXSQ-09",
        component: KXSQ09
      },
      {
        path: 'kxsq10',
        alias: "/KXSQ-10",
        component: KXSQ10
      },
      {
        path: 'kxsq11',
        alias: "/KXSQ-11",
        component: KXSQ11
      },
      {
        path: 'kxsq12',
        alias: "/KXSQ-12",
        component: KXSQ12
      },
      {
        path: 'kxsq13',
        alias: "/KXSQ-13",
        component: KXSQ13
      },
      {
        path: 'kxsq14',
        alias: "/KXSQ-14",
        component: KXSQ14
      },
      {
        path: 'kxsq15',
        alias: "/KXSQ-15",
        component: KXSQ15
      },
      {
        path: 'kxsq16',
        alias: "/KXSQ-16",
        component: KXSQ16
      },
      {
        path: 'kxsq17',
        alias: "/KXSQ-17",
        component: KXSQ17
      },
      {
        path: 'kxsq18',
        alias: "/KXSQ-18",
        component: KXSQ18
      },
      {
        path: 'kxsq19',
        alias: "/KXSQ-19",
        component: KXSQ19
      },
      {
        path: 'kxsq20',
        alias: "/KXSQ-20",
        component: KXSQ20
      },
      {
        path: 'kxsq21',
        alias: "/KXSQ-21",
        component: KXSQ21
      },
      {
        path: 'kxy01',
        alias: "/KXY-01",
        component: KXY01
      },
      {
        path: 'kxy02',
        alias: "/KXY-02",
        component: KXY02
      },
      {
        path: 'kxy03',
        alias: "/KXY-03",
        component: KXY03
      },
      {
        path: 'kxy04',
        alias: "/KXY-04",
        component: KXY04
      },
      {
        path: 'kxy05',
        alias: "/KXY-05",
        component: KXY05
      },
      {
        path: 'kxy06',
        alias: "/KXY-06",
        component: KXY06
      },
      {
        path: 'kxy07',
        alias: "/KXY-07",
        component: KXY07
      },
      {
        path: 'kxy08',
        alias: "/KXY-08",
        component: KXY08
      },
      {
        path: 'kxy09',
        alias: "/KXY-09",
        component: KXY09
      },

      {
        path: 'jl01',
        alias: '/JL-01',
        component: JL01
      },
      {
        path: 'jl02',
        alias: '/JL-02',
        component: JL02
      },
      {
        path: 'jl03',
        alias: '/JL-03',
        component: JL03
      },
      {
        path: 'jl04',
        alias: '/JL-04',
        component: JL04
      },
      {
        path: 'jl05',
        alias: '/JL-05',
        component: JL05
      },
      {
        path: 'jl06',
        alias: '/JL-06',
        component: JL06
      },
      {
        path: 'jl07',
        alias: '/JL-07',
        component: JL07
      },
      {
        path: 'jl08',
        alias: '/JL-08',
        component: JL08
      },
      {
        path: 'jl09',
        alias: '/JL-09',
        component: JL09
      },
      {
        path: 'jl10',
        alias: '/JL-10',
        component: JL10
      },
      {
        path: 'jl11',
        alias: '/JL-11',
        component: JL11
      },
      {
        path: 'jl12',
        alias: '/JL-12',
        component: JL12
      },
      {
        path: 'jl13',
        alias: '/JL-13',
        component: JL13
      },
      {
        path: 'jl14',
        alias: '/JL-14',
        component: JL14
      },
      {
        path: 'jl16',
        alias: '/JL-16',
        component: JL16
      },
      {
        path: 'jl17',
        alias: '/JL-17',
        component: JL17
      },
      {
        path: 'jl18',
        alias: '/JL-18',
        component: JL18
      },
      {
        path: 'jl19',
        alias: '/JL-19',
        component: JL19
      },
      {
        path: 'jl20',
        alias: '/JL-20',
        component: JL20
      },
      {
        path: 'jl21',
        alias: '/JL-21',
        component: JL21
      },
      {
        path: 'jl22',
        alias: '/JL-22',
        component: JL22
      }, {
        path: 'jl23',
        alias: '/JL-23',
        component: JL23
      },
      {
        path: 'jl24',
        alias: '/JL-24',
        component: JL24
      },
      {
        path: 'jl25',
        alias: '/JL-25',
        component: JL25
      },
      {
        path: 'jl26',
        alias: '/JL-26',
        component: JL26
      },

      {
        path: 'aq01',
        alias: 'AQ-01',
        component: AQ01
      },
      {
        path: 'aq02',
        alias: 'AQ-02',
        component: AQ02
      },
      {
        path: 'aq03',
        alias: 'AQ-03',
        component: AQ03
      },
      {
        path: 'aq04',
        alias: 'AQ-04',
        component: AQ04
      }, {
        path: 'aq05',
        alias: 'AQ-05',
        component: AQ05
      },
      {
        path: 'aq06',
        alias: 'AQ-06',
        component: AQ06
      },
      {
        path: 'aq07',
        alias: 'AQ-07',
        component: AQ07
      },
      {
        path: 'aq08',
        alias: 'AQ-08',
        component: AQ08
      },
      {
        path: 'aq09',
        alias: 'AQ-09',
        component: AQ09
      },
      {
        path: 'aq10',
        alias: 'AQ-10',
        component: AQ10
      },
      {
        path: 'aq11',
        alias: 'AQ-11',
        component: AQ11
      },
      {
        path: 'aq12',
        alias: 'AQ-12',
        component: AQ12
      },
      {
        path: 'aq13',
        alias: 'AQ-13',
        component: AQ13
      },
      {
        path: 'aq14',
        alias: 'AQ-14',
        component: AQ14
      },
      {
        path: 'aq15',
        alias: 'AQ-15',
        component: AQ15
      },
      {
        path: 'aq16',
        alias: 'AQ-16',
        component: AQ16
      },
      {
        path: 'aq17',
        alias: 'AQ-17',
        component: AQ17
      },
      {
        path: 'aq18',
        alias: 'AQ-18',
        component: AQ18
      },
      {
        path: "aq19",
        alias: 'AQ-19',
        component: AQ19
      },
      {
        path: "aq20",
        alias: 'AQ-20',
        component: AQ20
      },
      {
        path: "aq21",
        alias: 'AQ-21',
        component: AQ21
      },
      {
        path: "aq22",
        alias: 'AQ-22',
        component: AQ22
      },
      {
        path: "aq23",
        alias: 'AQ-23',
        component: AQ23
      },
      {
        path: "aq24",
        alias: 'AQ-24',
        component: AQ24
      },
      {
        path: "aq25",
        alias: 'AQ-25',
        component: AQ25
      },
      {
        path: "aq26",
        alias: 'AQ-26',
        component: AQ26
      },
      {
        path: "aq27",
        alias: 'AQ-27',
        component: AQ27
      },
      {
        path: 'aq28',
        alias: 'AQ-28',
        component: AQ28
      },
      {
        path: 'aq29',
        alias: 'AQ-29',
        component: AQ29
      },
      {
        path: 'aq30',
        alias: 'AQ-30',
        component: AQ30
      },
      {
        path: 'aq31',
        alias: 'AQ-31',
        component: AQ31
      },
      {
        path: 'aq32',
        alias: 'AQ-32',
        component: AQ32
      },
      {
        path: 'aq33',
        alias: 'AQ-33',
        component: AQ33
      },
      {
        path: 'aq34',
        alias: 'AQ-34',
        component: AQ34
      },
      {
        path: 'aq35',
        alias: 'AQ-35',
        component: AQ35
      },
      {
        path: 'aq36',
        alias: 'AQ-36',
        component: AQ36
      }
    ],
    redirect: "/login"
  },

  {
    path: "/",
    meta: {
      title: "项目根路径"
    },
    component: Quality,
    children: [
      {
        path: 'k01',
        alias: "/K-01",
        component: K01
      },
      {
        path: 'k02',
        alias: "/K-02",
        component: K02
      },
      {
        path: 'k03',
        alias: "/K-03",
        component: K03
      },
      {
        path: "/mission",
        meta: {
          title: "任务"
        },
        component: Mission
      },
      {
        path: "/businessRec",
        meta: {
          title: "业务记录"
        },
        component: BusinessRecord
      },

      {
        path: "set",
        component: Setup,
        alias: "/systemSet",
        redirect: "/set/sys/user",
        children: [
          {
            path: "sys/user",
            redirect: '/set/sys/user/index',
            component: Sys_User,
            meta: {
              title: "系统用户"
            },
            children: [
              {
                path: "index",
                component: Sys_UserIndex,
                alias: "/sysUser",
                meta: {
                  title: "系统用户首页"
                },
              },
              {
                path: "add",
                component: Add_User,
                meta: {
                  title: "新增用户"
                }
              },
              {
                path: "edit",
                component: Edit_User,
                meta: {
                  title: "修改用户"
                }
              }
            ]
          },
          {
            path: "unit-project",
            component: UnitProject,
            redirect: "unit-project/index",
            alias: "/unitProject",
            meta: {
              title: "单位信息"
            },
            children: [
              {
                path: "index",
                component: UnitProjectIndex,
                meta: {
                  title: "单位工程首页"
                }
              }
            ]
          },
          {
            path: "process-list",
            alias: "/procedureCfg",
            component: Proecss_List,
            redirect: "/set/process-list/index",
            meta: {
              title: "工序配置"
            },
            children: [
              {
                path: "index",
                component: ProcessListIndex,
                meta: {
                  title: "工序列表"
                }
              },
              {
                path: 'add',
                component: Set_Add_Process_List,
                meta: {
                  title: "新增工序列表"
                }
              },
              {
                path: 'edit',
                component: Edit_Process_List,
                meta: {
                  title: "修改工序列表"
                }
              },


            ]
          },
          {
            path: "project_divide",
            component: Project_Divide,
            alias: "/engineeringCfg",
            meta: {
              title: "工程划分"
            },
            redirect: "/set/project_divide/index",
            children: [
              {
                path: "index",
                component: Project_Divide_Index,
                meta: {
                  title: "工程划分"
                }
              },
              {
                path: "add",
                component: Add_Project_Divide,
                meta: {
                  title: "新增工程划分"
                }
              },
              {
                path: "edit",
                component: Edit_Project_Divide,
                meta: {
                  title: "修改工程划分"
                }
              }
            ]
          },
          {
            path: "standard-engineering",
            component: StandardEngineering,
            alias: "/stdEngineering",
            redirect: "/set/standard-engineering/index",
            meta: {
              title: "标准工程"
            },
            children: [
              {
                path: "index",
                component: Standard_Engineering_Index,
                meta: {
                  title: "标准工程"
                }
              },
              {
                path: "add",

                component: Add_Standard_Engineering,
                meta: {
                  title: "标准工程首页"
                }
              },
              {
                path: "edit",
                component: Edit_Standard_Engineering,
                meta: {
                  title: "标准工程首页"
                }
              }
            ]
          },
          {
            path: "evaluation-standard",
            component: EvaluationStandard,
            meta: {
              title: "评定标准"
            }
          }
        ],
        meta: {
          title: "系统设置"
        }
      },
      {
        path: "/audit",
        component: FormAudit,
        meta: {
          titile: "表格审核"
        },
        alias: "/tableAudit",
        redirect: "/audit/index",
        children: [
          {
            path: "index",
            component: FormAuditIndex,
            meta: {
              title: "表格审核首页"
            }
          },
          {
            path: "status",
            component: T_Audit_Status,
            meta: {
              title: "查看审核状态"
            }
          }
        ]
      },
      {
        path: "/process_manage",
        alias: "/processManage",
        component: process_manage,
        meta: {
          titile: "流程管理"
        },
        redirect: "/process_manage/index",
        children: [
          {
            path: "index",
            component: Process_Manage_Index,
            meta: {
              title: "流程管理首页"
            }
          },
          {
            path: "conf",
            component: Add_Process,
            meta: {
              title: "添加流程管理"
            }
          },
          {
            path: "edit",
            component: Edit_Process,
            meta: {
              title: "修改审核状态"
            }
          }
        ]
      },
      /*{
        path: "/D01",
        component: D01,
        meta: {
          title: "D-01页面"
        }
      },*/

    ],
    redirect: "/login"

  },

  {
    path: "/error",
    component: Error,
    meta: {
      title: "404页面"
    }
  },

  {
    path: "*",
    redirect: "error"
  },



]
export const router = new vueRouter({
  routes: routes,
  /* 在打包时如果需要在本地查看则需要更改资源路径*/
  /*  mode:'history'*/
});


window.sessionStorage.setItem("routers", JSON.stringify(routes));
//在页面刷新时将vuex里的信息保存到localStorage里
window.addEventListener("beforeunload", () => {
  store.commit("setProcedureControl",[])
  sessionStorage.setItem("messageStore", JSON.stringify(store.state))
})
//在页面加载时读取localStorage里的状态信息
sessionStorage.getItem("messageStore") && store.replaceState(Object.assign(store.state, JSON.parse(sessionStorage.getItem("messageStore"))));
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})
router.beforeEach((to, from, next) => {
  next();

})
