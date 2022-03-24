<template>
  <header>
    <div class="banner">
      <div class="container pb-5">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "結果";
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
</style>