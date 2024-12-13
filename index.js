let a = document.querySelector("#value");
let b = document.querySelector("#value_1");
let c = document.querySelector("#value_2");
let d = document.querySelector("#Addition");
let e = document.querySelector("#Substraction");
let f = document.querySelector("#Multiplication");
let g = document.querySelector("#Division");
let h = document.querySelector("#Clear");
d.addEventListener("click",() => {
   c.value = Number(a.value) + Number(b.value);
});
e.addEventListener("click", () => {
   c.value = Number(a.value) - Number(b.value);
})
f.addEventListener("click", () => {
   c.value = Number(a.value) * Number(b.value);
})
g.addEventListener("click", () => {
   if(b.value == 0){
      alert("A number cannot divide by zero");
   }
   else{
   c.value = Number(a.value) / Number(b.value);
   }
})
h.addEventListener("click", () => {
   a.value = b.value = c.value = " ";
});
