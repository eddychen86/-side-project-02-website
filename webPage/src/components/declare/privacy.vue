<template>
  <header class="d-flex align-items-center">
    <div class="banner w-100">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <p class="w-75 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quo iusto, repellat, et labore illo, error saepe libero aut architecto hic nihil numquam exercitationem culpa distinctio consequatur? Magni facere adipisci natus minima, fugit vitae in nam, quas tenetur accusamus ullam, recusandae ducimus nostrum obcaecati error facilis vero qui nemo aliquam excepturi aspernatur necessitatibus! Corporis, vitae temporibus laboriosam iure sit reprehenderit, itaque voluptate, hic deserunt ipsam quis veniam! Velit quibusdam dolor ipsa corrupti sint aspernatur, fugit ea perspiciatis accusamus perferendis totam praesentium, reiciendis voluptatum esse voluptatem beatae incidunt repellendus aliquid maxime, nam alias nemo. Dolores delectus quas ex voluptates rem sapiente fugiat unde, ipsa facere similique quos quae odio commodi sequi earum quis eos. Officiis est aperiam nulla assumenda? Sit consequuntur officiis est, aut eos autem accusantium facilis exercitationem, ratione itaque reprehenderit asperiores deleniti, enim commodi odit id minima possimus animi voluptatem sapiente nemo repudiandae! Error provident quisquam fugiat ducimus! Repudiandae, dolores? Neque necessitatibus accusamus nam natus itaque at libero voluptatum ut ab modi, a odio rerum? Id eaque aliquam accusantium nam sunt praesentium dignissimos asperiores doloribus. Voluptates animi quaerat dicta earum aut nulla nemo dolores id impedit. Laudantium necessitatibus accusantium totam modi, perferendis eum suscipit magnam, illo, blanditiis recusandae eligendi.</p>
      </div>
    </div>
  </header>
</template>

<script setup>
const title = "隱私政策";
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
  font-size: 4rem;
  font-weight: 900;
}
</style>