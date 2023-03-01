<template>
  <form class="text-start" @submit.prevent="handleSubmit">
    <div class="input-group input-group-outline my-3">
      <label class="form-label">Username</label>
      <input type="text" class="form-control" v-model="username" required>
    </div>
    <div class="input-group input-group-outline mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="password" required>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary w-100 my-4 mb-2">Masuk</button>
    </div>
    <p class="mt-4 text-sm text-center">
      Belum punya akun? <span class="text-primary font-weight-bold"><router-link to="/register">Daftar disini</router-link></span>
    </p>
    <div v-if="showSuccessAlert" class="position-relative mt-n4 mx-3 alert alert-success alert-dismissible text-white" role="alert">
      <span class="text-sm">{{ successMessage }}</span>
      <button type="button" class="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-else-if="showErrorAlert" class="position-relative mt-n4 mx-3 alert alert-danger alert-dismissible text-white" role="alert">
      <span class="text-sm">{{ errorMessage }}<br> Silahkan masukan username dan password yang benar!</span>
      <button type="button" class="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      showSuccessAlert: false,
      showErrorAlert: false,
      errorMessage: '',
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    }
  },
  methods: {
    ...mapMutations(['setToken', 'login']),
    async handleSubmit() {
      const credentials = {
        username: this.username,
        password: this.password,
      }
      try {
        const response = await axios.post(`${this.baseUrl}/auth/login`, credentials);
        if(response.data.message === "LOGIN SUCCESS"){
          this.successMessage = response.data.message;
          this.showSuccessAlert = true;
          this.showErrorAlert = false;
          this.username = '';
          this.password = '';
          this.setToken(response.data.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.data.username));
          this.login(response.data.data.username);
          this.$router.push('/dashboard');
        }else{
          this.errorMessage = response.data.message;
          this.showSuccessAlert = false;
          this.showErrorAlert = true;
        }        
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>
