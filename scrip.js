const flashcards = [
  {
    pergunta: "Quem foi o primeiro imperador do Brasil?",
    resposta: "Dom Pedro I"
  },
  {
    pergunta: "Em que ano ocorreu a Proclamação da República?",
    resposta: "1889"
  },
  {
    pergunta: "Qual civilização construiu as pirâmides do Egito?",
    resposta: "Egípcia"
  },
  {
    pergunta: "O que foi o feudalismo?",
    resposta: "Sistema político-econômico da Idade Média baseado em senhores e servos"
  },
  {
    pergunta: "Quem foi Karl Marx?",
    resposta: "Filósofo e economista, criador do socialismo científico"
  },
  {
    pergunta: "Em que ano terminou a Segunda Guerra Mundial?",
    resposta: "1945"
  },
  {
    pergunta: "Quem foi Tiradentes?",
    resposta: "Líder da Inconfidência Mineira, mártir da independência"
  },
  {
    pergunta: "Qual tratado dividiu as terras entre Portugal e Espanha em 1494?",
    resposta: "Tratado de Tordesilhas"
  },
  {
    pergunta: "Qual evento marcou o início da Idade Moderna?",
    resposta: "A tomada de Constantinopla pelos turcos otomanos em 1453"
  }
];

const container = document.querySelector(".flashcards-container");

flashcards.forEach(({ pergunta, resposta }) => {
  const card = document.createElement("div");
  card.className = "flashcard";
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${pergunta}</div>
      <div class="card-back">${resposta}</div>
    </div>
  `;
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
  container.appendChild(card);
});
