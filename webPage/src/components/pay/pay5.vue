<template>
  <header>
    <div class="banner">
      <div class="container p-5">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <div class="row d-flex justify-content-center">
          <img src="../../../public/index-05.jpg" class="col-md-6 col-sm-10"
          oncontextmenu="return false"
          ondragstart="return false"
          oncopy = "return false"
          oncut = "return false">
          <div class="col-md-6 col-sm-10">
            <h3 class="text-center mt-3">Photo<span>NFT</span></h3>
            <div class="row mt-3">
              <div class="form-floating mb-3 col-6">
                <input type="text" class="form-control rounded-pill border border-secondary" id="floatingInput" placeholder="fristName">
                <label for="floatingInput" class="p-2 ps-4">First Name</label>
              </div>
              <div class="form-floating mb-3 col-6">
                <input type="text" class="form-control rounded-pill border border-secondary" id="floatingInput" placeholder="lastName">
                <label for="floatingInput" class="p-2 ps-4">Last Name</label>
              </div>
              <div class="form-floating mb-3 col-12">
                <input type="email" class="form-control rounded-pill border border-secondary" id="floatingInput" placeholder="name@mail.com">
                <label for="floatingInput" class="p-2 ps-4">Email</label>
              </div>
              <div class="form-floating mb-3 col-12">
                <input type="text" class="form-control rounded-pill border border-secondary" id="floatingInput" placeholder="0987654321">
                <label for="floatingInput" class="p-2 ps-4">Phone</label>
              </div>
              <div class="form-floating mb-3 col-12">
                <input type="text" class="form-control rounded-pill border border-secondary" id="floatingInput" placeholder="ˇkeopwdjef1E#WDW@#QWD@DDdqlp">
                <label for="floatingInput" class="p-2 ps-4">Ｗallet Ａddress</label>
              </div>
            </div>
            <a href="../../../public/index-05.jpg" download="index-05">
              <button class="btn btn-outline-light px-3 rounded-pill">Buy</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "購物車";
const product = "PhotoNFT";
const dl = "Download";
</script>

<style lang="scss" scoped>
header {
  padding: auto;
  color: #fff;
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(10px);
  .banner {
    padding-top: 5vh;
    padding-bottom: 5vh;
    span {
      -webkit-text-stroke: 1px;
    }
    .row {
      img {
        border-radius: 5%;
      }
      .form-floating {
        color: gray;
        #floatingInput {
          height: 1rem;
          border: 0px;
          color: #fff;
          background: rgba(0,0,0, 0.3);
        }
        label {
          font-size: 12px;
        }
      }
    }
    .btn {
      padding: .5px 2px;
      letter-spacing: 3px;
      font-weight: 900;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>