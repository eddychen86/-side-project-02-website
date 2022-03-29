<template>
  <header class="d-flex align-items-center">
    <div class="banner w-100">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <div class="infoBox w-75">
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-pill border border-secondary" id="floatingInput" placeholder="fristName">
            <label for="floatingInput" class="p-2 ps-4">輸入問題</label>
          </div>
          <textarea name="services" id="services" class="px-4 py-2 w-100 mb-2" placeholder="內容"></textarea>
          <button class="btn btn-outline-light px-3 rounded-pill">送出</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "碰到問題？";
</script>

<style lang="scss" scoped>
header {  
  height: 100%;
  color: #fff;
  .banner {
    background-color: rgba(0,0,0, 0.5);
    backdrop-filter: blur(10px);
    padding-top: 5vh;
    padding-bottom: 5vh;
    h1 {
      font-size: 4rem;
      font-weight: 900;
    }
    .infoBox {
      left: 50%;
      transform: translateX(-50%);
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
      textarea {
        font-size: 14px;
        height: 30vh;
        resize: none;
        border-radius: 20px;
        background: rgba(0,0,0, 0.3);
      }
      button {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>