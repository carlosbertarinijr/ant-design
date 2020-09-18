//-Sem autenticação
import LoginView from '@/views/Login-view'

export const routes = [
    { path: '/login', component: LoginView, meta: { requiresAuth: false } }
]