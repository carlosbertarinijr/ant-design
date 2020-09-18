import Vue from 'vue'
import App from './App.vue'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "@/domain/vuex/store";

//Rota:
import router from '@/router/index.js'


Vue.config.productionTip = false

Vue.use(Antd);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

