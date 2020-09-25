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
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //eslint-disable-next-line
    if( store.state.authenticateStore.user.loggedIn ) {
      next()

    } else next('/login')

  } else {
    if( to.meta.independent ) { //Se for uma rota que independente, poderá ser acessada tanto com o usuário logado quanto deslogado
      next()

    } else {
      //eslint-disable-next-line
      if(to.path == '/login' && store.state.authenticateStore.user.loggedIn) {
        next('/inicio')
        
      } else {
        next()
      }
    }
  }
}

);

export default router