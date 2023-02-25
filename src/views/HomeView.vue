<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary ms-auto">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8 my-5">
        <h1 class="text-center mb-4">Inventory Management System</h1>
        <p class="lead mb-5">Selamat datang di aplikasi Inventory Management System, sebuah aplikasi untuk mengelola data barang dan supplier dalam suatu sistem. Dengan aplikasi ini, Anda dapat dengan mudah melihat, menambahkan, mengubah, dan menghapus data barang dan supplier yang Anda miliki.</p>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 mb-4">
            <div class="card">
              <img src="" class="card-img-top w-20" alt="Tabel Barang">
              <div class="card-body">
                <h5 class="card-title">Tabel Barang</h5>
                <p class="card-text">Aplikasi ini menyediakan sebuah tabel untuk menyimpan data barang. Anda dapat menambahkan, mengubah, atau menghapus data barang dengan mudah melalui tabel ini.</p>
                <a href="/dashboard" class="btn btn-primary">Lihat Tabel Barang</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="card">
              <img src="" class="card-img-top w-20" alt="Tabel Supplier">
              <div class="card-body">
                <h5 class="card-title">Tabel Supplier</h5>
                <p class="card-text">Aplikasi ini juga menyediakan sebuah tabel untuk menyimpan data supplier. Anda dapat menambahkan, mengubah, atau menghapus data supplier dengan mudah melalui tabel ini.</p>
                <a href="/dashboard" class="btn btn-primary">Lihat Tabel Supplier</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
