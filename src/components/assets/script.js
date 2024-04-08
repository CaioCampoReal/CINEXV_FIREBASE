const geral = document.querySelector(".geral");
const menu = document.querySelector(".menu");

geral.addEventListener("click", () => {
    geral.classList.toggle('active');
    menu.classList.toggle('active');
})

var ancoras = document.querySelectorAll('a');
Array.from(ancoras).forEach(function(a) {
  a.addEventListener('click', scroll);
});

function animarScroll(atual, destino) {
  if (atual >= destino) return;
  document.body.scrollTop = atual;
  setTimeout(function() {
    animarScroll(atual += 50, destino);
  }, 50);
}

function scroll(e) {
  e.preventDefault();
  var id = this.getAttribute('href');
  var el = document.querySelector(id);
  var posicao = el.getBoundingClientRect().top;
  animarScroll(this.scrollTop, posicao);
}