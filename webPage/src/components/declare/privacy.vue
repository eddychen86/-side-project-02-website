<template>
  <header>
    <div class="banner overflow-hidden">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <p class="w-75 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quo iusto, repellat, et labore illo, error saepe libero aut architecto hic nihil numquam exercitationem culpa distinctio consequatur? Magni facere adipisci natus minima, fugit vitae in nam, quas tenetur accusamus ullam, recusandae ducimus nostrum obcaecati error facilis vero qui nemo aliquam excepturi aspernatur necessitatibus! Corporis, vitae temporibus laboriosam iure sit reprehenderit, itaque voluptate, hic deserunt ipsam quis veniam! Velit quibusdam dolor ipsa corrupti sint aspernatur, fugit ea perspiciatis accusamus perferendis totam praesentium, reiciendis voluptatum esse voluptatem beatae incidunt repellendus aliquid maxime, nam alias nemo. Dolores delectus quas ex voluptates rem sapiente fugiat unde, ipsa facere similique quos quae odio commodi sequi earum quis eos. Officiis est aperiam nulla assumenda? Sit consequuntur officiis est, aut eos autem accusantium facilis exercitationem, ratione itaque reprehenderit asperiores deleniti, enim commodi odit id minima possimus animi voluptatem sapiente nemo repudiandae! Error provident quisquam fugiat ducimus! Repudiandae, dolores? Neque necessitatibus accusamus nam natus itaque at libero voluptatum ut ab modi, a odio rerum? Id eaque aliquam accusantium nam sunt praesentium dignissimos asperiores doloribus. Voluptates animi quaerat dicta earum aut nulla nemo dolores id impedit. Laudantium necessitatibus accusantium totam modi, perferendis eum suscipit magnam, illo, blanditiis recusandae eligendi.</p>
      </div>
    </div>
  </header>
</template>

<script setup>
// import { ref } from 'vue'

// defineProps({
//   msg: String
// })

// const count = ref(0)
const title = "隱私政策";
</script>

<style scoped>
header {  
  height: 100%;
  padding: auto;
  color: #fff;
}
.banner {
  height: 50vh;
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(10px);
  transform: translateY(40%);
  padding-top: 5vh;
  padding-bottom: 5vh;
  overflow: hidden;
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