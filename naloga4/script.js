
var object = {
  // alert: function(txt) {
  //   alert(txt);
  // },
  // confirm: function(txt) {
  //   confirm(txt);
  // },
  solution: function(txt, type) {
    type == "alert" ? alert(txt) : confirm(txt);
  }
};


// object.alert("Warning: you are about to delete this item");
// object.confirm("Are you sure?");

object.solution("Warning: you are about to delete this item", "alert");
object.solution("Are you sure?", "confirm");
