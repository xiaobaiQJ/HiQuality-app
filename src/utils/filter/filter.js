import Vue from 'vue'


Vue.filter('isNull', (val) => {
  if (val == null || val == undefined || val == "") {
    return 0
  }
  return val
})

