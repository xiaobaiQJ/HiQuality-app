import {router} from '../../router/devRouter'
import {store} from '../../store/store'

export default {

  //跳转到工序
  skipProcess() {
    router.go(-1)
    /*switch (store.state.moduleType) {
      case 1:
        router.push({
          path:"/procedure_control/process_list/index",
          query:{
            id:store.state.projPartsId
          }
        })
        break;
      case 2:
        router.push('/businessRec')
        break;
      case 3:
        router.push('/mission')
        break;
      case 4:
        router.push('/procedure_control/index')
        break;
    }*/

  }

}
