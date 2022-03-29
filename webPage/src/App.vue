<template>
  <nav class="navbar navbar-expand-lg fixed-top px-5 navbar-dark">
    <router-link to="/" class="navbar-brand">Photo<span>NFT</span></router-link>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pt-2 pe-5">
          <li class="nav-item">
            <router-link to="/about" class="nav-link mx-2" aria-current="page">公司介紹</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">服務宣告</a>
            <ul class="dropdown-menu border border-secondary p-0 rounded-3 overflow-hidden" aria-labelledby="offcanvasNavbarDropdown">
              <li><router-link to="/declare/terms" class="dropdown-item">服務條款</router-link></li>
              <li><router-link to="/declare/privacy" class="dropdown-item">隱私政策</router-link></li>
              <li><router-link to="/declare/Copyright" class="dropdown-item">著作權 / 智慧財產權</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">產品</a>
            <ul class="dropdown-menu border border-secondary p-0 rounded-3 overflow-hidden" aria-labelledby="offcanvasNavbarDropdown">
              <li><router-link to="/product/info" class="dropdown-item">產品介紹</router-link></li>
              <li><router-link to="/product/download" class="dropdown-item">產品下載</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mx-2" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">付款</a>
            <ul class="dropdown-menu border border-secondary p-0 rounded-3 overflow-hidden" aria-labelledby="offcanvasNavbarDropdown">
              <li><router-link to="/pay/buy" class="dropdown-item">購買產品</router-link></li>
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
      <div class="row justify-content-center m-0">
        <div class="col-md-3 col-sm-12 px-3 py-2">
          <h4>&emsp;</h4>
          <hr>
          <p class="mb-2"><router-link class="footer-item" to="/about">公司介紹</router-link></p>
          <p class="mb-2"><router-link class="footer-item" to="/services">客服</router-link></p>
        </div>
        <div class="col-md-3 col-sm-12 px-3 py-2">
          <h4>服務宣告</h4>
          <hr>
          <p class="mb-2"><router-link class="footer-item" to="/declare/terms">服務條款</router-link></p>
          <p class="mb-2"><router-link class="footer-item" to="/declare/privacy">隱私政策</router-link></p>
          <p class="mb-2"><router-link class="footer-item" to="/declare/Copyright">著作權 / 智慧財產權</router-link></p>
        </div>
        <div class="col-md-3 col-sm-12 px-3 py-2">
          <h4>產品</h4>
          <hr>
          <p class="mb-2"><router-link class="footer-item" to="/product/info">產品介紹</router-link></p>
          <p class="mb-2"><router-link class="footer-item" to="/product/download">產品下載</router-link></p>
        </div>
        <div class="col-md-3 col-sm-12 px-3 py-2">
          <h4>付款</h4>
          <hr>
          <p class="mb-2"><router-link class="footer-item" to="/pay/buy">購買產品</router-link></p>
        </div>
        <p class="col-12 text-center">© 2022 by Eddy Chen</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  position: relative;
  text-align: justify;
}
html, body {
  padding: 0;
  margin: 0;
  background: rgb(40, 41, 46);
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
nav {
  background: rgb(40, 41, 46);
  .navbar-brand:hover {
    color: #fff;
  }
  .nav-link {
    color: rgb(200, 200, 200) !important;
    transition: .3s;
    &:hover {
      color: #fff !important;
      -webkit-text-stroke: .5px;
    }
  }
  .dropdown {
    &-menu {
      background: rgba(0, 0, 0, 0.5) !important;
      top: 130% !important;
    }
    &-item {
      line-height: 2rem;
      color: #fff;
      transition: .3s;
      &:hover {
        background: #fff;
        color: #000;
        -webkit-text-stroke: .5px;
      }
    }
  }
  .offcanvas {
    height: 5%;
  }
  @media screen and (max-width: 992px) {
    .offcanvas {
      width: 30% !important;
      height: 50%;
      background: linear-gradient(to bottom, rgba(40, 41, 46, 1), rgba(40, 41, 46, 0));
    }
  }
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
  background: rgb(40, 41, 46);
  .footer-item {
    transition: .3s;
    color:rgb(200, 200, 200);
    &:hover {
      color: #fff;
      font-weight: 900;
    }
  }
  textarea {
    resize: none;
  }
}
</style>

<style scoped>
span {
  -webkit-text-stroke: 1px;
}
</style>
