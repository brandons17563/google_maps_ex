import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import mapUI from '@/mapUI.js'

Vue.prototype.mapUI = mapUI
Vue.mapUI = mapUI

Vue.use(mapUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
