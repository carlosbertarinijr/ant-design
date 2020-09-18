export default {
    namespaced: true,
    state: {
        actualRoute: null,
        previousRoute: null
    },
    mutations: {
        set_actualRoute(state, actualRoute) {
            if( actualRoute ) {
                if( state.actualRoute == null ) state.previousRoute = actualRoute
                else if(state.actualRoute != state.previousRoute) state.previousRoute = state.actualRoute
                state.actualRoute = actualRoute
            }
        },
        set_previousRoute(state, previousRoute) {
            if( previousRoute ) {
                state.previousRoute = previousRoute
            }
        },
        return_to_previous_route(state) {
            if(state.previousRoute != null && state.previousRoute != state.actualRoute) this.$router.push({path: `/${state.previousRoute}`})
        }
    },
    actions: {
        SET_ACTUAL_ROUTE({commit}, actualRoute) {
            commit('set_actualRoute', actualRoute)
        },
        SET_PREVIOUS_ROUTE({commit}, previousRoute) {
            commit('set_previousRoute', previousRoute)
        },
        RETURN_TO_PREVIOUS_ROUTE({commit}) {
            commit('return_to_previous_route')
        }
    },
    getters: {
        get_actualRoute: state => state.actualRoute,
        get_previousRoute: state => state.previousRoute
    }
}