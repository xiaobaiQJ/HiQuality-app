export default {
  init: function () {
    const AK = '9qqypF0AVEV3ekMN0UFTaIDLYkslzhdZ'
    const BMapURL = 'https://api.map.baidu.com/api?v=3.0&ak=' + AK + '&s=1&callback=onBMapCallback'
    return new Promise((resolve, reject) => {
    // 如果已加载直接返回
/*     if (typeof BMap !== 'undefined') {
       resolve(BMap)
       return true
     }*/
// 百度地图异步加载回调处理
      window.onBMapCallback = function () {
        console.log('百度地图脚本初始化成功...')
// eslint-disable-next-line
        resolve(BMap)
      }
    })
  }
}
