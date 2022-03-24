<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Photo<span>NFT</span></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="nav-link active mx-2" aria-current="page">公司介紹</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">服務宣告</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/declare/terms" class="dropdown-item">服務條款</router-link></li>
              <li><router-link to="/declare/privacy" class="dropdown-item">隱私政策</router-link></li>
              <li><router-link to="/declare/Copyright" class="dropdown-item">著作權 / 智慧財產權</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">產品</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/product/info" class="dropdown-item">產品介紹</router-link></li>
              <li><router-link to="/product/download" class="dropdown-item">產品下載</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/product/result" class="dropdown-item">結果</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">付款</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/pay/buy" class="dropdown-item">購買產品</router-link></li>
              <li><router-link to="/pay/pay" class="dropdown-item">付款頁面</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/pay/result" class="dropdown-item">結果</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link active mx-2" aria-current="page">客服</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-sm-3 px-3 py-2">
          <h4>&emsp;</h4>
          <hr>
          <p class="mb-2"><router-link to="/about">公司介紹</router-link></p>
          <p class="mb-2"><router-link to="/services">客服</router-link></p>
        </div>
        <div class="col-lg-2 col-sm-3 px-3 py-2">
          <h4>服務宣告</h4>
          <hr>
          <p class="mb-2"><router-link to="/declare/terms">服務條款</router-link></p>
          <p class="mb-2"><router-link to="/declare/privacy">隱私政策</router-link></p>
          <p class="mb-2"><router-link to="/declare/Copyright">著作權 / 智慧財產權</router-link></p>
        </div>
        <div class="col-lg-2 col-sm-3 px-3 py-2">
          <h4>產品</h4>
          <hr>
          <p class="mb-2"><router-link to="/product/info">產品介紹</router-link></p>
          <p class="mb-2"><router-link to="/product/download">產品下載</router-link></p>
          <p class="mb-2"><router-link to="/product/result">結果</router-link></p>
        </div>
        <div class="col-lg-2 col-sm-3 px-3 py-2">
          <h4>付款</h4>
          <hr>
          <p class="mb-2"><router-link to="/pay/buy">購買產品</router-link></p>
          <p class="mb-2"><router-link to="/pay/pay">付款頁面</router-link></p>
          <p class="mb-2"><router-link to="/pay/result">結果</router-link></p>
        </div>
        <div class="col-lg-4 col-md-12 px-3 py-2">
          <h4>留言區</h4>
          <hr>
          <textarea cols="40" rows="3" class="p-2 overflow-auto"></textarea>
        </div>
        <p class="col-12 text-center">© 2022 by Eddy Chen</p>
      </div>
    </div>
  </footer>
</template>

<style>
* {
  box-sizing: border-box;
  position: relative;
  text-align: justify;
}
html, body {
  padding: 0;
  margin: 0;
  background: rgb(32, 32, 32);
  min-width: 576px;
}
a {
  text-decoration: none;
  color: #fff;

}

#app {
  /* border: 0.5px solid #000; */
  font-family: "微軟正黑體";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  background-image: url("http://picsum.photos/id/327/2560/1440?grayscale");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0;
}
.row {
  margin: 0;
  padding: 0;
  width: 100%;
}

footer {
  color: #fff;
  height: auto;
  margin-top: -3vh;
  width: 100%;
  background: rgb(32, 32, 32);
}
footer textarea {
  resize: none;
}
</style>

<style scoped>
span {
  -webkit-text-stroke: 1px;
}
</style>
