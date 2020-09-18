<template>
  <a-row class="arow--center">
    <a-col :span="6">
      <a-form layout="vertical" >
        <a-form-item>
          <a-input 
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: 'Please input your username!' }] },
            ]"
            placeholder="Username"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
export default {
    name: 'login',
    data: () => ({

    }),
    methods: {
      
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