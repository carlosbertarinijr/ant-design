//-com autenticação
import DashboradOneview from "@/views/dashboard-one-view"

//-Sem autenticação
import LoginView from '@/views/Login-view'

export const routes = [
    { path: '/login', component: LoginView, meta: { requiresAuth: false } },
    { path: '/inicio', component: DashboradOneview, meta: { requiresAuth: true } }
]