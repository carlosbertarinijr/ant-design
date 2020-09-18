import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

//Plugins
import createPersistedState from "vuex-persistedstate";

//Modules
import authenticateStore from "./modules/authenticate-store";
import routeStore from "./modules/route-store";

export default new Vuex.Store( {
    plugins: [createPersistedState( {
                paths: [
                    'authenticateStore',
                    'routeStore',
                ]
            }
        )
    ],
    modules: {
        authenticateStore,
        routeStore
    },
    mutations: {
    },
    actions: {
    }
})