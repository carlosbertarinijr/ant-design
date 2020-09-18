import router from "@/router/index";

export default {
    namespaced: true,
    state: {
        currentUser: {},
        token: null
    },
    mutations: {
        set_currentUser(state, passedCurrentUser) {
            if( passedCurrentUser ) {
                state.token = passedCurrentUser.id
                state.currentUser = passedCurrentUser
            }
        },
        update_current_user_name(state, newCurrentUserName) {
            if(newCurrentUserName) {
                state.currentUser.companyName = newCurrentUserName
            }
        },
        update_current_user_image(state, newCurrentUserImage) {
            if(newCurrentUserImage) {
                state.currentUser.companyImage = newCurrentUserImage
            }
        },
        remove_currentUser(state) {
            state.currentUser = {}
            state.token = null
        },
        logout() {
            router.push({ path: '/login' })
        }
    },
    actions: {
        TO_LOG({commit}, passedCurrentUser) {
            commit('set_currentUser', passedCurrentUser)
        },
        LOGOUT({commit}) {
            commit('remove_currentUser')
            commit('logout')
        },
        UPDATE_CURRENT_USER_NAME({commit}, newCurrentUserName) {
            commit('update_current_user_name', newCurrentUserName)
        },
        UPDATE_CURRENT_USER_IMAGE({commit}, newCurrentUserImage) {
            commit('update_current_user_image', newCurrentUserImage)
        },
        REMOVE_CURRENT_USER({commit}) {
            commit('remove_currentUser')
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        getCurrentUser: state => state.currentUser,
        isRegistered: state => !!(state.token && state.currentUser.companyId != null )
    }
}