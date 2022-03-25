<template>
  <header>
    <div class="banner">
      <div class="container p-5">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <img src="../../../public/index-01.jpg" class="col-md-6 col-sm-10 border rounded-3 border-0">
        <div class="col-md-6 col-sm-10"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "購物車";
const product = "PhotoNFT";
const dl = "Download";
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
.btn {
  letter-spacing: 2px;
  font-weight: 900;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
}
.mask {
  background: rgba(0 ,0 ,0 , 0);
	transition: .3s;
	cursor: pointer;
	opacity: 0;
  height: 100%;
  width: 100%;
}
.mask:hover {
  background: rgba(0 ,0 ,0 , 0.5);
  opacity: 1;
}

.img1 {
  background-image: url("../public/mark/index-01-mark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15vh;
}
.img2 {
  background-image: url("../public/mark/index-02-mark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15vh;
}
.img3 {
  background-image: url("../public/mark/index-03-mark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15vh;
}
.img4 {
  background-image: url("../public/mark/index-04-mark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15vh;
}
.img5 {
  background-image: url("../public/mark/index-05-mark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15vh;
}
</style>