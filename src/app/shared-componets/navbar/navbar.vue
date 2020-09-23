<template>
    <a-layout>
        <a-layout-sider v-if="user.loggedIn" :collapsed="collapsedBool">
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="inline"
            >
              <a-sub-menu :title="collapsedBool ? 'sbn1' : 'nav 1'" >
                <a-menu-item> subnav 1 - item - 1 </a-menu-item>
                <a-menu-item> subnav 1 - item - 2 </a-menu-item>
                <a-menu-item> subnav 1 - item - 3 </a-menu-item>
              </a-sub-menu>
              <a-sub-menu :title="collapsedBool ? 'sbn2' : 'nav 2'">
                <a-menu-item> subnav 2 - item - 1 </a-menu-item>
                <a-menu-item> subnav 2 - item - 2 </a-menu-item>
                <a-menu-item> subnav 2 - item - 3 </a-menu-item>
              </a-sub-menu>
              <a-sub-menu :title="collapsedBool ? 'sbn3' : 'nav 2'">
                <a-menu-item> subnav 3 - item - 1 </a-menu-item>
                <a-menu-item> subnav 3 - item - 2 </a-menu-item>
                <a-menu-item> subnav 3 - item - 3 </a-menu-item>
              </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout class="site-layout">
            <a-layout-header v-if="user.loggedIn" class="site-layout-background trigger">
                <a-button @click="collapsedBool = !collapsedBool"><a-icon :type="collapsedBool ? 'menu-unfold' : 'menu-fold'" /></a-button>
                <a-button @click="logoutApp()"><a-icon type="logout" /></a-button>
            </a-layout-header>
            <a-layout-content class="site-layout-background" :style="user.loggedIn ? 'margin: 24px 16px; padding: 24px; minHeight: 280px' : ''">
                <router-view/>
            </a-layout-content>
            </a-layout>        
    </a-layout>
</template>

<script>
//Store
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Navbar',
    data: () => ({
        collapsedBool: false
    }),
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters('authenticateStore', {
                    user: "user"
                }
            ),
        },
    methods: {
        ...mapActions('authenticateStore', ['fetchUser']),
        logoutApp() {            
            this.fetchUser(null)
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.logo {
    height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>