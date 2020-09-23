<template>
  <a-row class="arow--center">
    <a-col :span="6">
      <a-form layout="vertical" >
        <a-form-item label="Nome" v-if="controlRegister">
          <a-input 
            v-model="name"
            placeholder="user"
            label
          />
        </a-form-item>
        <a-form-item label="Email">
          <a-input 
            v-model="email"
            placeholder="email@email.com"
            label
          />
        </a-form-item>
        <a-form-item label="Senha">
          <a-input
            v-model="password"
            type="password"
            placeholder="password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="submit()" :loading="loadingSend">
            {{controlRegister ? 'Salvar' : 'Entrar'}}
          </a-button>
          <a-button type="default" html-type="submit" style="margin-left: 10px" @click="startRegister()" v-if="!controlRegister">
            Registrar
          </a-button>
          <a-button type="default" html-type="submit" style="margin-left: 10px" @click="backToLogin()" v-if="controlRegister">
            Voltar
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
//FireBase
import firebase from "firebase";

//Store
import { mapActions } from "vuex";

export default {
    name: 'login',
    data: () => ({
      email: null,
      password: null,
      name: '',
      //Control
      controlRegister: false,
      loadingSend: false
    }),
    created() {
      this.fetchUser(null)
    },
    methods: {
      ...mapActions('authenticateStore', ['fetchUser']),
      submit() {
        if(this.controlRegister && this.hasEntriesValid()) { //registrar
          this.loadingSend = true
          firebase
          .auth()            
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(data => {              
              data.user
              .updateProfile({ //seta displayname no back
                displayName: this.name
              })
              .then(() => {
                this.controlRegister = false
                this.email = null
                this.password  = null
                this.name = null
                this.loadingSend = false
              });
            })
            .catch(err => {
              this.loadingSend = false
              this.error = err.message;
            });
        }else { //Logar
          this.loadingSend = true
          firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.loadingSend = false
            this.fetchUser(data.user)            
            this.$router.push('/inicio')            
          })
          .catch(err => {
            this.error = err.message;
            this.loadingSend = false
          });
        }
      },
      startRegister() {
        this.controlRegister = true
        this.email = null
        this.password  = null
        this.name = null
      },
      hasEntriesValid() {
        if(this.name == '' || this.name == null) {
          return false
        } else if(this.email == '' || this.email == null)  {
          return false
        } else if( this.password == '' || this.password == null) {
          return false
        } else if (this.password !== '' || this.password !== null ) {
          if(this.password.length < 4) {
            return false 
          }else return true
        }

      },
      backToLogin() {
        this.controlRegister = false
        this.email = null
        this.password  = null
        this.name = null
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