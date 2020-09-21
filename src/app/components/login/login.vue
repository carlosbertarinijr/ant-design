<template>
  <a-row class="arow--center">
    <a-col :span="6">
      <a-form layout="vertical" >
        <a-form-item label="Usuário">
          <a-input 
            v-model="userName"
            placeholder="admin"
            label
          />
        </a-form-item>
        <a-form-item label="Senha">
          <a-input
            v-model="password"
            type="password"
            placeholder="admin"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="submit()">
            Entrar
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
//Store
import { mapActions } from "vuex";

export default {
    name: 'login',
    data: () => ({
      userName: null,
      password: null,      
    }),
    methods: {
      ...mapActions('authenticateStore', ['TO_LOG']),
      submit() {
        const authenticateStore = {
          id: 1,
          name: 'Admin',
          lastName: '',
        }
        if(this.userName == 'admin' && this.password == 'admin') {
          this.TO_LOG(authenticateStore)
          this.$router.push('/inicio')
        }
      }
    }
}
</script>

<style scoped>
.arow--center {
  height: 100vh;
  display: flex !important;
  flex: auto !important;
  align-items: center;
  justify-content: center;
}
</style>