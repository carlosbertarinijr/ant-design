import HelloWorld from './components/HelloWorld.vue'


export const routes = [
    { path: '/incio', component:HelloWorld,  meta: { requiresAuth: false } }
  ]