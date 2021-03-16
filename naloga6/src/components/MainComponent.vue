<template>
  <div class="container">
    <my-menu></my-menu>
    <banner></banner>
    <articles></articles>
  </div>
</template>

<script>

import MyMenu from './Menu/MenuComponent.vue';
import Banner from './Banner/BannerComponent.vue';
import Articles from './Articles/ArticleComponent.vue';

export default {
  components: {MyMenu, Banner, Articles},
  data() {
    return {
    }
  },

}
</script>

<style lang="css" scoped>
/* .container::before {
  display: none;
} */
.container {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
