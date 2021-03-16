const mutations = {
  products: (state, payload) => {
    for(var i = 0; i < payload; i++) {
      state.product = {
        image: 'img/product.jpg',
        title: "Moj Product",
      };

      state.products.push(state.product);
    }
  },
  searchProducts: (state, payload) => {
    state.filterProducts.title = payload;
  }
};


export {
  mutations,
}
