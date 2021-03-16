
var element1 = document.getElementById("element1");
var element2 = document.getElementById("element2");
var element3 = document.getElementById("element3");

element1.style.width = "300px";
element1.style.height = "300px";
element1.style.backgroundColor = "blue";

element2.style.width = "200px";
element2.style.height = "200px";
element2.style.backgroundColor = "green";

element3.style.width = "100px";
element3.style.height = "100px";
element3.style.backgroundColor = "red";


element2.addEventListener('mousemove', e => {
  e.stopPropagation();
  console.log("move - green");
})

element3.addEventListener('mousemove', e => {
  e.stopPropagation();
  console.log("move - red");
})

element1.addEventListener('mousemove', e => {
  e.stopPropagation();
  console.log("move - blue");
});
