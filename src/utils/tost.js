import {Message} from 'element-ui';

export default  {
  essential(){
    Message({
      showClose: true,
      message: '质量等级必填！',
      type: 'success'
    });
  },
  print(message,type){
    Message({
      showClose: true,
      message: message ,
      type: type==undefined ? 'success' : type
    });
  },

  edit(){
    Message({
      showClose: true,
      message: '修改成功！',
      type: 'success'
    });
  },

  add(){
    Message({
      showClose: true,
      message: '保存成功！',
      type: 'success'
    });
  },

  message(state, isDel) {
    switch (state) {
      case 'edit':
        Message({
          showClose: true,
          message: '修改成功！',
          type: 'success'
        });
        break;
      case 'add':
        Message({
          showClose: true,
          message: '新增成功！',
          type: 'success'
        });
        break;
      case 'del':
        Message({
          showClose: true,
          message: '删除成功！',
          type: 'success'
        });
        break;
      case 'save':
        Message({
          showClose: true,
          message: '保存成功！',
          type: 'success'
        });
        break;
    }

  }


}




