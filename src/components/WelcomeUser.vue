<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-lg border-0 rounded-lg">
          <div class="card-header">
            <h3 class="text-center font-weight-light my-4">Welcome {{profile.profileName}}</h3>
          </div>
          <div class="card-body">
            <p class="text-center font-weight-light">You have successfully logged in to the dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    
  name: 'Welcome',
  computed: {
    ...mapState(['token', 'user']),

    user() {
      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString);
      return user;
    },
  },
  data() {
    return {
      profile: {},
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    }
  },
  created() {
    this.getProfileByUsername();
  },
  methods: {
    async getProfileByUsername() {
      try {
        const response = await axios.get(`${this.baseUrl}/users/find-by-username?username=${this.user}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.profile = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>
 