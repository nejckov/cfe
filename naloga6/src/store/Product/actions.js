const actions = {
  AJAXproduct: ({state, commit, dispatch}, payload) => {

    // SIMULACIJSKA FUNKCIJA RESPONSA ZA AJAX
    function simulateResponse(response, success) {
      return function (params) {
        if (success) {
          params.success(response);
        } else {
          params.error(response);
        }
      };
    }

    $.ajax = simulateResponse("success response", true);

    $.ajax({
      url: "test.html",
      // tpye: "GET",
      dataType: "json",
      context: document.body,
      // response: "success",
      data: payload,
      success: function(data) {
        commit('products', payload.numOfProducts);
      },
      error: function(data) {
        console.log("error from ajax");
      }
    })
  },
  searchProducts: ({state, commit, dispatch}, payload) => {

    state.products = [];
    dispatch('AJAXproduct', payload);
  },

};



export {
  actions
};
