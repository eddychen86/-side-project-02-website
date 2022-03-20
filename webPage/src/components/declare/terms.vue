<template>
  <header>
    <div class="banner overflow-hidden">
      <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <hr class="my-5">
        <p class="w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque culpa corrupti nihil atque nemo consequuntur dolor ad tempora, quae cupiditate. Maxime officiis modi facilis praesentium, aliquam vitae doloremque blanditiis, ex reprehenderit animi nemo exercitationem provident quibusdam iusto veniam labore dolor illo eius! Labore id architecto necessitatibus, molestiae ratione obcaecati adipisci dolores, error commodi eaque velit minus iusto dolorum culpa sint magnam modi. Dolorum vitae deleniti facilis quo blanditiis est! Quae provident quis voluptatem maxime fuga, ut ab ullam praesentium. Totam nihil maxime a unde, nulla obcaecati dolorum illum error natus quod commodi modi, doloribus saepe non praesentium. Enim quis distinctio unde doloribus quia, quod voluptatibus! Quas maiores, mollitia tempora eos cum eveniet tenetur voluptate et nemo possimus, architecto beatae facilis fuga nostrum. Temporibus aspernatur quis modi dolor, culpa, nemo consectetur sed iste, quo voluptatum quas? Voluptate tempora deleniti consequuntur. At tempore eum recusandae sit rerum doloribus enim incidunt sed modi reiciendis voluptate voluptatem, obcaecati expedita eligendi officiis deleniti ea. Et numquam culpa quo rerum magnam voluptas, sequi possimus incidunt perferendis harum doloremque quae, inventore voluptate temporibus omnis itaque labore? Impedit, quam minima vel sed alias sequi iste labore voluptatum repudiandae incidunt voluptatibus temporibus vero sint, quae ducimus, provident est.</p>
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
const title = "服務條款";
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