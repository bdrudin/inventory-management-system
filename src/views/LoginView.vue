<template>
  <main class="main-content">
    <div class="page-header align-items-start min-vh-100" :style="{'background-image': `url(${imageUrl})`}">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <Heading />
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Login</h4>
                </div>
              </div>
              <div class="card-body">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Heading from '@/components/Heading.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    Heading,
    LoginForm,
  },
  data() {
    return {
      imageUrl: import.meta.env.VITE_APP_BASE_IMAGE_URL
    }
  },
}
</script>