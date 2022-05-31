<template>
  <header class="d-flex align-items-center">
    <div class="banner w-100">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <p class="w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel natus illo! Neque, architecto harum deleniti autem hic ipsum delectus! Vel ea aspernatur possimus, nobis eius a tenetur molestias dolores cumque voluptatibus. Nesciunt molestias atque impedit sequi ratione dolore voluptatum adipisci corrupti officia aliquam, aut mollitia perspiciatis fuga nam ad a omnis esse nobis ex reiciendis enim itaque dolores. Pariatur officia, tempora ratione asperiores odit praesentium ad ab earum molestias. Impedit tenetur quia aut alias nemo dicta at blanditiis qui repellendus? Rem similique maiores veniam voluptatem consequuntur architecto suscipit omnis, ab eaque culpa laudantium eligendi, earum est. Quia perferendis quis modi commodi ut nobis nostrum nisi, aliquid error at id adipisci numquam qui earum fuga amet alias doloremque delectus mollitia voluptatibus aut minus odit vel? Atque iure amet cupiditate temporibus, ratione a corporis at? Ea minima, dolores accusantium sed nihil quasi at temporibus tenetur reiciendis vitae possimus, corrupti vel sunt fugit, cupiditate neque ipsa. Vitae minima necessitatibus maxime dolor? Quisquam nihil eius unde itaque doloribus? Cupiditate ad, possimus voluptatem magnam iure nulla, reprehenderit assumenda expedita harum veniam esse culpa quis maxime ipsam dolorum repellat quos perspiciatis. Qui harum necessitatibus vel dolorum soluta tenetur accusantium exercitationem, temporibus corporis! Fuga, magnam quam.</p>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "著作聲明";
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
.container {
  margin-top: auto;
  margin-bottom: auto;
}

h1 {
  font-size: 4rem;
  font-weight: 900;
}
</style>