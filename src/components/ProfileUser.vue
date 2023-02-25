<template>
  <div class="text-center">{{ profile.profileName }}</div>

  <div class="d-flex align-items-center p-1 justify-content-center">
    <div class="mx-1">{{ isOnline ? 'Online' : 'Offline' }}</div>
    <div :class="{'bg-success': isOnline, 'bg-danger': !isOnline}" class="rounded-circle me-2" style="width: 10px; height: 10px;"></div>
  </div>
    <div v-if="profile">
      <div>Username: {{ profile.username }}</div>
      <div>Tanggal: {{ date }}</div>
      <div>Waktu: {{ time }}</div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['token', 'user']),

    date() {
      const now = new Date();
      return now.toLocaleDateString();
    },

    time() {
      const now = new Date();
      return now.toLocaleTimeString();
    },

    user() {
      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString);
      return user;
    },
  },

  data() {
    return {
      profile: {},
    }
  },

  created() {
    this.getProfileByUsername();
  },

  methods: {
    async getProfileByUsername() {
      try {
        const response = await axios.get(`http://159.223.57.121:8090/users/find-by-username?username=${this.user}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.profile = response.data.data;
        this.isOnline = true
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
