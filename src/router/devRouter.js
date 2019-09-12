import vueRouter from 'vue-router'
import {store} from '../store/store'
import Login from '../components/Login'
import Test from '../components/test'
import ThirdPartyLogin from '../components/ThirdPartyLogin'
import Error from '../components/common/Error'
import Mission from '../components/common/Mission'
import Quality from '../components/Quality'
import Model  from '../components/model/Model'
import Record from '../components/record/Record'
/*--------------工序控制----------------*/
import Engineering_Unit from '../components/procedure_control/engineering/Engineering_Unit'
import ProcedureControl from '../views/engineering_unit/ProcedureControl'
import SubentryProcessIndex from '../views/engineering_unit/process/SubentryProcessIndex'


import AuditProcess from '../views/engineering_unit/process/AuditProcess'
import Process from '../views/engineering_unit/process/Process'
import ProjectPhotos from '../views/engineering_unit/process/ProjectPhotos'

import Add_Process_List from '../views/setup/process_list/add_process_list/Add_Process_List'

/*--------------流程管理----------------*/
import process_manage from '../views/process_manage/process_manage'
import Process_Manage_Index from '../views/process_manage/Process_Manage_Index'
import Conf_process_Index from '../views/process_manage/conf_process_manage/Add_process'
const Add_Process = resolve => require(['@/views/process_manage/conf_process_manage/Add_process'], resolve);
const Edit_Process = resolve => require(['@/views/process_manage/conf_process_manage/Edit_process'], resolve);

/*--------------表格审核----------------*/
import FormAudit from '../views/form_audit/FormAudit'
import FormAuditIndex from '../views/form_audit/FormAuditIndex'
import T_Audit_Status from '../views/form_audit/audit_status/Audit_Status'

/*--------------附件列表----------------*/
import AccessoryIndex from '../views/engineering_unit/accessory/AccessoryIndex'

/*-----------------------------------------系统设置----------------*/
import Setup from '../components/setup/Setup'
//系统用户
import Sys_User from '../views/setup/sys_user/User'
import Sys_UserIndex from '../views/setup/sys_user/UserIndex'
import Add_User from '../views/setup/sys_user/add_user/Add_User'
import Edit_User from '../views/setup/sys_user/edit_user/Edit_User'
//评定标准
import EvaluationStandard from '../views/setup/evaluation_standard/EvaluationStandard'
//工程划分
import Project_Divide from '../views/setup/project_divide/Project_Divide'
import Project_Divide_Index from '../views/setup/project_divide/Project_Divide_Index'
import Add_Project_Divide from '../views/setup/project_divide/add_project_divide/Add_Project_Divide'
import Edit_Project_Divide from '../views/setup/project_divide/edit_project_divide/Edit_Project_Divide'
//标准工程
//import A16 from '../components/a/A-16'
//import A28 from '../components/a/A-28'
import ProcessListIndex from '../views/setup/process_list/ProcessListIndex'
import Proecss_List from '../views/setup/process_list/Proecss_List'
import StandardEngineering from '../views/setup/standard_engineering/StandardEngineering'
import Standard_Engineering_Index from '../views/setup/standard_engineering/Standard_Engineering_Index'
import Edit_Standard_Engineering
  from '../views/setup/standard_engineering/edit_standard_engineering/Edit_Standard_Engineering'
import Add_Standard_Engineering
  from '../views/setup/standard_engineering/add_standard_engineering/Add_Standard_Engineering'

//单位工程
import UnitProject from '../views/setup/unit_project/UnitProject'
import UnitProjectIndex from '../views/setup/unit_project/UnitProjectIndex'

//工序列表
import Set_Add_Process_List from '../views/setup/process_list/add_process_list/Add_Process_List'
import Edit_Process_List from '../views/setup/process_list/edit_process_list/Edit_Process_List'
import BusinessRecord from '../views/business_record/BusinessRecord'

/*
import aq_12 from '../components/AQ-31'
*/

/*-----------------JC模块 (检查记录)----------------*/
import ctrlPointMonitor from '../components/jc/CtrlPointMonitor'
import InspectRecord from '../components/jc/InspectRecord'
import penalty from '../components/jc/Penalty'
import qualityImprove from '../components/jc/QualityImprove'
import verifyConsign from '../components/jc/VerifyConsign'

import A06 from '../components/a/A-06'
import A16 from '../components/a/A-16'
import A28 from '../components/a/A-28'
import DCL02 from '../components/d/DCL-02'
import K2 from '../components/K/K2'
import K01 from '../components/k/K-01'
import C05 from '../components/c/c-05'
import Distribute from '../components/common/Distribute'

/*-----------------A模块----------------*/

/*import A01 from '../components/a/A-01'
import A02 from '../components/a/A-02'
import A03 from '../components/a/A-03'
import A04 from '../components/a/A-04'
import A05 from '../components/a/A-05'
import A06 from '../components/a/A-06'
import A07 from '../components/a/A-07'
import A08 from '../components/a/A-08'
import A09 from '../components/a/A-09'
import A10 from '../components/a/A-10'
import A11 from '../components/a/A-11'
import A12 from '../components/a/A-12'
import A13 from '../components/a/A-13'
import A14 from '../components/a/A-14'
import A15 from '../components/a/A-15'
import A16 from '../components/a/A-16'
import A17 from '../components/a/A-17'
import A18 from '../components/a/A-18'
import A19 from '../components/a/A-19'
import A20 from '../components/a/A-20'
import A21 from '../components/a/A-21'
import A22 from '../components/a/A-22'
import A23 from '../components/a/A-23'
import A24 from '../components/a/A-24'
import A25 from '../components/a/A-25'
import A26 from '../components/a/A-26'
import A27 from '../components/a/A-27'
import A28 from '../components/a/A-28'
import A29 from '../components/a/A-29'
import A30 from '../components/a/A-30'
import A31 from '../components/a/A-31'
import A32 from '../components/a/A-32'
import A33 from '../components/a/A-33'
import A34 from '../components/a/A-34'
import A35 from '../components/a/A-35'
import A36 from '../components/a/A-36'
import A37 from '../components/a/A-37'
import A38 from '../components/a/A-38'
import A39 from '../components/a/A-39'
import A40 from '../components/a/A-40'
import A41 from '../components/a/A-41'
import A42 from '../components/a/A-42'
import A43 from '../components/a/A-43'
import A44 from '../components/a/A-44'
import A45 from '../components/a/A-45'
import A46 from '../components/a/A-46'
import A47 from '../components/a/A-47'
import A48 from '../components/a/A-48'
import A49 from '../components/a/A-49'
import A50 from '../components/a/A-50'
import A51 from '../components/a/A-51'
import A52 from '../components/a/A-52'
import A53 from '../components/a/A-53'
import A54 from '../components/a/A-54'
import A55 from '../components/a/A-55'
import A56 from '../components/a/A-56'
import A57 from '../components/a/A-57'
import A58 from '../components/a/A-58'
import A59 from '../components/a/A-59'
import A60 from '../components/a/A-60'
import A61 from '../components/a/A-61'
import A62 from '../components/a/A-62'
import A63 from '../components/a/A-63'
import A64 from '../components/a/A-64'
import A65 from '../components/a/A-65'
import A66 from '../components/a/A-66'
import A67 from '../components/a/A-67'
import A68 from '../components/a/A-68'
import A69 from '../components/a/A-69'
import A70 from '../components/a/A-70'
import A71 from '../components/a/A-71'
import AB01 from '../components/a/A-B01'
import AB02 from '../components/a/A-B02'
import AB03 from '../components/a/A-B03'
import AZ11 from '../components/a/A-Z11'
import A10M from '../components/a/A-10-M'
import A70M from '../components/a/A-70-M'
import A39O from '../components/a/A-39-O'
import A40O from '../components/a/A-40-O'
import A41O from '../components/a/A-41-O'*/

/*-----------------D模块----------------*/
/*import D01 from '../components/d/D-01'
import D0101 from '../components/d/D-01-01'
import D0102 from '../components/d/D-01-02'
import D02 from '../components/d/D-02'
import D03 from '../components/d/D-03 '
import D04 from '../components/d/D-04'
import D05 from '../components/d/D-05'
import D06 from '../components/d/D-06'
import D07 from '../components/d/D-07'
import D08 from '../components/d/D-08'
import D09 from '../components/d/D-09'
import D10 from '../components/d/D-10'
import D11 from '../components/d/D-11'
import D12 from '../components/d/D-12'
import D13 from '../components/d/D-13'
import D1401 from '../components/d/D-14-01'
import D1402 from '../components/d/D-14-02'
import D15 from '../components/d/D-15'
import D16 from '../components/d/D-16'
import D17 from '../components/d/D-17'
import D18 from '../components/d/D-18'
import D19 from '../components/d/D-19'
import D20 from '../components/d/D-20'
import D21 from '../components/d/D-21'
import D22 from '../components/d/D-22'
import D23 from '../components/d/D-23'
import D24 from '../components/d/D-24'
import D25 from '../components/d/D-25'
import D26 from '../components/d/D-26'
import D27 from '../components/d/D-27'
import D28 from '../components/d/D-28'
import D29 from '../components/d/D-29'
import D30 from '../components/d/D-30'
import D31 from '../components/d/D-31'
import D32 from '../components/d/D-32'
import D33 from '../components/d/D-33'
import D34 from '../components/d/D-34'
import D35 from '../components/d/D-35'
import D36 from '../components/d/D-36'
import D37 from '../components/d/D-37'
import D38 from '../components/d/D-38'
import D39 from '../components/d/D-39'
import D40 from '../components/d/D-40'
import D41 from '../components/d/D-41'
import D42 from '../components/d/D-42'
import D43 from '../components/d/D-43'
import D44 from '../components/d/D-44'
import D45 from '../components/d/D-45'
import D46 from '../components/d/D-46'
import D4701 from '../components/d/D-47-01'
import D4702 from '../components/d/D-47-02'
import D48 from '../components/d/D-48'
import D49 from '../components/d/D-49'
import D50 from '../components/d/D-50'
import D51 from '../components/d/D-51'
import D52 from '../components/d/D-52'
import D53 from '../components/d/D-53'
import D54 from '../components/d/D-54'
import D55 from '../components/d/D-55'
import D56 from '../components/d/D-56'
import D57 from '../components/d/D-57'
import D58 from '../components/d/D-58'
import D59 from '../components/d/D-59'
import D60 from '../components/d/D-60'
import D61 from '../components/d/D-61'
import D62 from '../components/d/D-62'
import D63 from '../components/d/D-63'
import D64 from '../components/d/D-64'
import D65 from '../components/d/D-65'
import D66 from '../components/d/D-66'
import D67 from '../components/d/D-67'
import D68 from '../components/d/D-68'
import D69 from '../components/d/D-69'
import D70 from '../components/d/D-70'
import DCL01 from '../components/d/DCL-01'
import DCL02 from '../components/d/DCL-02'
import DCL03 from '../components/d/DCL-03'
import DCL04 from '../components/d/DCL-04'
import DCL05 from '../components/d/DCL-05'
import DCL06 from '../components/d/DCL-06'
import DCL07 from '../components/d/DCL-07'
import DCL08 from '../components/d/DCL-08'
import DCL09 from '../components/d/DCL-09'
import DCL10 from '../components/d/DCL-10'
import DCL11 from '../components/d/DCL-11'
import DCL12 from '../components/d/DCL-12'
import DCL13 from '../components/d/DCL-13'
import DCL14 from '../components/d/DCL-14'
import DCL15 from '../components/d/DCL-15'
import DCL16 from '../components/d/DCL-16'
import DCL17 from '../components/d/DCL-17'
import DLJ01 from '../components/d/DLJ-01'
import DLJ02 from '../components/d/DLJ-02'
import DLJ03 from '../components/d/DLJ-03'
import DLJ04 from '../components/d/DLJ-04'
import DLJ05 from '../components/d/DLJ-05'
import DQQT01 from '../components/d/DQQT-01'*/

/*-----------------C模块----------------*/

/*import C01 from '../components/c/C-01'
import C02 from '../components/c/C-02'
import C03 from '../components/c/C-03'
import C04 from '../components/c/C-04'
import C05 from '../components/c/C-05'
import C06 from '../components/c/C-06'
import C07 from '../components/c/C-07'
import C08 from '../components/c/C-08'
import C09 from '../components/c/C-09'
import C10 from '../components/c/C-10'
import CB01 from '../components/c/C-B01'

import CFH01 from '../components/c/CFH-01'
import CFH02 from '../components/c/CFH-02'
import CFH03 from '../components/c/CFH-03'
import CFH04 from '../components/c/CFH-04'
import CFH05 from '../components/c/CFH-05'
import CFH06 from '../components/c/CFH-06'
import CFH07 from '../components/c/CFH-07'
import CFH08 from '../components/c/CFH-08'
import CFH09 from '../components/c/CFH-09'
import CFH10 from '../components/c/CFH-10'
import CFH11 from '../components/c/CFH-11'
import CFH12 from '../components/c/CFH-12'
import CFH13 from '../components/c/CFH-13'
import CFH14 from '../components/c/CFH-14'
import CFH15 from '../components/c/CFH-15'
import CFH16 from '../components/c/CFH-16'
import CFH17 from '../components/c/CFH-17'
import CFH18 from '../components/c/CFH-18'
import CFH19 from '../components/c/CFH-19'
import CFHB01 from '../components/c/CFH-B01'
import CFHB02 from '../components/c/CFH-B02'
import CFHB03 from '../components/c/CFH-B03'
import CFHB04 from '../components/c/CFH-B04'
import CFHB05 from '../components/c/CFH-B05'
import CFHB06 from '../components/c/CFH-B06'
import CFHB07 from '../components/c/CFH-B07'

import CLH01 from '../components/c/CLH-01'
import CLH02 from '../components/c/CLH-02'
import CLH03 from '../components/c/CLH-03'
import CLH04 from '../components/c/CLH-04'
import CLH05 from '../components/c/CLH-05'
import CLH061 from '../components/c/CLH-06-1'
import CLH062 from '../components/c/CLH-06-2'
import CLH063 from '../components/c/CLH-06-3'
import CLH064 from '../components/c/CLH-06-4'
import CLH065 from '../components/c/CLH-06-5'
import CLH066 from '../components/c/CLH-06-6'
import CLH07 from '../components/c/CLH-07'
import CLH08 from '../components/c/CLH-08'
import CLH09 from '../components/c/CLH-09'
import CLH10 from '../components/c/CLH-10'
import CLH11 from '../components/c/CLH-11'
import CLH12 from '../components/c/CLH-12'
import CLH13 from '../components/c/CLH-13'
import CLH14 from '../components/c/CLH-14'
import CLH15 from '../components/c/CLH-15'
import CLH16 from '../components/c/CLH-16'
import CLH17 from '../components/c/CLH-17'
import CLH18 from '../components/c/CLH-18'
import CLH19 from '../components/c/CLH-19'
import CLH201 from '../components/c/CLH-20-1'
import CLH202 from '../components/c/CLH-20-2'
import CLH203 from '../components/c/CLH-20-3'
import CLH204 from '../components/c/CLH-20-4'
import CLH211 from '../components/c/CLH-21-1'
import CLH212 from '../components/c/CLH-21-2'
import CLH213 from '../components/c/CLH-21-3'
import CLH214 from '../components/c/CLH-21-4'
import CLH221 from '../components/c/CLH-22-1'
import CLH222 from '../components/c/CLH-22-2'
import CLH223 from '../components/c/CLH-22-3'
import CLH224 from '../components/c/CLH-22-4'
import CLH231 from '../components/c/CLH-23-1'
import CLH232 from '../components/c/CLH-23-2'
import CLH233 from '../components/c/CLH-23-3'
import CLH234 from '../components/c/CLH-23-4'
import CLH241 from '../components/c/CLH-24-1'
import CLH242 from '../components/c/CLH-24-2'
import CLH243 from '../components/c/CLH-24-3'
import CLH244 from '../components/c/CLH-24-4'
import CLH251 from '../components/c/CLH-25-1'
import CLH252 from '../components/c/CLH-25-2'
import CLH253 from '../components/c/CLH-25-3'
import CLH254 from '../components/c/CLH-25-4'

import CLM01 from '../components/c/CLM-01'
import CLM02 from '../components/c/CLM-02'
import CLM03 from '../components/c/CLM-03'
import CLM04 from '../components/c/CLM-04'
import CLM05 from '../components/c/CLM-05'
import CLM06 from '../components/c/CLM-06'
import CLM07 from '../components/c/CLM-07'
import CLM08 from '../components/c/CLM-08'
import CLM09 from '../components/c/CLM-09'
import CLM10 from '../components/c/CLM-10'
import CLM11 from '../components/c/CLM-11'
import CLM12 from '../components/c/CLM-12'
import CLM13 from '../components/c/CLM-13'
import CLM14 from '../components/c/CLM-14'

import CLS01 from '../components/c/CLS-01'
import CLS02 from '../components/c/CLS-02'
import CLS03 from '../components/c/CLS-03'
import CLS04 from '../components/c/CLS-04'
import CLS05 from '../components/c/CLS-05'
import CLS06 from '../components/c/CLS-06'
import CLS07 from '../components/c/CLS-07'
import CLS08 from '../components/c/CLS-08'
import CLS09 from '../components/c/CLS-09'
import CLS10 from '../components/c/CLS-10'
import CLS11 from '../components/c/CLS-11'
import CLS12 from '../components/c/CLS-12'
import CLSB01 from '../components/c/CLS-B01'
import CLSB02 from '../components/c/CLS-B02'
import CLSB03 from '../components/c/CLS-B03'
import CLSX02 from '../components/c/CLS-X02'

import CP01 from '../components/c/CP-01'
import CP02 from '../components/c/CP-02'
import CP03 from '../components/c/CP-03'
import CP04 from '../components/c/CP-04'
import CP05 from '../components/c/CP-05'
import CP06 from '../components/c/CP-06'
import CP07 from '../components/c/CP-07'
import CPB01 from '../components/c/CP-B01'

import CQH01 from '../components/c/CQH-01'
import CQH02 from '../components/c/CQH-02'
import CQH03 from '../components/c/CQH-03'
import CQH04 from '../components/c/CQH-04'
import CQH05 from '../components/c/CQH-05'
import CQH06 from '../components/c/CQH-06'
import CQH07 from '../components/c/CQH-07'
import CQH08 from '../components/c/CQH-08'
import CQH09 from '../components/c/CQH-09'
import CQH10 from '../components/c/CQH-10'
import CQH11 from '../components/c/CQH-11'
import CQH12 from '../components/c/CQH-12'
import CQH13 from '../components/c/CQH-13'
import CQH14 from '../components/c/CQH-14'
import CQH15 from '../components/c/CQH-15'
import CQH16 from '../components/c/CQH-16'
import CQH17 from '../components/c/CQH-17'
import CQH18 from '../components/c/CQH-18'
import CQH19 from '../components/c/CQH-19'
import CQH20 from '../components/c/CQH-20'
import CQH21 from '../components/c/CQH-21'
import CQH22 from '../components/c/CQH-22'
import CQH23 from '../components/c/CQH-23'
import CQH24 from '../components/c/CQH-24'
import CQH25 from '../components/c/CQH-25'
import CQH26 from '../components/c/CQH-26'
import CQH27 from '../components/c/CQH-27'
import CQH28 from '../components/c/CQH-28'
import CQH29 from '../components/c/CQH-29'
import CQH30 from '../components/c/CQH-30'
import CQH31 from '../components/c/CQH-31'
import CQH32 from '../components/c/CQH-32'
import CQH33 from '../components/c/CQH-33'
import CQH34 from '../components/c/CQH-34'
import CQH35 from '../components/c/CQH-35'
import CQH36 from '../components/c/CQH-36'
import CQH37 from '../components/c/CQH-37'
import CQH38 from '../components/c/CQH-38'
import CQH39 from '../components/c/CQH-39'
import CQH40 from '../components/c/CQH-40'
import CQH41 from '../components/c/CQH-41'
import CQH42 from '../components/c/CQH-42'
import CQH43 from '../components/c/CQH-43'
import CQH44 from '../components/c/CQH-44'
import CQH45 from '../components/c/CQH-45'
import CQH46 from '../components/c/CQH-46'
import CQH47 from '../components/c/CQH-47'
import CQH48 from '../components/c/CQH-48'
import CQH49 from '../components/c/CQH-49'
import CQH50 from '../components/c/CQH-50'
import CQH51 from '../components/c/CQH-51'
import CQH52 from '../components/c/CQH-52'
import CQH53 from '../components/c/CQH-53'
import CQH54 from '../components/c/CQH-54'
import CQH55 from '../components/c/CQH-55'
import CQH56 from '../components/c/CQH-56'
import CQH57 from '../components/c/CQH-57'
import CQH58 from '../components/c/CQH-58'
import CQH59 from '../components/c/CQH-59'
import CQH60 from '../components/c/CQH-60'
import CQH61 from '../components/c/CQH-61'
import CQH62 from '../components/c/CQH-62'
import CQH63 from '../components/c/CQH-63'
import CQH64 from '../components/c/CQH-64'
import CQH65 from '../components/c/CQH-65'
import CQH66 from '../components/c/CQH-66'
import CQH67 from '../components/c/CQH-67'
import CQH68 from '../components/c/CQH-68'
import CQH69 from '../components/c/CQH-69'
import CQH70 from '../components/c/CQH-70'
import CQH71 from '../components/c/CQH-71'
import CQH72 from '../components/c/CQH-72'
import CQH73 from '../components/c/CQH-73'
import CQH74 from '../components/c/CQH-74'
import CQH75 from '../components/c/CQH-75'
import CQH76 from '../components/c/CQH-76'
import CQH77 from '../components/c/CQH-77'
import CQH78 from '../components/c/CQH-78'
import CQH79 from '../components/c/CQH-79'
import CQH80 from '../components/c/CQH-80'
import CQH81 from '../components/c/CQH-81'
import CQH82 from '../components/c/CQH-82'
import CQH83 from '../components/c/CQH-83'
import CQH84 from '../components/c/CQH-84'
import CQH85 from '../components/c/CQH-85'
import CQH86 from '../components/c/CQH-86'
import CQH87 from '../components/c/CQH-87'
import CQH88 from '../components/c/CQH-88'
import CQH89 from '../components/c/CQH-89'
import CQHB01 from '../components/c/CQH-B01'

import CSD01 from '../components/c/CSD-01'
import CSD02 from '../components/c/CSD-02'
import CSD03 from '../components/c/CSD-03'
import CSD04 from '../components/c/CSD-04'
import CSD05 from '../components/c/CSD-05'
import CSD06 from '../components/c/CSD-06'
import CSD07 from '../components/c/CSD-07'
import CSD08 from '../components/c/CSD-08'
import CSD09 from '../components/c/CSD-09'
import CSD10 from '../components/c/CSD-10'
import CSD11 from '../components/c/CSD-11'
import CSD12 from '../components/c/CSD-12'
import CSD13 from '../components/c/CSD-13'
import CSD14 from '../components/c/CSD-14'
import CSD15 from '../components/c/CSD-15'
import CSD16 from '../components/c/CSD-16'
import CSD17 from '../components/c/CSD-17'
import CSD18 from '../components/c/CSD-18'
import CSD19 from '../components/c/CSD-19'
import CSDB02 from '../components/c/CSD-B02'
import CSDB03 from '../components/c/CSD-B03'

import CXSQ01 from '../components/c/CXSQ-01'
import CXSQ02 from '../components/c/CXSQ-02'
import CXSQ03 from '../components/c/CXSQ-03'
import CXSQ04 from '../components/c/CXSQ-04'
import CXSQ05 from '../components/c/CXSQ-05'
import CXSQ06 from '../components/c/CXSQ-06'
import CXSQ07 from '../components/c/CXSQ-07'
import CXSQ08 from '../components/c/CXSQ-08'
import CXSQ09 from '../components/c/CXSQ-09'
import CXSQ10 from '../components/c/CXSQ-10'
import CXSQ11 from '../components/c/CXSQ-11'
import CXSQ12 from '../components/c/CXSQ-12'
import CXSQ13 from '../components/c/CXSQ-13'
import CXSQ14 from '../components/c/CXSQ-14'
import CXSQ15 from '../components/c/CXSQ-15'
import CXSQ16 from '../components/c/CXSQ-16'
import CXSQ17 from '../components/c/CXSQ-17'
import CXSQ18 from '../components/c/CXSQ-18'
import CXSQ19 from '../components/c/CXSQ-19'
import CXSQ20 from '../components/c/CXSQ-20'
import CXSQ21 from '../components/c/CXSQ-21'

import CXY01 from '../components/c/CXY-01'
import CXY02 from '../components/c/CXY-02'
import CXY03 from '../components/c/CXY-03'
import CXY04 from '../components/c/CXY-04'
import CXY05 from '../components/c/CXY-05'
import CXY06 from '../components/c/CXY-06'
import CXY07 from '../components/c/CXY-07'
import CXY08 from '../components/c/CXY-08'
import CXY09 from '../components/c/CXY-09'*/

/*-----------------K模块----------------*/
/*import K2 from '../components/k/K2'
import K3 from '../components/k/K3'*/

/*import K01 from '../components/k/K-01'
import K02 from '../components/k/K-02'
import K03 from '../components/k/K-03'
import K04 from '../components/k/K-04'
import K05 from '../components/k/K-05'
import K06 from '../components/k/K-06'
import K07 from '../components/k/K-07'
import K08 from '../components/k/K-08'
import K09 from '../components/k/K-09'
import K10 from '../components/k/K-10'
import KB01 from '../components/k/K-B01'

import KFH01 from '../components/k/KFH-01'
import KFH02 from '../components/k/KFH-02'
import KFH03 from '../components/k/KFH-03'
import KFH04 from '../components/k/KFH-04'
import KFH05 from '../components/k/KFH-05'
import KFH06 from '../components/k/KFH-06'
import KFH07 from '../components/k/KFH-07'
import KFH08 from '../components/k/KFH-08'
import KFH09 from '../components/k/KFH-09'
import KFH10 from '../components/k/KFH-10'
import KFH11 from '../components/k/KFH-11'
import KFH12 from '../components/k/KFH-12'
import KFH13 from '../components/k/KFH-13'
import KFH14 from '../components/k/KFH-14'
import KFH15 from '../components/k/KFH-15'
import KFH16 from '../components/k/KFH-16'
import KFH17 from '../components/k/KFH-17'
import KFH18 from '../components/k/KFH-18'
import KFH19 from '../components/k/KFH-19'
import KFHB01 from '../components/k/KFH-B01'
import KFHB02 from '../components/k/KFH-B02'
import KFHB03 from '../components/k/KFH-B03'
import KFHB04 from '../components/k/KFH-B04'
import KFHB05 from '../components/k/KFH-B05'
import KFHB06 from '../components/k/KFH-B06'
import KFHB07 from '../components/k/KFH-B07'

import KLH01 from '../components/k/KLH-01'
import KLH02 from '../components/k/KLH-02'
import KLH03 from '../components/k/KLH-03'
import KLH04 from '../components/k/KLH-04'
import KLH05 from '../components/k/KLH-05'
import KLH061 from '../components/k/KLH-06-1'
import KLH062 from '../components/k/KLH-06-2'
import KLH063 from '../components/k/KLH-06-3'
import KLH064 from '../components/k/KLH-06-4'
import KLH065 from '../components/k/KLH-06-5'
import KLH066 from '../components/k/KLH-06-6'
import KLH07 from '../components/k/KLH-07'
import KLH08 from '../components/k/KLH-08'
import KLH09 from '../components/k/KLH-09'
import KLH10 from '../components/k/KLH-10'
import KLH11 from '../components/k/KLH-11'
import KLH12 from '../components/k/KLH-12'
import KLH13 from '../components/k/KLH-13'
import KLH14 from '../components/k/KLH-14'
import KLH15 from '../components/k/KLH-15'
import KLH16 from '../components/k/KLH-16'
import KLH17 from '../components/k/KLH-17'
import KLH18 from '../components/k/KLH-18'
import KLH19 from '../components/k/KLH-19'
import KLH201 from '../components/k/KLH-20-1'
import KLH202 from '../components/k/KLH-20-2'
import KLH203 from '../components/k/KLH-20-3'
import KLH204 from '../components/k/KLH-20-4'
import KLH211 from '../components/k/KLH-21-1'
import KLH212 from '../components/k/KLH-21-2'
import KLH213 from '../components/k/KLH-21-3'
import KLH214 from '../components/k/KLH-21-4'
import KLH221 from '../components/k/KLH-22-1'
import KLH222 from '../components/k/KLH-22-2'
import KLH223 from '../components/k/KLH-22-3'
import KLH224 from '../components/k/KLH-22-4'
import KLH231 from '../components/k/KLH-23-1'
import KLH232 from '../components/k/KLH-23-2'
import KLH233 from '../components/k/KLH-23-3'
import KLH234 from '../components/k/KLH-23-4'
import KLH241 from '../components/k/KLH-24-1'
import KLH242 from '../components/k/KLH-24-2'
import KLH243 from '../components/k/KLH-24-3'
import KLH244 from '../components/k/KLH-24-4'
import KLH251 from '../components/k/KLH-25-1'
import KLH252 from '../components/k/KLH-25-2'
import KLH253 from '../components/k/KLH-25-3'
import KLH254 from '../components/k/KLH-25-4'

import KLM01 from '../components/k/KLM-01'
import KLM02 from '../components/k/KLM-02'
import KLM03 from '../components/k/KLM-03'
import KLM04 from '../components/k/KLM-04'
import KLM05 from '../components/k/KLM-05'
import KLM06 from '../components/k/KLM-06'
import KLM07 from '../components/k/KLM-07'
import KLM08 from '../components/k/KLM-08'
import KLM09 from '../components/k/KLM-09'
import KLM10 from '../components/k/KLM-10'

import KLS01 from '../components/k/KLS-01'
import KLS02 from '../components/k/KLS-02'
import KLS03 from '../components/k/KLS-03'
import KLS04 from '../components/k/KLS-04'
import KLS05 from '../components/k/KLS-05'
import KLS06 from '../components/k/KLS-06'
import KLS07 from '../components/k/KLS-07'
import KLS08 from '../components/k/KLS-08'
import KLS09 from '../components/k/KLS-09'
import KLS10 from '../components/k/KLS-10'
import KLS11 from '../components/k/KLS-11'
import KLS12 from '../components/k/KLS-12'

import KP01 from '../components/k/KP-01'
import KP02 from '../components/k/KP-02'
import KP03 from '../components/k/KP-03'
import KP04 from '../components/k/KP-04'
import KP05 from '../components/k/KP-05'
import KP06 from '../components/k/KP-06'
import KP07 from '../components/k/KP-07'
import KPB01 from '../components/k/KP-B01'

import KQH01 from '../components/k/KQH-01'
import KQH02 from '../components/k/KQH-02'
import KQH03 from '../components/k/KQH-03'
import KQH04 from '../components/k/KQH-04'
import KQH05 from '../components/k/KQH-05'
import KQH06 from '../components/k/KQH-06'
import KQH07 from '../components/k/KQH-07'
import KQH08 from '../components/k/KQH-08'
import KQH09 from '../components/k/KQH-09'
import KQH10 from '../components/k/KQH-10'
import KQH11 from '../components/k/KQH-11'
import KQH12 from '../components/k/KQH-12'
import KQH13 from '../components/k/KQH-13'
import KQH14 from '../components/k/KQH-14'
import KQH15 from '../components/k/KQH-15'
import KQH16 from '../components/k/KQH-16'
import KQH17 from '../components/k/KQH-17'
import KQH18 from '../components/k/KQH-18'
import KQH19 from '../components/k/KQH-19'
import KQH20 from '../components/k/KQH-20'
import KQH21 from '../components/k/KQH-21'
import KQH22 from '../components/k/KQH-22'
import KQH23 from '../components/k/KQH-23'
import KQH24 from '../components/k/KQH-24'
import KQH25 from '../components/k/KQH-25'
import KQH26 from '../components/k/KQH-26'
import KQH27 from '../components/k/KQH-27'
import KQH28 from '../components/k/KQH-28'
import KQH29 from '../components/k/KQH-29'
import KQH30 from '../components/k/KQH-30'
import KQH31 from '../components/k/KQH-31'
import KQH32 from '../components/k/KQH-32'
import KQH33 from '../components/k/KQH-33'
import KQH34 from '../components/k/KQH-34'
import KQH35 from '../components/k/KQH-35'
import KQH36 from '../components/k/KQH-36'
import KQH37 from '../components/k/KQH-37'
import KQH38 from '../components/k/KQH-38'
import KQH39 from '../components/k/KQH-39'
import KQH40 from '../components/k/KQH-40'
import KQH41 from '../components/k/KQH-41'
import KQH42 from '../components/k/KQH-42'
import KQH43 from '../components/k/KQH-43'
import KQH44 from '../components/k/KQH-44'
import KQH45 from '../components/k/KQH-45'
import KQH46 from '../components/k/KQH-46'
import KQH47 from '../components/k/KQH-47'
import KQH48 from '../components/k/KQH-48'
import KQH49 from '../components/k/KQH-49'
import KQH50 from '../components/k/KQH-50'
import KQH51 from '../components/k/KQH-51'
import KQH52 from '../components/k/KQH-52'
import KQH53 from '../components/k/KQH-53'
import KQH54 from '../components/k/KQH-54'
import KQH55 from '../components/k/KQH-55'
import KQH56 from '../components/k/KQH-56'
import KQH57 from '../components/k/KQH-57'
import KQH58 from '../components/k/KQH-58'
import KQH59 from '../components/k/KQH-59'
import KQH60 from '../components/k/KQH-60'
import KQH61 from '../components/k/KQH-61'
import KQH62 from '../components/k/KQH-62'
import KQH63 from '../components/k/KQH-63'
import KQH64 from '../components/k/KQH-64'
import KQH65 from '../components/k/KQH-65'
import KQH66 from '../components/k/KQH-66'
import KQH67 from '../components/k/KQH-67'
import KQH68 from '../components/k/KQH-68'
import KQH69 from '../components/k/KQH-69'
import KQH70 from '../components/k/KQH-70'
import KQH71 from '../components/k/KQH-71'
import KQH72 from '../components/k/KQH-72'
import KQH73 from '../components/k/KQH-73'
import KQH74 from '../components/k/KQH-74'
import KQH75 from '../components/k/KQH-75'
import KQH76 from '../components/k/KQH-76'
import KQH77 from '../components/k/KQH-77'
import KQH78 from '../components/k/KQH-78'
import KQH79 from '../components/k/KQH-79'
import KQH80 from '../components/k/KQH-80'
import KQH81 from '../components/k/KQH-81'
import KQH82 from '../components/k/KQH-82'

import KQH84 from '../components/k/KQH-84'
import KQH85 from '../components/k/KQH-85'
import KQH86 from '../components/k/KQH-86'
import KQH87 from '../components/k/KQH-87'
import KQH88 from '../components/k/KQH-88'
import KQH89 from '../components/k/KQH-89'
import KQHB01 from '../components/k/KQH-B01'

import KSD01 from '../components/k/KSD-01'
import KSD02 from '../components/k/KSD-02'
import KSD03 from '../components/k/KSD-03'
import KSD04 from '../components/k/KSD-04'
import KSD05 from '../components/k/KSD-05'
import KSD06 from '../components/k/KSD-06'
import KSD07 from '../components/k/KSD-07'
import KSD08 from '../components/k/KSD-08'
import KSD09 from '../components/k/KSD-09'
import KSD10 from '../components/k/KSD-10'
import KSD11 from '../components/k/KSD-11'
import KSD12 from '../components/k/KSD-12'
import KSD13 from '../components/k/KSD-13'
import KSD14 from '../components/k/KSD-14'
import KSD15 from '../components/k/KSD-15'
import KSD16 from '../components/k/KSD-16'
import KSD17 from '../components/k/KSD-17'
import KSD18 from '../components/k/KSD-18'
import KSD19 from '../components/k/KSD-19'
import KSDB02 from '../components/k/KSD-B02'
import KSDB03 from '../components/k/KSD-B03'

import KXSQ01 from '../components/k/KXSQ-01'
import KXSQ02 from '../components/k/KXSQ-02'
import KXSQ03 from '../components/k/KXSQ-03'
import KXSQ04 from '../components/k/KXSQ-04'
import KXSQ05 from '../components/k/KXSQ-05'
import KXSQ06 from '../components/k/KXSQ-06'
import KXSQ07 from '../components/k/KXSQ-07'
import KXSQ08 from '../components/k/KXSQ-08'
import KXSQ09 from '../components/k/KXSQ-09'
import KXSQ10 from '../components/k/KXSQ-10'
import KXSQ11 from '../components/k/KXSQ-11'
import KXSQ12 from '../components/k/KXSQ-12'
import KXSQ13 from '../components/k/KXSQ-13'
import KXSQ14 from '../components/k/KXSQ-14'
import KXSQ15 from '../components/k/KXSQ-15'
import KXSQ16 from '../components/k/KXSQ-16'
import KXSQ17 from '../components/k/KXSQ-17'
import KXSQ18 from '../components/k/KXSQ-18'
import KXSQ19 from '../components/k/KXSQ-19'
import KXSQ20 from '../components/k/KXSQ-20'
import KXSQ21 from '../components/k/KXSQ-21'
import KXY01 from '../components/k/KXY-01'
import KXY02 from '../components/k/KXY-02'
import KXY03 from '../components/k/KXY-03'
import KXY04 from '../components/k/KXY-04'
import KXY05 from '../components/k/KXY-05'
import KXY06 from '../components/k/KXY-06'
import KXY07 from '../components/k/KXY-07'
import KXY08 from '../components/k/KXY-08'
import KXY09 from '../components/k/KXY-09'*/

/*-----------------AQ模块----------------*/
/*import AQ01 from '../components/aq/AQ-01'
import AQ02 from '../components/aq/AQ-02'
import AQ03 from '../components/aq/AQ-03'
import AQ04 from '../components/aq/AQ-04'
import AQ05 from '../components/aq/AQ-05'
import AQ06 from '../components/aq/AQ-06'
import AQ07 from '../components/aq/AQ-07'
import AQ08 from '../components/aq/AQ-08'
import AQ09 from '../components/aq/AQ-09'
import AQ10 from '../components/aq/AQ-10'
import AQ11 from '../components/aq/AQ-11'
import AQ12 from '../components/aq/AQ-12'
import AQ13 from '../components/aq/AQ-13'
import AQ14 from '../components/aq/AQ-14'
import AQ15 from '../components/aq/AQ-15'
import AQ16 from '../components/aq/AQ-16'
import AQ17 from '../components/aq/AQ-17'
import AQ18 from '../components/aq/AQ-18'
import AQ19 from '../components/aq/AQ-19'
import AQ20 from '../components/aq/AQ-20'
import AQ21 from '../components/aq/AQ-21'
import AQ22 from '../components/aq/AQ-22'
import AQ23 from '../components/aq/AQ-23'
import AQ24 from '../components/aq/AQ-24'
import AQ25 from '../components/aq/AQ-25'
import AQ26 from '../components/aq/AQ-26'
import AQ27 from '../components/aq/AQ-27'
import AQ28 from '../components/aq/AQ-28'
import AQ29 from '../components/aq/AQ-29'
import AQ30 from '../components/aq/AQ-30'
import AQ31 from '../components/aq/AQ-31'
import AQ32 from '../components/aq/AQ-32'
import AQ33 from '../components/aq/AQ-33'
import AQ34 from '../components/aq/AQ-34'
import AQ35 from '../components/aq/AQ-35'
import AQ36 from '../components/aq/AQ-36'*/

/*---------------JL模块----------------*/
/*import JL01 from '../components/jl/JL-01'
import JL02 from '../components/jl/JL-02'
import JL03 from '../components/jl/JL-03'
import JL04 from '../components/jl/JL-04'
import JL05 from '../components/jl/JL-05'
import JL06 from '../components/jl/JL-06'
import JL07 from '../components/jl/JL-07'
import JL08 from '../components/jl/JL-08'
import JL09 from '../components/jl/JL-09'
import JL10 from '../components/jl/JL-10'
import JL11 from '../components/jl/JL-11'
import JL12 from '../components/jl/JL-12'
import JL13 from '../components/jl/JL-13'
import JL14 from '../components/jl/JL-14'
import JL16 from '../components/jl/JL-16'
import JL17 from '../components/jl/JL-17'
import JL18 from '../components/jl/JL-18'
import JL19 from '../components/jl/JL-19'
import JL20 from '../components/jl/JL-20'
import JL21 from '../components/jl/JL-21'
import JL22 from '../components/jl/JL-22'
import JL23 from '../components/jl/JL-23'
import JL24 from '../components/jl/JL-24'
import JL25 from '../components/jl/JL-25'
import JL26 from '../components/jl/JL-26'*/

/*---------PX模块 (机电JS附表---原始施工记录表)---------*/
/*import PX01 from '../components/px/PX-01'
import PX02 from '../components/px/PX-02'
import PX03 from '../components/px/PX-03'
import PX04 from '../components/px/PX-04'
import PX05 from '../components/px/PX-05'
import PX06 from '../components/px/PX-06'
import PX07 from '../components/px/PX-07'
import PX08 from '../components/px/PX-08'
import PX09 from '../components/px/PX-09'
import PX10 from '../components/px/PX-10'
import PX11 from '../components/px/PX-11'
import PX12 from '../components/px/PX-12'
import PX13 from '../components/px/PX-13'
import PX14 from '../components/px/PX-14'
import PX15 from '../components/px/PX-15'
import PX16 from '../components/px/PX-16'
import PX17 from '../components/px/PX-17'
import PX18 from '../components/px/PX-18'
import PX19 from '../components/px/PX-19'
import PX20 from '../components/px/PX-20'
import PX21 from '../components/px/PX-21'
import PX22 from '../components/px/PX-22'
import PX23 from '../components/px/PX-23'
import PX24 from '../components/px/PX-24'
import PX25 from '../components/px/PX-25'
import PX26 from '../components/px/PX-26'
import PX27 from '../components/px/PX-27'
import PX28 from '../components/px/PX-28'
import PX29 from '../components/px/PX-29'
import PX30 from '../components/px/PX-30'
import PX31 from '../components/px/PX-31'
import PX32 from '../components/px/PX-32'
import PX33 from '../components/px/PX-33'
import PX34 from '../components/px/PX-34'
import PX35 from '../components/px/PX-35'
import PX36 from '../components/px/PX-36'
import PX37 from '../components/px/PX-37'
import PX38 from '../components/px/PX-38'
import PX39 from '../components/px/PX-39'
import PX40 from '../components/px/PX-40'
import PX41 from '../components/px/PX-41'
import PX42 from '../components/px/PX-42'
import PX43 from '../components/px/PX-43'
import PX47 from '../components/px/PX-47'
import PX48 from '../components/px/PX-48'
import PX49 from '../components/px/PX-49'
import PX50 from '../components/px/PX-50'
import PX51 from '../components/px/PX-51'
import PX52 from '../components/px/PX-52'
import PX53 from '../components/px/PX-53'
import PX54 from '../components/px/PX-54'
import PX55 from '../components/px/PX-55'
import PX56 from '../components/px/PX-56'*/


const routes = [
  {
    path: "/",
    meta: {
      title: "项目根路径"
    },
    component: Quality,
    children: [
      {
        path:"/mission",
        meta:{
          title:"任务"
        },
        component:Mission
      },
      {
        path:"/businessRec",
        meta:{
          title:"业务记录"
        },
        component:BusinessRecord
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
        alias:"/processManage",
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
      }

    ],
    redirect: "/login"

  },


  {
    path: "/",
    meta: {
      title: "模块页面"
    },
    component: Model,
    children: [
      {
        path: 'k01',
        alias: "/K-01",
        component: K01
      },
      {
        path: 'c05',
        alias: "/C-05",
        component: C05
      },
      {
        path: 'k2',
        alias: "/subProjectEvaluate",
        component: K2
      },
      {
        path: "a06",
        alias: "/A-06",
        component: A06
      },
      {
        path: "a16",
        alias: "/A-16",
        component: A16
      },

      {
        path: "DCL02",
        alias: "/DCL-02",
        component: DCL02
      },

      {
        path: "a28",
        alias: "/A-28",
        component: A28
      },
      /*{
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
        alias: "/A-37",
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
      },*/

      /* {
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
          alias: "/D-09",
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
        },*/
      /*{
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
        path:'cfh02',
        alias: "/CFH-02",
        component:CFH02
      },
      {
        path:'cfh03',
        alias: "/CFH-03",
        component:CFH03
      },
      {
        path:'cfh04',
        alias: "/CFH-04",
        component:CFH04
      },
      {
        path:'cfh05',
        alias: "/CFH-05",
        component:CFH05
      },
      {
        path:'cfh06',
        alias: "/CFH-06",
        component:CFH06
      },
      {
        path:'cfh07',
        alias: "/CFH-07",
        component:CFH07
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
        path:'clh01',
        alias: "/CLH-01",
        component:CLH01
      },
      {
        path:'clh02',
        alias: "/CLH-02",
        component:CLH02
      },
      {
        path:'clh03',
        alias: "/CLH-03",
        component:CLH03
      },
      {
        path:'clh04',
        alias: "/CLH-04",
        component:CLH04
      },
      {
        path:'clh05',
        alias: "/CLH-05",
        component:CLH05
      },
      {
        path:'clh061',
        alias: "/CLH-06-1",
        component:CLH061
      },
      {
        path:'clh062',
        alias: "/CLH-06-2",
        component:CLH062
      },
      {
        path:'clh063',
        alias: "/CLH-06-3",
        component:CLH063
      },
      {
        path:'clh064',
        alias: "/CLH-06-4",
        component:CLH064
      },
      {
        path:'clh065',
        alias: "/CLH-06-5",
        component:CLH065
      },
      {
        path:'clh066',
        alias: "/CLH-06-6",
        component:CLH066
      },
      {
        path:'clh07',
        alias: "/CLH-07",
        component:CLH07
      },
      {
        path:'clh08',
        alias: "/CLH-08",
        component:CLH08
      },
      {
        path:'clh09',
        alias: "/CLH-09",
        component:CLH09
      },
      {
        path:'clh10',
        alias: "/CLH-10",
        component:CLH10
      },
      {
        path:'clh11',
        alias: "/CLH-11",
        component:CLH11
      },
      {
        path:'clh12',
        alias: "/CLH-12",
        component:CLH12
      },
      {
        path:'clh13',
        alias: "/CLH-13",
        component:CLH13
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
        component: CLS02
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
        path:'cqh41',
        alias: "/CQH-41",
        component:CQH41
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
        path:'cqh44',
        alias: "/CQH-44",
        component:CQH44
      },
      {
        path:'cqh45',
        alias: "/CQH-45",
        component:CQH45
      },
      {
        path:'cqh46',
        alias: "/CQH-46",
        component:CQH46
      },
      {
        path: 'cqh47',
        alias: "/CQH-47",
        component: CQH47
      },
      {
        path:'cqh46',
        alias: "/CQH-46",
        component:CQH46
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
      }, {
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
        path:'cxsq07',
        alias: "/CXSQ-07",
        component:CXSQ07
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
        path:'cxsq11',
        alias: "/CXSQ-11",
        component:CXSQ11
      },
      {
        path:'cxsq12',
        alias: "/CXSQ-12",
        component:CXSQ12
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
      },*/

      /*{
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
        path: "kqh83",
        alias: "/KQH-83",
        component: KQH83
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
      },*/

      /*{
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
        },{
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
        },*/

      /* {
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
       }*/

      /*{
        path: 'px01',
        alias: 'PX-01',
        component: PX01
      },
      {
        path: 'px01',
        alias: 'PX-01',
        component: PX01
      },
      {
        path: 'px01',
        alias: 'PX-01',
        component: PX01
      },
      {
        path: 'px02',
        alias: 'PX-02',
        component: PX02
      },
      {
        path: 'px03',
        alias: 'PX-03',
        component: PX03
      },
      {
        path: 'px04',
        alias: 'PX-04',
        component: PX04
      },
      {
        path: 'px05',
        alias: 'PX-05',
        component: PX05
      },
      {
        path: 'px06',
        alias: 'PX-06',
        component: PX06
      },
      {
        path: 'px07',
        alias: 'PX-07',
        component: PX07
      },
      {
        path: 'px08',
        alias: 'PX-08',
        component: PX08
      },
      {
        path: 'px09',
        alias: 'PX-09',
        component: PX09
      },
      {
        path: 'px10',
        alias: 'PX-10',
        component: PX10
      },
      {
        path: 'px11',
        alias: 'PX-11',
        component: PX11
      },
      {
        path: 'px12',
        alias: 'PX-12',
        component: PX12
      },
      {
        path: 'px13',
        alias: 'PX-13',
        component: PX13
      },
      {
        path: 'px14',
        alias: 'PX-14',
        component: PX14
      },
      {
        path: 'px15',
        alias: 'PX-15',
        component: PX15
      },
      {
        path: 'px16',
        alias: 'PX-16',
        component: PX16
      },
      {
        path: 'px17',
        alias: 'PX-17',
        component: PX17
      },
      {
        path: 'px18',
        alias: 'PX-18',
        component: PX18
      },
      {
        path: 'px19',
        alias: 'PX-19',
        component: PX19
      },
      {
        path: 'px20',
        alias: 'PX-20',
        component: PX20
      },
      {
        path: 'px21',
        alias: 'PX-21',
        component: PX21
      },
      {
        path: 'px22',
        alias: 'PX-22',
        component: PX22
      },
      {
        path: 'px23',
        alias: 'PX-23',
        component: PX23
      },
      {
        path: 'px24',
        alias: 'PX-24',
        component: PX24
      },
      {
        path: 'px25',
        alias: 'PX-25',
        component: PX25
      },
      {
        path: 'px26',
        alias: 'PX-26',
        component: PX26
      },
      {
        path: 'px27',
        alias: 'PX-27',
        component: PX27
      },
      {
        path: 'px28',
        alias: 'PX-28',
        component: PX28
      },
      {
        path: 'px29',
        alias: 'PX-29',
        component: PX29
      },
      {
        path: 'px30',
        alias: 'PX-30',
        component: PX30
      },
      {
        path: 'px31',
        alias: 'PX-31',
        component: PX31
      },
      {
        path: 'px32',
        alias: 'PX-32',
        component: PX32
      },
      {
        path: 'px33',
        alias: 'PX-33',
        component: PX33
      },
      {
        path: 'px34',
        alias: 'PX-34',
        component: PX34
      },
      {
        path: 'px35',
        alias: 'PX-35',
        component: PX35
      },{
        path: 'px36',
        alias: 'PX-36',
        component: PX36
      },
      {
        path: 'px37',
        alias: 'PX-37',
        component: PX37
      },
      {
        path: 'px38',
        alias: 'PX-38',
        component: PX38
      },
      {
        path: 'px39',
        alias: 'PX-39',
        component: PX39
      },
      {
        path: 'px40',
        alias: 'PX-40',
        component: PX40
      },
      {
        path: 'px41',
        alias: 'PX-41',
        component: PX41
      },
      {
        path: 'px42',
        alias: 'PX-42',
        component: PX42
      },
      {
        path: 'px43',
        alias: 'PX-43',
        component: PX43
      },

      {
        path: 'px47',
        alias: 'PX-47',
        component: PX47
      },
      {
        path: 'px48',
        alias: 'PX-48',
        component: PX48
      },
      {
        path: 'px49',
        alias: 'PX-49',
        component: PX49
      },
      {
        path: 'px50',
        alias: 'PX-50',
        component: PX50
      },
      {
        path: 'px51',
        alias: 'PX-51',
        component: PX51
      },
      {
        path: 'px52',
        alias: 'PX-52',
        component: PX52
      },
      {
        path: 'px53',
        alias: 'PX-53',
        component: PX53
      },
      {
        path: 'px54',
        alias: 'PX-54',
        component: PX54
      },
      {
        path: 'px55',
        alias: 'PX-55',
        component: PX55
      },
      {
        path: 'px56',
        alias: 'PX-56',
        component: PX56
      },*/


    ]
  },

  {
    path:"/distribute",
    component:Distribute,
    meta:{
      title:"路由分发"
    }
  } ,


  {
    path: "/",
    alias: "login",
    component: Login,
    redirect:"/Login"
  },


  /*  {
      path: "/quality",
      component: Quality,
      children: [
        {
          path: "a01",
          alias: "/A-01",
          component: A01,
        }
      ],
      redirect: "/Quality/a01"
    },*/
  {
    path: "/thirdPartyLogin",
    meta: {
      title: '测试组件'
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
    path: "/record",
    meta: {
      title: "业务记录"
    },
    component: Record,
    children: [

      {
        path: "ctrlpointmonitor",
        component: ctrlPointMonitor
      },
      {
        path: 'InspectRecord',
        component: InspectRecord
      },
      {
        path: 'defaultPenalty',
        alas: "defaultPenalty",
        meta: {
          title: "工程惩罚信息"
        },
        component: penalty
      },
      {
        path: 'qualityImprove',
        component: qualityImprove
      },
      {
        path: 'verifyConsign',
        component: verifyConsign
      },

      /*{
        path:'a-01',
        component:A01

      },

      {
        path:'a-01',
        component:A01
      },
      {
        path:'a-16',
        alias:'/A-16',
        component:A16
      },
      {
        path:'a-28',
        alias:'/A-28',
        component:A28
      },*/
      /*{
        path:'k01',
        alias:"k-01",
        component:K01
      },
      {
        path:'k02',
        alias:"k-02",

        component:K02
      },
      {
        path:'k03',
        alias:"k-03",
        component:K03
      },*/
      /*{
        path:'k01',
        alias:"k-01",
        component:K01
      },
      {
        path:'k2',
        alias:"k-02",
        component:K2
      },
      {
        path:'k3',
        alias:"k-03",
        component:K3
      },*/

      /*{
        path:'klh01',
        component:KLH01
      },
      {
        path:'klh02',
        component:KLH02
      },
      {
        path:'klh03',
        component:KLH03
      },
      {
        path:'klh04',
        component:KLH04
      },
      {
        path:'klh05',
        component:KLH05
      },
      {
        path:'klh061',
        component:KLH061
      },
      {
        path:'klh062',
        component:KLH062
      },
      {
        path:'klh063',
        component:KLH063
      },
      {
        path:'klh064',
        component:KLH064
      },
      {
        path:'klh065',
        component:KLH065
      },
      {
        path:'klh066',
        component:KLH066
      },
      {
        path:'klh07',
        component:KLH07
      },
      {
        path:'klh08',
        component:KLH08
      },
      {
        path:'klh09',
        component:KLH09
      },
      {
        path:'klh10',
        component:KLH10
      },
      {
        path:'klh11',
        component:KLH11
      },
      {
        path:'klh12',
        component:KLH12
      },
      {
        path:'klh13',
        component:KLH13
      },
      {
        path:'klh14',
        component:KLH14
      },
      {
        path:'klh15',
        component:KLH15
      },
      {
        path:'klh16',
        component:KLH16
      },
      {
        path:'klh17',
        component:KLH17
      },
      {
        path:'klh18',
        component:KLH18
      },
      {
        path:'klh19',
        component:KLH19
      },
      {
        path:'klh201',
        component:KLH201
      },
      {
        path:'klh202',
        component:KLH202
      },
      {
        path:'klh203',
        component:KLH203
      },
      {
        path:'klh204',
        component:KLH204
      },
      {
        path:'klh211',
        component:KLH211
      },
      {
        path:'klh212',
        component:KLH212
      },
      {
        path:'klh213',
        component:KLH213
      },
      {
        path:'klh214',
        component:KLH214
      },
      {
        path:'klh221',
        component:KLH221
      },
      {
        path:'klh222',
        component:KLH222
      },
      {
        path:'klh223',
        component:KLH223
      },
      {
        path:'klh224',
        component:KLH224
      },
      {
        path:'klh231',
        component:KLH231
      },
      {
        path:'klh232',
        component:KLH232
      },
      {
        path:'klh233',
        component:KLH233
      },
      {
        path:'klh234',
        component:KLH234
      },
      {
        path:'klh241',
        component:KLH241
      },
      {
        path:'klh242',
        component:KLH242
      },
      {
        path:'klh243',
        component:KLH243
      },
      {
        path:'klh244',
        component:KLH244
      },
      {
        path:'klh251',
        component:KLH251
      },
      {
        path:'klh252',
        component:KLH252
      },
      {
        path:'klh253',
        component:KLH253
      },
      {
        path:'klh254',
        component:KLH254
      },

      {
        path:'klm01',
        component:KLM01
      },
      {
        path:'klm02',
        component:KLM02
      },
      {
        path:'klm03',
        component:KLM03
      },
      {
        path:'klm04',
        component:KLM04
      },
      {
        path:'klm05',
        component:KLM05
      },
      {
        path:'klm06',
        component:KLM06
      },
      {
        path:'klm07',
        component:KLM07
      },
      {
        path:'klm08',
        component:KLM08
      },
      {
        path:'klm09',
        component:KLM09
      },
      {
        path:'klm10',
        component:KLM10
      },

      {
        path:'kls01',
        component:KLS01
      },
      {
        path:'kls02',
        component:KLS02
      },
      {
        path:'kls03',
        component:KLS03
      },
      {
        path:'kls04',
        component:KLS04
      },
      {
        path:'kls05',
        component:KLS05
      },
      {
        path:'kls06',
        component:KLS06
      },
      {
        path:'kls07',
        component:KLS07
      },
      {
        path:'kls08',
        component:KLS08
      },
      {
        path:'kls09',
        component:KLS09
      },
      {
        path:'kls10',
        component:KLS10
      },
      {
        path:'kls11',
        component:KLS11
      },
      {
        path:'kls12',
        component:KLS12
      },

      {
        path:'kp01',
        component:KP01
      },
      {
        path:'kp02',
        component:KP02
      },
      {
        path:'kp03',
        component:KP03
      },
      {
        path:'kp04',
        component:KP04
      },
      {
        path:'kp05',
        component:KP05
      },
      {
        path:'kp06',
        component:KP06
      },
      {
        path:'kp07',
        component:KP07
      },

      {
        path:'kqh01',
        component:KQH01
      },
      {
        path:'kqh02',
        component:KQH02
      },
      {
        path:'kqh03',
        component:KQH03
      },
      {
        path:'kqh04',
        component:KQH04
      },
      {
        path:'kqh05',
        component:KQH05
      },
      {
        path:'kqh06',
        component:KQH06
      },
      {
        path:'kqh07',
        component:KQH07
      },
      {
        path:'kqh08',
        component:KQH08
      },
      {
        path:'kqh09',
        component:KQH09
      },
      {
        path:'kqh10',
        component:KQH10
      },
      {
        path:'kqh11',
        component:KQH11
      },
      {
        path:'kqh12',
        component:KQH12
      },
      {
        path:'kqh13',
        component:KQH13
      },
      {
        path:'kqh14',
        component:KQH14
      },
      {
        path:'kqh15',
        component:KQH15
      },
      {
        path:'kqh16',
        component:KQH16
      },
      {
        path:'kqh17',
        component:KQH17
      },
      {
        path:'kqh18',
        component:KQH18
      },
      {
        path:'kqh19',
        component:KQH19
      },
      {
        path:'kqh20',
        component:KQH20
      },
      {
        path:'kqh21',
        component:KQH21
      },
      {
        path:'kqh22',
        component:KQH22
      },
      {
        path:'kqh23',
        component:KQH23
      },
      {
        path:'kqh24',
        component:KQH24
      },
      {
        path:'kqh25',
        component:KQH25
      },
      {
        path:'kqh26',
        component:KQH26
      },
      {
        path:'kqh27',
        component:KQH27
      },
      {
        path:'kqh28',
        component:KQH28
      },
      {
        path:'kqh29',
        component:KQH29
      },
      {
        path:'kqh30',
        component:KQH30
      },
      {
        path:'kqh31',
        component:KQH31
      },
      {
        path:'kqh32',
        component:KQH32
      },
      {
        path:'kqh33',
        component:KQH33
      },
      {
        path:'kqh34',
        component:KQH34
      },
      {
        path:'kqh35',
        component:KQH35
      },
      {
        path:'kqh36',
        component:KQH36
      },
      {
        path:'kqh37',
        component:KQH37
      },
      {
        path:'kqh38',
        component:KQH38
      },
      {
        path:'kqh39',
        component:KQH39
      },
      {
        path: "kqh40",
        component: KQH40
      },
      {
        path: "kqh41",
        component: KQH41
      },
      {
        path: "kqh42",
        component: KQH42
      },
      {
        path: "kqh43",
        component: KQH43
      },
      {
        path: "kqh44",
        component: KQH44
      },
      {
        path: "kqh45",
        component: KQH45
      },
      {
        path: "kqh46",
        component: KQH46
      },
      {
        path: "kqh47",
        component: KQH47
      },
      {
        path: "kqh48",
        component: KQH48
      },
      {
        path: "kqh49",
        component: KQH49
      },
      {
        path: "kqh50",
        component: KQH50
      },
      {
        path: "kqh51",
        component: KQH51
      },
      {
        path: "kqh52",
        component: KQH52
      },

      {
        path: "kqh54",
        component: KQH54
      },
      {
        path: "kqh55",
        component: KQH55
      },
      {
        path: "kqh56",
        component: KQH56
      },
      {
        path: "kqh57",
        component: KQH57
      },
      {
        path: "kqh58",
        component: KQH58
      },
      {
        path: "kqh59",
        component: KQH59
      },
      {
        path: "kqh60",
        component: KQH60
      },
      {
        path: "kqh61",
        component: KQH61
      },
      {
        path: "kqh62",
        component: KQH62
      },
      {
        path: "kqh63",
        component: KQH63
      },
      {
        path: "kqh64",
        component: KQH64
      },
      {
        path: "kqh65",
        component: KQH65
      },
      {
        path: "kqh66",
        component: KQH66
      },
      {
        path: "kqh67",
        component: KQH67
      },
      {
        path: "kqh68",
        component: KQH68
      },
      {
        path: "kqh69",
        component: KQH69
      },
      {
        path: "kqh70",
        component: KQH70
      },
      {
        path: "kqh71",
        component: KQH71
      },
      {
        path: "kqh72",
        component: KQH72
      },
      {
        path: "kqh73",
        component: KQH73
      },
      {
        path: "kqh74",
        component: KQH74
      },
      {
        path: "kqh75",
        component: KQH75
      },
      {
        path: "kqh76",
        component: KQH76
      },
      {
        path: "kqh77",
        component: KQH77
      },
      {
        path: "kqh78",
        component: KQH78
      },
      {
        path: "kqh79",
        component: KQH79
      },
      {
        path: "kqh80",
        component: KQH80
      },
      {
        path: "kqh81",
        component: KQH81
      },
      {
        path: "kqh82",
        component: KQH82
      },
      {
        path: "kqh84",
        component: KQH84
      },
      {
        path:'kqh85',
        component:KQH85
      },
      {
        path:'kqh86',
        component:KQH86
      },
      {
        path:'kqh87',
        component:KQH87
      },
      {
        path: "kqh88",
        component: KQH88
      },
      {
        path:'kqh89',
        component:KQH89
      },*/

      /*{
        path:'ksd01',
        component:KSD01
      },
      {
        path:'ksd02',
        component:KSD02
      },
      {
        path:'ksd03',
        component:KSD03
      },
      {
        path:'ksd04',
        component:KSD04
      },
      {
        path:'ksd05',
        component:KSD05
      },
      {
        path:'ksd06',
        component:KSD06
      },
      {
        path:'ksd07',
        component:KSD07
      },
      {
        path:'ksd08',
        component:KSD08
      },
      {
        path:'ksd09',
        component:KSD09
      },
      {
        path:'ksd10',
        component:KSD10
      },
      {
        path:'ksd11',
        component:KSD11
      },
      {
        path:'ksd12',
        component:KSD12
      },
      {
        path:'ksd13',
        component:KSD13
      },
      {
        path:'ksd14',
        component:KSD14
      },
      {
        path:'ksd15',
        component:KSD15
      },
      {
        path:'ksd16',
        component:KSD16
      },
      {
        path:'ksd17',
        component:KSD17
      },
      {
        path:'ksd18',
        component:KSD18
      },
      {
        path:'ksd19',
        component:KSD19
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
        path:'kxsq01',
        component:KXSQ01
      },
      {
        path:'kxsq02',
        component:KXSQ02
      },
      {
        path:'kxsq03',
        component:KXSQ03
      },
      {
        path:'kxsq04',
        component:KXSQ04
      },
      {
        path:'kxsq05',
        component:KXSQ05
      },
      {
        path:'kxsq06',
        component:KXSQ06
      },
      {
        path:'kxsq07',
        component:KXSQ07
      },
      {
        path:'kxsq08',
        component:KXSQ08
      },
      {
        path:'kxsq09',
        component:KXSQ09
      },
      {
        path:'kxsq10',
        component:KXSQ10
      },
      {
        path:'kxsq11',
        component:KXSQ11
      },
      {
        path:'kxsq12',
        component:KXSQ12
      },
      {
        path:'kxsq13',
        component:KXSQ13
      },
      {
        path:'kxsq14',
        component:KXSQ14
      },
      {
        path:'kxsq15',
        component:KXSQ15
      },
      {
        path:'kxsq16',
        component:KXSQ16
      },
      {
        path:'kxsq17',
        component:KXSQ17
      },
      {
        path:'kxsq18',
        component:KXSQ18
      },
      {
        path:'kxsq19',
        component:KXSQ19
      },
      {
        path:'kxsq20',
        component:KXSQ20
      },
      {
        path:'kxsq21',
        component:KXSQ21
      },*/
    ]
  },


  /*  {
      path: "/D02",
      component: D02,
      meta: {
        title: "D-02页面"
      }
    },
    {
      path: "/D21",
      component: D21,
      meta: {
        title: "D-21页面"
      }
    },*/


  /*  {
      path: "/Quality",
      component: Quality,
      redirect:"/Quality/A",
      children: [
        {
          path: "d",
          component: D,
          children: [


          ]
        }
      ],
      meta: {
        title: "首页"
      }
    },*/
  {
    path: "/error",
    alias: "error",
    component: Error,
    meta: {
      title: "404页面"
    }
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
  routes: routes,            //添加根目录
  scrollBehavior: () => ({y: 0}),
  /* 在打包时如果需要在本地查看则需要更改资源路径*/
  /*  mode: 'history'*/
});
window.sessionStorage.setItem("routers", JSON.stringify(routes));
//在页面刷新时将vuex里的信息保存到localStorage里
window.addEventListener("beforeunload", () => {
  store.commit("setProcedureControl",[])
  sessionStorage.setItem("messageStore", JSON.stringify(store.state))
})
//在页面加载时读取localStorage里的状态信息
sessionStorage.getItem("messageStore") &&
store.replaceState(Object.assign(
  store.state, JSON.parse(
    sessionStorage.getItem("messageStore"))));


// 导航守卫

/**
 * 方法描述: 进入组件后
 * @method beforeEach
 * @param {Route} to 即将要进入的目标 路由对象
 * @param {Route} from 当前导航正要离开的路由
 * @param {Route}  next 同意进入下一页面
 * @return {无}
 */
router.afterEach((to, from, next) => {

})



/**
 * 方法描述: 进入组件前
 * @method beforeEach
 * @param {Route} to 即将要进入的目标 路由对象
 * @param {Route} from 当前导航正要离开的路由
 * @param {Route}  next 同意进入下一页面
 * @return {无}
 */
router.beforeEach((to, from, next) => {
  next();
})
