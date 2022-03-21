<template>
  <header class="d-flex align-items-center">
    <div class="banner w-100">
      <div class="container">
        <h1 class="text-center">{{ title }}<span>{{ subtitle }}</span></h1>
      </div>
      <div class="photo-box">
        <div class="wrapper">
          <div id="cover" class="center">
            <div class="slick-slide"><img src="../assets/index-01.jpg"></div>
            <div class="slick-slide"><img src="../assets/index-02.jpg"></div>
            <div class="slick-slide"><img src="../assets/index-03.jpg"></div>
            <div class="slick-slide"><img src="../assets/index-04.jpg"></div>
            <div class="slick-slide"><img src="../assets/index-05.jpg"></div>
          </div>
        </div>
      </div>
      <div>
        <router-link to="/product/info" class="btn btn-outline-light border rounded-pill">ENTER</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "Welcome to Photo";
const subtitle = "NFT";

$(document).ready(() => {
  $('.center').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});
</script>

<style scoped>
header {  
  height: 100%;
  color: #fff;
}
.banner {
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(10px);
  padding-top: 5vh;
  padding-bottom: 5vh;
}
h1 {
  font-size: 5rem;
}
span {
  -webkit-text-stroke: 8px;
}

.photo-box {
  overflow: hidden;
  margin: 2vh 0;
}
.wrapper {
  width: 100%;
  height: 100%;
  text-align:center;
}
.carousel {
  width: 100%;
  margin: 0px auto;
}
.slick-slide {
  margin: 10px; /* 圖片與圖片的間隔大小 */
}
.slick-slide img {
  width: 100%;
}

.btn {
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 2px;
}

</style>