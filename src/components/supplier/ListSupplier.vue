<template>
  <div class="card my-4">
    <div class="card-header p-0 position-relative mt-n6 mx-5 z-index-2 ">
      <h5 class="text-white ms-auto mb-5 fw-bold">Tabel Supplier</h5>
      <router-link :to="{ name: 'TambahSupplier' }" class="btn btn-primary">Tambah Supplier</router-link>
    </div>
    <div class="card-body px-0 pb-2">
    <div class="container">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
         
          <li v-for="pageNumber in 5" :key="pageNumber" :class="{'page-item': true, 'active': currentOffset === pageNumber}">
            <a class="page-link" href="#" @click="loadData(pageNumber)">{{pageNumber}}</a>
          </li>

        </ul>
      </nav>
    </div>
      <div class="table-responsive p-2 mt-0">
        <table class="table align-items-center mb-0 mt-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama Supplier</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Alamat</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No Telp</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Aksi</th>
            </tr>
          </thead>
          <tbody v-if="listSupplier && listSupplier.length">
            <tr v-for="(supplier, index) in listSupplier" :key="index">
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ (currentOffset - 1) * limit + index + 1 }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ supplier.namaSupplier }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ supplier.alamat }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ supplier.noTelp }}</p>
              </td>
              <td>
                <button class="btn btn-sm btn-danger mx-1" @click="hapusSupplier(supplier)">
                  <i class="fas fa-trash fs-6"></i>
                </button>
                <button class="btn btn-sm btn-warning mx-1" @click="editSupplier(supplier.id)">
                  <i class="fa-solid fa-pen-to-square fs-6"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      listSupplier: [],
      currentOffset: 1,
      limit: 20,
      totalPage: 0,
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    }
  },
  computed: {
    currentPage() {
      return Math.floor(this.offset / this.limit) + 1;
    },
    pageCount() {
      return Math.ceil(this.totalCount / this.limit);
    },
  },
  async mounted() {
    try {
      await this.loadData(this.currentOffset);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async loadData(offset) {
      try {
        const limit = 20;
        const page = 2; 
        const token = localStorage.getItem('token');
        const response = await axios.get(`${this.baseUrl}/supplier/find-all?limit=${this.limit}&offset=${offset}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.listSupplier = response.data.data;
        this.currentOffset = offset;
        this.totalPage =response.data.total_page;
      } catch (error) {
        console.error(error);
      }
    },
    editSupplier(id) {
      this.$router.push({ name: 'UpdateSupplier', params: {id} })
    },
    async hapusSupplier(supplier) {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(`${this.baseUrl}/supplier/delete/${supplier.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.listSupplier = this.listSupplier.filter((b) => b.id !== supplier.id);
    } catch (error) {
      console.error(error);
    }
  }
  }
}
</script>
