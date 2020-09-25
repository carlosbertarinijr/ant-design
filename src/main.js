import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase";

Vue.config.productionTip = false;

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "@/domain/vuex/store";

//Rota:
import router from '@/router/index.js'

const configOptions = {
  apiKey: "AIzaSyAS5OhJf8tsjFVvqaDLLW4gq6OapYN-j-M",
    authDomain: "ant-design-1.firebaseapp.com",
    databaseURL: "https://ant-design-1.firebaseio.com",
    projectId: "ant-design-1",
    storageBucket: "ant-design-1.appspot.com",
    messagingSenderId: "1031809390969",
    appId: "1:1031809390969:web:839be0829c68b77e8f37a8"
};

firebase.initializeApp(configOptions);

firebase
  .auth()
  .onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.config.productionTip = false

Vue.use(Antd);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

