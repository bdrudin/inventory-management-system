<template>
  <div class="card my-4">
    <div class="card-header p-0 position-relative mt-n4 mx-1 z-index-2 justify-content-between align-items-center">
      <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
        <h6 class="text-white ps-3">Update Barang</h6>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent="updateBarang" class="p-3">
        <div class="form-group mb-1">
          <label for="namaBarang">Nama Barang</label>
          <input type="text" class="form-control" id="namaBarang" v-model="barang.namaBarang">
        </div>
        <div class="form-group mb-1">
          <label for="stok">Stok</label>
          <input type="number" class="form-control" id="stok" v-model="barang.stok">
        </div>
        <div class="form-group mb-1">
          <label for="harga">Harga</label>
          <input type="number" class="form-control" id="harga" v-model="barang.harga">
        </div>
        <div class="form-group mb-1">
          <label for="namaSupplier">Nama Supplier</label>
          <input type="text" class="form-control" id="namaSupplier" v-model="barang.supplier.namaSupplier">
        </div>
        <div class="form-group mb-3">
          <label for="alamat">Alamat Supplier</label>
          <input type="text" class="form-control" id="alamat" v-model="barang.supplier.alamat">
        </div>
        <div class="form-group mb-3">
          <label for="noTelp">No Telp Supplier</label>
          <input type="text" class="form-control" id="noTelp" v-model="barang.supplier.noTelp">
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
      barang: {
        harga: 0,
        namaBarang: '',
        stok: 0,
        supplier: {
          namaSupplier: '',
          alamat: '',
          noTelp: '',
        },
      },
      supplier: {
        namaSupplier: '',
        alamat: '',
        noTelp: '',
      },
    };
  },
  async created() {
      try {
        await this.getBarang();
      } catch (error) {
        console.error(error);
      }
  },
  methods: {
    async getBarang() {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://159.223.57.121:8090/barang/find-by-id/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.barang = response.data.data;
    },

    async updateBarang() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.put(`http://159.223.57.121:8090/barang/update/${this.$route.params.id}`, this.barang, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.$router.push('/dashboard');
      } catch (error) {
        console.error(error); 
      }
    },
  },
};
</script>