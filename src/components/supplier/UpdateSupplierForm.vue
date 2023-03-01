<template>
  <div class="card my-4">
    <div class="card-header p-0 position-relative mt-n4 mx-1 z-index-2 justify-content-between align-items-center">
      <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
        <h6 class="text-white ps-3">Update Supplier</h6>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent="updateSupplier" class="p-3">
        <div class="form-group mb-2">
          <label for="namaSupplier">Nama Supplier</label>
          <input type="text" class="form-control" id="namaSupplier" v-model="supplier.namaSupplier">
        </div>
        <div class="form-group mb-2">
          <label for="alamat">Alamat Supplier</label>
          <input type="text" class="form-control" id="alamat" v-model="supplier.alamat">
        </div>
        <div class="form-group mb-5">
          <label for="noTelp">No Telp Supplier</label>
          <input type="text" class="form-control" id="noTelp" v-model="supplier.noTelp">
        </div>
        <div class="d-flex justify-content-between">
          <router-link :to="{ name: 'Dashboard' }" class="btn btn-secondary">Kembali</router-link>
          <button type="submit" class="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      supplier: {
        namaSupplier: '',
        alamat: '',
        noTelp: '',
      },
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    };
  },
  async created() {
      try {
        await this.getSupplier();
      } catch (error) {
        console.error(error);
      }
  },
  methods: {
    async getSupplier() {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${this.baseUrl}/supplier/find-by-id/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.supplier = response.data.data;
      console.log(this.supplier)
    },

    async updateSupplier() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.put(`${this.baseUrl}/supplier/update/${this.$route.params.id}`, this.supplier, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        console.log(this.supplier)
        this.$router.push('/dashboard');
      } catch (error) {
        console.error(error); 
      }
    },
  },
};
</script>