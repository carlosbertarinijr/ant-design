import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';

Vue.config.productionTip = false
Vue.use(DatePicker);

new Vue({
  render: h => h(App),
}).$mount('#app')
