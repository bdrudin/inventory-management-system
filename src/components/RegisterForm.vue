<template>
  <div class="card-body">
    <form role="form" class="text-start" @submit.prevent="submitForm">
      <div class="input-group input-group-outline my-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" v-model="username">
      </div>
      <div class="input-group input-group-outline my-3">
        <label class="form-label">Profile Name</label>
        <input type="text" class="form-control" v-model="profileName">
      </div>
      <div class="input-group input-group-outline my-3 mb-1">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary w-100 my-3 mb-3">Daftar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      profileName: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password: this.password,
        profileName: this.profileName,
      };
      this.$emit('register', formData);
    },
  }
}
</script>
