<template>
  <main class="main-content">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <Heading />
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Register</h4>
                </div>
              </div>
              <RegisterForm @register="registerUser"/>
              <p class="mt-4 text-sm text-center">
                Sudah punya akun? <span class="text-primary font-weight-bold"><router-link to="/login">Masuk</router-link></span>
              </p>
              <div v-if="showSuccessAlert" class="position-relative mt-n4 mx-3 alert alert-success alert-dismissible text-white" role="alert">
                <span class="text-sm">{{ successMessage }} <br> Silahkan login dengan username dan password yang telah terdaftar.</span>
                <button type="button" class="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div v-else-if="showErrorAlert" class="position-relative mt-n4 mx-3 alert alert-danger alert-dismissible text-white" role="alert">
                <span class="text-sm">{{ errorMessage }}<br> Silahkan masukan username yang belum terdaftar!</span>
                <button type="button" class="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Heading from '@/components/Heading.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  components: {
    Heading,
    RegisterForm,
  },
  data() {
    return {
      showSuccessAlert: false,
      showErrorAlert: false,
      errorMessage: '',
    };
  },
  methods: {
    async registerUser(formData) {
      try {
        const response = await axios.post('http://159.223.57.121:8090/auth/register', formData);
        if(response.data.message === "REGISTER SUCCESSFUL"){
          this.successMessage = response.data.message;
          this.showSuccessAlert = true;
          this.showErrorAlert = false;
          this.profilName = '';
          this.username = '';
          this.password = '';
        }else{
          this.errorMessage = response.data.message;
          this.showSuccessAlert = false;
          this.showErrorAlert = true;
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
}
</script>
