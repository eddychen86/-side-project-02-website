<template>
  <header class="d-flex align-items-center w-100">
    <div class="banner w-100">
      <div class="container">
        <h1 class="mb-5 text-center">{{ title }}</h1>
        <div class="row">
          <div class="img col-lg-3 col-sm-12"></div>
          <p class="col-lg-9 col-sm-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus inventore quis, molestiae quo, autem accusantium iure, provident dolor aliquam enim at dolores cumque. Reprehenderit, repellendus sed aliquam nihil sit laudantium voluptatem rem saepe nam. Incidunt neque enim exercitationem at tempore adipisci officia amet repellat voluptatum? Tempore soluta mollitia rerum! Aperiam distinctio ratione totam voluptate, esse quibusdam earum at numquam cupiditate culpa quae commodi quo architecto eius enim porro. Alias magnam aspernatur voluptatem tempora hic minima quis facilis ullam non eos nulla voluptates itaque soluta ex in dignissimos nostrum illum, harum cumque? Placeat explicabo nulla aperiam in pariatur unde impedit doloremque quibusdam, nesciunt necessitatibus et consectetur dolore alias iste provident, sapiente blanditiis quae, obcaecati repudiandae. Expedita cupiditate eum voluptates sint mollitia. Impedit officia eveniet similique numquam modi ab delectus aliquid, assumenda vitae eligendi consectetur quod alias fuga accusamus nobis recusandae doloremque ad labore iure, et saepe architecto asperiores aperiam provident. Quis eius debitis nemo recusandae exercitationem rerum assumenda. Reprehenderit, magnam! Quibusdam voluptatibus veritatis consequatur consectetur unde. Molestias natus rem sed, nostrum, impedit ad eaque harum nemo autem eum rerum accusamus perspiciatis quos. Repudiandae voluptate corrupti iure consectetur cumque rem soluta aliquid aliquam repellat dolorum aperiam placeat doloribus vitae, sequi quisquam.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "公司介紹";
</script>

<style scoped>
header {
  height: 100%;
  padding: auto;
  color: #fff;
}
.banner {
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(10px);
  padding-top: 5vh;
  padding-bottom: 5vh;
}
h1 {
  font-size: 4rem;
  font-weight: 900;
}
.img {
  background-image: url('https://picsum.photos/id/221/450/800?grayscale');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
}
</style>