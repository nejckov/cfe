(function() {
  var index;
  var lenght = 20;

  for(index = 0; index < lenght; index++) {
    setTimeout(function (index) {
      console.log(index);
    }, 200 * (index + 1), index);
  }
})();
