// Obtendo os elementos do HTML
const showButtonLabel = document.querySelector('.show-button');
const background = document.querySelector('.background');
const alertBox = document.querySelector('.alert-box');

// Novos IDs dos vídeos
const videoFinal = document.getElementById('video-pausa');
const videoLoop = document.getElementById('video-loop');

// Elemento do botão de retorno (que será injetado no HTML)
const btnReturn = document.getElementById('btn-return');

// Conteúdo HTML das escolhas de Outer Wilds
const outerWildsContent = `
    <div class="icon">
        <i class="fas fa-rocket"></i>
    </div>
    <header>Olá viajante!</header>
    <p>Depois de tanto tempo você possui uma escolha.</p>
    <p>Escolha com sabedoria.</p>
    <div class="btns">
        <button id="btn-final">Fazer uma pausa</button>
        <button id="btn-loop">Chegar ao fim</button>
    </div>
`;

// Função para mostrar o pop-up
function showOuterWildsPopup() {
    // Injeta o conteúdo no alert-box
    alertBox.innerHTML = outerWildsContent;

    // Adiciona os event listeners aos novos botões
    const btnFinal = document.getElementById('btn-final');
    const btnLoop = document.getElementById('btn-loop');

    btnFinal.addEventListener('click', handleFinalChoice);
    btnLoop.addEventListener('click', handleLoopChoice);

    // Mostra o pop-up e o fundo
    background.style.opacity = '1';
    background.style.pointerEvents = 'auto';
    alertBox.style.opacity = '1';
    alertBox.style.pointerEvents = 'auto';
}

// Função para esconder o pop-up
function hidePopup() {
    background.style.opacity = '0';
    background.style.pointerEvents = 'none';
    alertBox.style.opacity = '0';
    alertBox.style.pointerEvents = 'none';
    alertBox.innerHTML = ''; // Limpa o conteúdo do pop-up
}

// Lógica para a escolha do "Final Verdadeiro"
function handleFinalChoice() {
    hidePopup();
    videoFinal.classList.add('show-video');
    videoFinal.play();

    //  Mostra o botão de retorno após 15s
    setTimeout(() => {
        if (btnReturn) {
            btnReturn.classList.remove('hidden');
            btnReturn.classList.add('visible');
        }
    }, 15000);

    // Para o vídeo e recarrega a página após o tempo desejado (ex: 2 minutos)
    setTimeout(() => {
        videoFinal.pause();
        location.reload();
    }, 125000); // 2 minutos em milissegundos
}

// Lógica para a escolha do "Loop Temporal"
function handleLoopChoice() {
    hidePopup();
    videoLoop.classList.add('show-video');
    videoLoop.play();

    // Ações para o vídeo do loop (2 min)
    // Mostra o botão de retorno após 15s
    setTimeout(() => {
        if (btnReturn) {
            btnReturn.classList.remove('hidden');
            btnReturn.classList.add('visible');
        }
    }, 15000);

    // Para o vídeo e recarrega a página após o tempo original (22s)
    setTimeout(() => {
        videoLoop.pause();
        location.reload();
    }, 125000);
}

// Adiciona o evento de clique ao botão "Escolha"
showButtonLabel.addEventListener('click', showOuterWildsPopup);

// Evento de clique no botão de retorno
if (btnReturn) {
    btnReturn.addEventListener('click', () => {
        btnReturn.style.opacity = '0'; 

        // Adiciona um pequeno delay de 500 milissegundos (0.5 segundos)
        setTimeout(() => {
            location.reload(); 
        }, 500); 
    });
}