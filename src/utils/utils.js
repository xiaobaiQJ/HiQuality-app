/*/!*设备宽度*!/
const deviceW = document.body.clientHeight;*/
/*设备高度*/
const deviceH =()=>{
  return document.documentElement.clientHeight
}
const isNull = (val)=>{
  if (val == null || val == undefined || val == "") {
    return 0
  }
  return val
}

//获取当前日期
const  getNowFormatDate = ()=>{
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  let currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
const getCurrentDate = ()=>{
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month +     seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes()+ seperator2 + date.getSeconds();
  return currentdate;
}
//获取当前日期的上一天
const GetPrevDay = (str)=>{
  var year = str.substring(0,4);
  var month = str.substring(5,7);
  var day = str.substring(8,10);
  var today=new Date(year, month-1 ,day);
  var yesterday_milliseconds=today.getTime()-1000*60*60*24;
  var yesterday=new Date();
  yesterday.setTime(yesterday_milliseconds);
  var strYear=yesterday.getFullYear();
  var strDay=yesterday.getDate();
  var strMonth=yesterday.getMonth()+1;
  if(strMonth<10) {
    strMonth="0"+strMonth;
  }
  if(strDay<10) {
    strDay="0"+strDay;
  }
  return strYear+"-"+strMonth+"-"+strDay+" 00:00:00";
}
/*转换时间戳格式*/
const formDate = (val)=>{
  if (val == null || val == undefined) {
    return ""
  }
  console.log(val)
  let date ;
  if(val.length>10){
    date = new Date((val/1000));
  }else{
    date = new Date(val);
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  return year + '-' + month + '-' + day;
}
//拆分日期(年月日或是时分)
const splitDate =(date,fh)=>{
  let arr = []
  if(date==null||date==''){
    return ''
  }
  arr = date.split(fh)
  return arr
}
//拼接日期(年月日或是时分)
const joinDate =(dateArr,fh)=>{
  let date = ''
  date = dateArr.join(fh)
  return date;
}
//数据上移、下移、置顶、置底操作
var swapItems = function(arr, index1, index2,direction) {
  if(direction== 'up'){//置顶
    arr.unshift(arr[index1]);
    arr.splice(index1+1,1);
    return arr;
  }
  if(direction== 'down'){//置底
    arr.push(arr[index1]);
    arr.splice(index1,1);
    return arr;
  }
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

export {
  deviceH,
  swapItems,
  isNull,
  formDate,
  getNowFormatDate,
  GetPrevDay,
  getCurrentDate,
  splitDate,
  joinDate
};




