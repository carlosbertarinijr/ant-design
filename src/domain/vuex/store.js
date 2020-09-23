import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

//Plugins
import createPersistedState from "vuex-persistedstate";

//Modules
import authenticateStore from "./modules/authenticate-store";

export default new Vuex.Store( {
    plugins: [
        createPersistedState( {
                paths: [
                    'authenticateStore',
                ]
            }
        )
    ],
    modules: {
        authenticateStore,
    },
    mutations: {
    },
    actions: {
    }
})