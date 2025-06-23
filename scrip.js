const flashcards = [
    {
        question: "Quem foi o primeiro imperador do Brasil?",
        answer: "Dom Pedro I"
    },
    {
        question: "Em que ano ocorreu a Proclamação da República?",
        answer: "1889"
    },
    {
        question: "Qual civilização construiu as pirâmides do Egito?",
        answer: "Egípcia"
    },
    {
        question: "O que foi o feudalismo?",
        answer: "Sistema político-econômico da Idade Média baseado em senhores e servos"
    },
    {
        question: "Quem foi Karl Marx?",
        answer: "Filósofo e economista, criador do socialismo científico"
    },
    {
        question: "Em que ano terminou a Segunda Guerra Mundial?",
        answer: "1945"
    },
    {
        question: "Quem foi Tiradentes?",
        answer: "Líder da Inconfidência Mineira, mártir da independência"
    },
    {
        question: "Qual tratado dividiu as terras entre Portugal e Espanha em 1494?",
        answer: "Tratado de Tordesilhas"
    },
    {
        question: "Qual evento marcou o início da Idade Moderna?",
        answer: "A tomada de Constantinopla pelos turcos otomanos em 1453"
    }
];

function generateFlashcards() {
    const flashcardsContainer = document.getElementById('flashcards');
    
    flashcards.forEach((card) => {
        const flashcardDiv = document.createElement('div');
        flashcardDiv.classList.add('flashcard');
        
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');
        
        // Frente do flashcard (pergunta)
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.innerHTML = `<h3>${card.question}</h3>`;
        
        // Verso do flashcard (resposta)
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.innerHTML = `<p>${card.answer}</p>`;
        
        // Evento de clique para virar o flashcard
        flashcardDiv.onclick = function() {
            cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
        };
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        flashcardDiv.appendChild(cardInner);
        flashcardsContainer.appendChild(flashcardDiv);
    });
}

// Gera os flashcards ao carregar a página
generateFlashcards();
