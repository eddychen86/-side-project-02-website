<template>
  <header>
    <div class="banner">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <div class="row">
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-01.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, suscipit.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-02.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aut.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-03.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, rem!</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-04.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, provident?</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-05.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, provident?</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-01.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, suscipit.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-02.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aut.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-03.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, rem!</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-04.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, provident?</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-05.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, provident?</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-01.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, suscipit.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-3 col-lg-3 col-md-4 col-sm-12">
            <div class="card">
              <img src="../../assets/index-02.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aut.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "產品介紹";
const product = "產品";
</script>

<style scoped>
header {
  padding: auto;
  color: #fff;
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(10px);
}
.banner {
  padding-top: 5vh;
  padding-bottom: 5vh;
}
h1 {
  font-size: 4rem;
  font-weight: 900;
}
.card-body {
  color: #000;
}
</style>