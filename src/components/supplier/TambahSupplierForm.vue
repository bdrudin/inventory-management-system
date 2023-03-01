<template>
  <div class="card my-4">
    <div class="card-header p-0 position-relative mt-n4 mx-1 z-index-2 justify-content-between align-items-center">
      <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
        <h6 class="text-white ps-3">Tambah Supplier</h6>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent="tambahSupplier" class="p-3">
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
          <button type="submit" class="btn btn-primary">Submit</button>
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
  methods: {
    async tambahSupplier() {
      const formData = {
          "alamat": this.supplier.alamat,
          "namaSupplier": this.supplier.namaSupplier,
          "noTelp": this.supplier.noTelp
      }
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${this.baseUrl}/supplier/create`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.$router.push('/supplier/show');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
