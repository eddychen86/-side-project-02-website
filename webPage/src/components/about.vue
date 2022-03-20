<template>
  <header>
    <div class="banner">
      <div class="container">
        <h1 class="mb-5">{{ title }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex obcaecati omnis dolorem eum dolorum dolor necessitatibus laboriosam voluptatum at exercitationem sit officiis, laborum facere ab consequuntur quo accusantium illum beatae aliquam ut quam amet. Voluptatem ratione nobis ea nemo a maiores quasi eum fugit earum. Voluptatem id similique dolore quisquam distinctio! Sint veniam molestiae ipsam labore eum minima voluptatem minus, ab reiciendis alias consequuntur delectus praesentium possimus dolor libero nemo sapiente dolorum culpa ipsum, debitis sed corrupti consectetur ex? Nemo aperiam, placeat modi facilis voluptate rem omnis soluta labore debitis consequatur distinctio dolores perspiciatis beatae nulla possimus hic obcaecati laboriosam veritatis sapiente quam officia nostrum. Vero suscipit quasi quam optio eveniet quidem dolores qui autem sint, iste, at modi magnam, possimus laudantium necessitatibus deleniti eius! Qui illum totam ipsa provident nostrum delectus adipisci, ab necessitatibus enim magni dicta consectetur alias, magnam vero laborum. Aliquam at culpa consequuntur? Quod doloribus alias quibusdam quia doloremque nobis, officiis sapiente. Blanditiis modi natus asperiores, eum harum in autem corrupti ad nesciunt, fugit corporis, reprehenderit aut cum. Quidem beatae placeat nulla nisi, inventore nostrum aut commodi impedit explicabo atque, est fugit corporis asperiores officia ducimus unde optio dicta? Odit magni aliquam delectus amet veritatis quisquam, nobis odio sunt aperiam tenetur molestiae, tempore qui consectetur. Culpa cupiditate provident ut. Maiores, atque. Voluptatibus minus nulla, esse iure ratione deserunt fugiat dignissimos eaque! Quos tenetur ea voluptates doloremque alias magni magnam porro, quaerat nobis? Illum possimus iure laudantium earum modi amet facilis nam exercitationem at nemo! Neque suscipit repellendus a cupiditate ratione reiciendis amet cum excepturi consequatur qui, nemo nulla, nesciunt hic at veniam rerum? Iusto modi nesciunt ratione ducimus sint voluptatibus magnam perferendis! Illum quaerat ex repudiandae voluptate sapiente ipsum, explicabo tenetur assumenda quidem sint quae quasi dolor sit nulla vel praesentium quisquam magnam, eum, asperiores ipsa.</p>
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
const title = "公司介紹";
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
</style>