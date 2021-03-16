<template>
  <div class="articles-list">
    <div class="search">
      <label for="">Išči</label>
      <input type="text" v-model="searchParams" name="" value="">
    </div>
    <div class="articles">
      <div class="article" v-for="(product, index) in products" :key="index">
        <img :src="product.image" alt="">
        <div class="title">{{ product.title }}</div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      searchParams: '',
    }
  },
  created() {
    this.$store.dispatch('AJAXproduct', {
      numOfProducts: 8,
    });
  },
  mounted() {
    window.addEventListener('scroll', this.newArticles);
  },
  computed: {
    products() {
      return this.$store.getters.getProduct;
    }
  },
  methods: {
    newArticles() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.$store.dispatch('AJAXproduct', {
          numOfProducts: 4,
        });
      }
    }
  },
  watch: {
    searchParams() {
        this.$store.dispatch('searchProducts', {
          numOfProducts: 4,
          search: this.searchParams,
        });
    }
  }
}
</script>

<style lang="css" scoped>

.articles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  margin: auto;
  grid-gap: 20px;
}
/* MEDIA QUERIES FOR MOBILE VERSION */
@media only screen and (max-width: 1100px) {
  .articles {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 900px) {
  .articles {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 767px) {
  .articles {
    grid-template-columns: repeat(1, 1fr);
  }
}

.article {
  border: 1px solid black;
  border-radius: 5px;
}
.title {
  text-align: center;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.search label {
  margin-right: 20px;
}
</style>
