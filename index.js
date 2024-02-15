function scrollParaOElemento(seletorDoElemento, instance = 0) {
  const elementos = document.querySelectorAll(seletorDoElemento);
  console.log(elementos);
  if (elementos.length > instance) {
    elementos[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  scrollParaOElemento(".header");
});

link2.addEventListener("click", () => {
  scrollParaOElemento(".header", 1);
});

link3.addEventListener("click", () => {
  scrollParaOElemento(".container-box");
});
