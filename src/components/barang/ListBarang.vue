<template>
  <div class="card my-4">
    <div class="card-header p-0 position-relative mt-n6 mx-5 z-index-2 ">
        <h5 class="text-white ms-auto mb-5 fw-bold">Tabel Barang</h5>
        <router-link :to="{ name: 'TambahBarang' }" class="btn btn-primary">Tambah Barang</router-link>
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
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama Barang</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Stok</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Harga</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama Supplier</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Alamat Supplier</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No Telp Supplier</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Aksi</th>
            </tr>
          </thead>
          <tbody v-if="listBarang && listBarang.length">
            <tr v-for="(barang, index) in listBarang" :key="index">
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ (currentOffset - 1) * limit + index + 1 }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ barang.namaBarang }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ barang.stok }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ barang.harga }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ barang.supplier.namaSupplier }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ barang.supplier.alamat }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ barang.supplier.noTelp }}</p>
              </td>
              <td>
                <button class="btn btn-sm btn-danger mx-1" @click="hapusBarang(barang)">
                  <i class="fas fa-trash fs-6"></i>
                </button>
                <button class="btn btn-sm btn-warning mx-1" @click="editBarang(barang.id)">
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
      listBarang: [],
      currentOffset: 1,
      limit: 20,
      totalPage: 0,
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
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://159.223.57.121:8090/barang/find-all?limit=${this.limit}&offset=${offset}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.listBarang = response.data.data;
        this.currentOffset = offset;
        this.totalPage =response.data.total_page;
      } catch (error) {
        console.error(error);
      }
    },
    editBarang(id) {
      this.$router.push({ name: 'UpdateBarang', params: {id} })
    },
    async hapusBarang(barang) {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(`http://159.223.57.121:8090/barang/delete/${barang.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.listBarang = this.listBarang.filter((b) => b.id !== barang.id);
    } catch (error) {
      console.error(error);
    }
  }
  }
}
</script>
