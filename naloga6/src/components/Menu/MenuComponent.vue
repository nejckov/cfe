<template>
  <div class="menu-bar">
    <div class="menu-item" v-for="(menu, index) in menus" :key="index" :class="{'selecteditem': selected === menu.title}"
          @click.prevent="selected = menu.title">
      {{menu.title}}

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selected: String
    }
  },
  computed: {
    ...mapGetters({
      menus: 'getMenu'
    })
  },
  created() {

  }
}
</script>

<style lang="css" scoped>
.menu-bar {
  width: 100%;
  z-index: 1000;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: rgb(39, 45, 181);
  color: white;
  justify-content: space-around;
  align-items: center;
  position: fixed;
}
.menu-item {
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.menu-item:hover {
  background-color: rgb(237, 12, 222);
}

.selecteditem {
  font-weight: bold;
  border-bottom: 1px solid blue;
  cursor: pointer;
  background-color: rgb(5, 207, 68);
}
</style>
