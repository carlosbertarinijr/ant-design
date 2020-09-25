<template>
    <a-layout>
        <a-layout-sider v-if="user.loggedIn" :collapsed="collapsedBool" class="layout-sider__div--color">
            <div class="layout-sider__div--color" :class="!collapsedBool ? 'layout-sider__div--box_before' : 'layout-sider__div--box_after'">
                <div class="logo" >
                    <img src="@/assets/logo-white.png" class="img">                    
                </div>
                <span>
                    <img  src="@/assets/profile_small.jpg" class="img_profile rounded-circle"/>
                </span>
                <a-dropdown class="font">
                    <span class="font">{{user.data.displayName}}</span>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <a-icon type="form" />
                            <span>Editar meus dados</span>
                        </a-menu-item>
                        <a-menu-item @click="logoutApp()">
                            <a-icon type="logout" />
                            <span>Log out</span>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
                <span class="font--charge">Supervisor</span>                
            </div>                        
            <a-menu
                class="amenu"
                mode="inline"
            >
              <a-sub-menu icon="pie-chart" key="sub1" style="padding-right: 1px !important!">
                <span slot="title">
                    <a-icon type="pie-chart" />
                    <span class="fs--12">Gráficos</span>
                </span>
                
                <a-menu-item class="fs--12"> Acompanhamento dos indicadores </a-menu-item>
                <a-menu-item class="fs--12"> Visão comparativa ano a ano </a-menu-item>
                <a-menu-item class="fs--12"> Classificação das vendas por produtos ABC </a-menu-item>
                <a-menu-item class="fs--12"> Visão de vendas por tipologia </a-menu-item>
              </a-sub-menu>
              <a-menu-item>
                  <a-icon type="picture" />
                  <span class="fs--12">Campanhas de vendas</span>
              </a-menu-item>
              <a-menu-item>
                  <a-icon type="user" />
                  <span class="fs--12">Clientes inadimplentes</span>
              </a-menu-item>
              <a-menu-item>
                  <a-icon type="message" />
                  <span class="fs--12">Comunicados</span>
              </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout class="site-layout">
            <a-layout-header v-if="user.loggedIn" class="site-layout-background trigger">
                <a-button @click="collapsedBool = !collapsedBool"><a-icon :type="collapsedBool ? 'menu-unfold' : 'menu-fold'" /></a-button>
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
.img {
    width: 100%
}
.layout-sider__div--box_before {
    padding: 33px 22px 14px 22px;
}
.layout-sider__div--box_after {
    padding: 33px 6px 14px 6px;
}
.layout-sider__div--color {
    background: #193863;
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: center;
}
.img_profile {
    margin-top: 40px;
    margin-bottom: 10px;

}
.rounded-circle {
    border-radius: 50%!important;
}
.amenu {
    background: #193863;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;    
}
.font {
    color: white;
    font-weight: 500;
    letter-spacing: 1px; 
}
.fs--12 {
    font-size: 12px !important;
}
.font--charge {
    color: #808087;
    font-weight: 500;
    letter-spacing: 1px;
}
::v-deep .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: none;
}
::v-deep .ant-menu-item-selected {
    color: white;
}
::v-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #1D3E73;
}
::v-deep .ant-menu-submenu > .ant-menu {
    color: white;
    background-color: #1D3E73 !important;
}
</style>