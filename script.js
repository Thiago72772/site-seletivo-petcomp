// pego todos os cards do carrossel
const cards = document.querySelectorAll(".card");

// esse aqui guarda qual card ta aparecendo agora, começa no 0 (primeiro card)
let atual = 0;

// funcao que troca o card que ta ativo
// ela tira o "ativo" de todo mundo e depois bota só no que eu quero mostrar
function mostrarCard(indice) {
  cards.forEach(card => {
    card.classList.remove("ativo");
  });

    cards[indice].classList.add("ativo");
}

// botao de proximo, quando clica soma 1
document.getElementById("proximo").addEventListener("click", () => {
  atual = atual + 1;

  // se passar do ultimo card volta pro primeiro (senao da undefined)
  if (atual > cards.length - 1) {
    atual = 0;
  }

  mostrarCard(atual);
});

// botao de anterior, faz o contrario, subtrai 1
document.getElementById("anterior").addEventListener("click", () => {
  atual = atual - 1;

  // se for menor que 0 volta pro ultimo card do array
  if (atual < 0) {
    atual = cards.length - 1;
  }

  mostrarCard(atual);
});

// chama uma vez logo que a pagina carrega pra já aparecer o primeiro card
mostrarCard(atual);