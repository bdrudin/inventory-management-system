<template>
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href="" target="_blank">
        <img src="/src/assets/logo512.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold text-white">Inventory Management</span>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class="material-icons opacity-10">dashboard</i>
        <span class="nav-link-text ms-1">Menu</span>
        </div>
        <li class="nav-item">
          <a class="nav-link text-white "  :class="{ 'active': data === 'barang' }" href="#" @click.prevent="setActiveData('barang')">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">Tabel Barang</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white "  :class="{ 'active': data === 'supplier' }" href="#" @click.prevent="setActiveData('supplier')">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">Tabel Supplier</span>
          </a>
        </li>
        <li class="nav-item mt-3"> 
          <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Halaman akun</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/login" type="button" @click="resetToken()">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">login</i>
            </div>
            <span class="nav-link-text ms-1">Masuk</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/register" type="button" @click="resetToken()">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">assignment</i>
            </div>
            <span class="nav-link-text ms-1">Mendaftar</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer position-absolute w-100 h-400 p-3">
      <div class="card p-2">
        <i class="material-icons opacity-10 text-center">person</i>
        <span class="nav-link-text ms-1"></span>
        <ProfileUser />
      </div>
    </div>
    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
      <div class="mx-3">
        <a class="btn btn-primary mt-4 w-100" href="/register" type="button" @click="resetToken()">Buat akun baru</a>
      </div>
    </div>
  </aside>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-1 z-index-2 justify-content-between align-items-center">
              <div class="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h4 class="text-white ps-3 text-center">Dashboard</h4>
              </div>
            </div>
          </div>

          <div v-if="data === 'barang'">
            <ListBarang />
          </div>
          <div v-else-if="data === 'supplier'">
            <ListSupplier />
          </div>
          <div v-else>
            <WelcomeUser />
            <div class="text-center mt-1">
              <a class="btn btn-danger" href="/login" type="button" @click="resetToken()">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import ListBarang from '@/components/barang/ListBarang.vue';
import ListSupplier from '@/components/supplier/ListSupplier.vue';
import WelcomeUser from '@/components/WelcomeUser.vue';
import ProfileUser from '@/components/ProfileUser.vue';
export default {
  components: {
    ListBarang,
    ListSupplier,
    WelcomeUser,
    ProfileUser
  },
  name: 'DashboardView',
  data() {
    return {
      data: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    setActiveData(data) {
      this.data = data;
    },
    resetToken() {
      localStorage.removeItem('token');
    },
  },
}
</script>