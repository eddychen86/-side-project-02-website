<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page">公司介紹</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">服務宣告</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/declare/terms" class="dropdown-item">服務條款</router-link></li>
              <li><router-link to="/declare/privacy" class="dropdown-item">隱私政策</router-link></li>
              <li><router-link to="/declare/Copyright" class="dropdown-item">著作權 / 智慧財產權</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">產品</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/product/info" class="dropdown-item">產品介紹</router-link></li>
              <li><router-link to="/product/download" class="dropdown-item">產品下載</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/product/result" class="dropdown-item">結果</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">付款</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/pay/buy" class="dropdown-item">購買產品</router-link></li>
              <li><router-link to="/pay/pay" class="dropdown-item">付款頁面</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/pay/result" class="dropdown-item">結果</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link active" aria-current="page">客服</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav>
  </nav>
  <router-view/>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './components/HomeView.vue';
</script>

<style>
* {
  box-sizing: border-box;
  position: relative;
}
html, body {
  padding: 0;
  margin: 0;
}

#app {
  border: 0.5px solid #000;
  font-family: "微軟正黑體";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
