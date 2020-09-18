import Vue from 'vue'
import store from "@/domain/vuex/store";
import Router from 'vue-router'
import { routes } from '@/router/routes'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes
})

//Controle geral das rotas e autenticação
router.beforeEach((to, from, next) => {
  store.commit('routeStore/set_actualRoute',to.path.substring(1))
  
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //eslint-disable-next-line
    if( !!store.state.authenticateStore.token ) {
      next()

    } else next('/login')

  } else {
    if( to.meta.independent ) { //Se for uma rota que independente, poderá ser acessada tanto com o usuário logado quanto deslogado
      next()

    } else {
      //eslint-disable-next-line
      if(to.path == '/login' && !!store.state.authenticateStore.token) {
        next('/inicio')
        
      } else {
        next()
      }
    }
  }
}

);

export default router