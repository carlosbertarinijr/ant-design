<template>
    <a-layout>
        <a-layout-sider v-if="user.loggedIn"></a-layout-sider>
        <a-layout-header v-if="user.loggedIn"></a-layout-header>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script>
//Store
import { mapGetters } from "vuex";

export default {
    name: 'Navbar',
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters('authenticateStore', {
      user: "user"
      }
    )
  },
}
</script>

<style scoped>

</style>