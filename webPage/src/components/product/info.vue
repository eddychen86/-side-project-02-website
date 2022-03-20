<template>
  <header>
    <div class="banner overflow-hidden">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <div class="row">
          <div class="m-5 col-lg-3 col-md-4 col-sm-12">
            <div class="card" style="width: 18rem;">
              <img src="../../assets/index-01.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, blanditiis!</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="m-5 col-lg-3 col-md-4 col-sm-12">
            <div class="card" style="width: 18rem;">
              <img src="../../assets/index-02.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, blanditiis!</p>
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
// import { ref } from 'vue'

// defineProps({
//   msg: String
// })

// const count = ref(0)
const title = "產品介紹";
const product = "產品"
</script>

<style scoped>
header {  
  height: 100%;
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
.card-text {
  color: #000;
}
</style>