const getters = {
  getProduct: (state, getters) => {
    return getters.filterProducts;
  },
  filterProducts: (state) => {
    var search = [];

    search = state.products.filter(el => {
      return el.title.toString().toLowerCase().match(state.filterProducts.title.toString().toLowerCase());
    });

    // search = search.filter(el => {
    //   return el.img.match(state.filterProducts.img);
    // });

    return search;
  }
}


export {
  getters,
};
