/* =========================================
   MINAS DA MOTIVAÇÃO
   JAVASCRIPT COMPLETO
========================================= */

/* =========================================
   ELEMENTOS
========================================= */

const tabuleiro = document.getElementById("tabuleiro");
const btnDado = document.getElementById("btnDado");
const dado = document.getElementById("dado");

const jogadorAtualTxt = document.getElementById("jogadorAtual");
const posicaoAtualTxt = document.getElementById("posicaoAtual");
const pontuacaoAtualTxt = document.getElementById("pontuacaoAtual");
const tempoTxt = document.getElementById("tempo");

const modalPergunta = document.getElementById("modalPergunta");
const modalResultado = document.getElementById("modalResultado");
const modalVitoria = document.getElementById("modalVitoria");

const perguntaTxt = document.getElementById("pergunta");

const altA = document.getElementById("altA");
const altB = document.getElementById("altB");
const altC = document.getElementById("altC");

const barraTempo = document.getElementById("barraTempo");

const modo = document.getElementById("modo");
const quantidadeJogadores = document.getElementById("quantidadeJogadores");

const btnComecar = document.getElementById("btnComecar");

/* =========================================
   VARIÁVEIS
========================================= */

let jogadores = [];
let jogadorAtual = 0;
let perguntaAtual = null;
let timer = null;
let tempo = 15;

const minas = [4,8,12,16,21,25,28];

/* =========================================
   CORES DISPONÍVEIS
========================================= */

const cores = [
{nome:"Vermelho",cor:"red"},
{nome:"Azul",cor:"blue"},
{nome:"Verde",cor:"green"},
{nome:"Amarelo",cor:"yellow"},
{nome:"Roxo",cor:"purple"},
{nome:"Laranja",cor:"orange"},
{nome:"Rosa",cor:"pink"},
{nome:"Ciano",cor:"cyan"},
{nome:"Lima",cor:"lime"},
{nome:"Branco",cor:"white"}
];

let coresSelecionadas = [];

/* =========================================
   30 PERGUNTAS
========================================= */

const perguntas = [

{
pergunta:"Segundo Herzberg, qual fator é considerado motivacional?",
A:"Reconhecimento profissional",
B:"Salário",
C:"Condições físicas",
correta:"A"
},

{
pergunta:"A motivação intrínseca está relacionada principalmente:",
A:"À satisfação pessoal",
B:"À recompensa financeira",
C:"À pressão hierárquica",
correta:"A"
},

{
pergunta:"O excesso de controle sobre funcionários pode causar:",
A:"Maior criatividade",
B:"Desmotivação",
C:"Engajamento contínuo",
correta:"B"
},

{
pergunta:"Qual elemento fortalece o engajamento profissional?",
A:"Autonomia",
B:"Punições frequentes",
C:"Competição negativa",
correta:"A"
},

{
pergunta:"A teoria dos dois fatores de Herzberg diferencia:",
A:"Liderança e produção",
B:"Fatores motivacionais e higiênicos",
C:"Salário e produtividade",
correta:"B"
},

{
pergunta:"Funcionários que se sentem valorizados tendem a:",
A:"Evitar responsabilidades",
B:"Apresentar maior produtividade",
C:"Demonstrar menos criatividade",
correta:"B"
},

{
pergunta:"Qual fator contribui para um clima organizacional saudável?",
A:"Comunicação eficiente",
B:"Falta de reconhecimento",
C:"Pressão constante",
correta:"A"
},

{
pergunta:"A motivação extrínseca normalmente depende de:",
A:"Interesse pessoal",
B:"Recompensas externas",
C:"Propósito individual",
correta:"B"
},

{
pergunta:"A psicologia organizacional tem como foco:",
A:"Estratégias financeiras",
B:"Comportamento humano no trabalho",
C:"Controle industrial",
correta:"B"
},

{
pergunta:"A ausência de feedback positivo pode gerar:",
A:"Engajamento",
B:"Desmotivação",
C:"Maior autonomia",
correta:"B"
},

{
pergunta:"A autonomia profissional favorece:",
A:"Maior motivação",
B:"Redução da criatividade",
C:"Isolamento profissional",
correta:"A"
},

{
pergunta:"Qual comportamento caracteriza um líder motivador?",
A:"Ignorar opiniões",
B:"Inspirar e orientar",
C:"Punir constantemente",
correta:"B"
},

{
pergunta:"A satisfação no trabalho está diretamente ligada:",
A:"Ao bem-estar profissional",
B:"Ao medo de demissão",
C:"À competição excessiva",
correta:"A"
},

{
pergunta:"A valorização profissional contribui para:",
A:"Rotatividade elevada",
B:"Engajamento organizacional",
C:"Conflitos internos",
correta:"B"
},

{
pergunta:"Funcionários motivados geralmente apresentam:",
A:"Maior produtividade",
B:"Maior desinteresse",
C:"Menor comprometimento",
correta:"A"
},

{
pergunta:"Qual fator reduz a motivação no ambiente de trabalho?",
A:"Reconhecimento",
B:"Falta de valorização",
C:"Participação em decisões",
correta:"B"
},

{
pergunta:"A motivação influencia diretamente:",
A:"Os resultados organizacionais",
B:"Somente salários",
C:"Apenas horários",
correta:"A"
},

{
pergunta:"O reconhecimento profissional pode aumentar:",
A:"O desânimo",
B:"A autoestima profissional",
C:"A insegurança",
correta:"B"
},

{
pergunta:"A liderança autoritária normalmente provoca:",
A:"Participação ativa",
B:"Desmotivação",
C:"Maior autonomia",
correta:"B"
},

{
pergunta:"A motivação intrínseca costuma gerar:",
A:"Engajamento duradouro",
B:"Dependência de recompensas",
C:"Medo constante",
correta:"A"
},

{
pergunta:"A teoria motivacional busca compreender:",
A:"O comportamento humano",
B:"Apenas produtividade",
C:"Somente resultados financeiros",
correta:"A"
},

{
pergunta:"Qual atitude favorece a colaboração em equipe?",
A:"Comunicação saudável",
B:"Competição destrutiva",
C:"Falta de diálogo",
correta:"A"
},

{
pergunta:"O excesso de pressão psicológica pode resultar em:",
A:"Maior criatividade",
B:"Estresse profissional",
C:"Maior satisfação",
correta:"B"
},

{
pergunta:"Um funcionário engajado tende a:",
A:"Contribuir mais para a equipe",
B:"Evitar desafios",
C:"Produzir menos",
correta:"A"
},

{
pergunta:"Qual elemento fortalece a motivação no trabalho?",
A:"Reconhecimento",
B:"Humilhação",
C:"Medo constante",
correta:"A"
},

{
pergunta:"A psicologia organizacional auxilia principalmente:",
A:"Na qualidade de vida no trabalho",
B:"Na punição disciplinar",
C:"Na pressão psicológica",
correta:"A"
},

{
pergunta:"A motivação extrínseca pode ser estimulada através de:",
A:"Promoções e bônus",
B:"Interesse interno",
C:"Realização pessoal",
correta:"A"
},

{
pergunta:"Equipes motivadas normalmente apresentam:",
A:"Maior cooperação",
B:"Mais conflitos",
C:"Menor produtividade",
correta:"A"
},

{
pergunta:"A ausência de reconhecimento profissional pode causar:",
A:"Desmotivação",
B:"Engajamento",
C:"Maior criatividade",
correta:"A"
},

{
pergunta:"Qual fator contribui para motivação duradoura?",
A:"Autonomia",
B:"Punições",
C:"Medo de falhar",
correta:"A"
}

];

/* =========================================
   TABULEIRO
========================================= */

function criarTabuleiro(){

    tabuleiro.innerHTML = "";

    for(let i=1;i<=30;i++){

        const casa = document.createElement("div");

        casa.classList.add("casa");

        casa.id = "casa-"+i;

        casa.innerHTML = i;

        tabuleiro.appendChild(casa);

    }

}

criarTabuleiro();

/* =========================================
   CORES VISUAIS
========================================= */

const coresContainer = document.getElementById("coresJogadores");

cores.forEach(item=>{

    const div = document.createElement("div");

    div.classList.add("cor-card");

    div.innerHTML = `
    
    <div class="cor-preview" style="background:${item.cor};"></div>
    <span class="cor-nome">${item.nome}</span>
    
    `;

    div.addEventListener("click",()=>{

        if(coresSelecionadas.includes(item.cor)){

            coresSelecionadas =
            coresSelecionadas.filter(c=>c !== item.cor);

            div.classList.remove("selected");

        }else{

            coresSelecionadas.push(item.cor);

            div.classList.add("selected");

        }

    });

    coresContainer.appendChild(div);

});

/* =========================================
   COMEÇAR PARTIDA
========================================= */

btnComecar.addEventListener("click",()=>{

    jogadores = [];

    const modoSelecionado = modo.value;

    if(modoSelecionado == "1"){

        jogadores.push({
            nome:"Jogador 1",
            cor:"cyan",
            posicao:0,
            pontos:0
        });

    }else{

        const qtd =
        parseInt(quantidadeJogadores.value);

        for(let i=0;i<qtd;i++){

            jogadores.push({
                nome:"Jogador "+(i+1),
                cor:coresSelecionadas[i] || cores[i].cor,
                posicao:0,
                pontos:0
            });

        }

    }

    jogadorAtual = 0;

    atualizarPainel();
    desenharJogadores();

});

/* =========================================
   ATUALIZAR PAINEL
========================================= */

function atualizarPainel(){

    const jogador = jogadores[jogadorAtual];

    jogadorAtualTxt.innerText = jogador.nome;
    posicaoAtualTxt.innerText = jogador.posicao;
    pontuacaoAtualTxt.innerText = jogador.pontos;

}

/* =========================================
   DESENHAR JOGADORES
========================================= */

function desenharJogadores(){

    document.querySelectorAll(".peca")
    .forEach(p=>p.remove());

    jogadores.forEach(j=>{

        if(j.posicao > 0){

            const casa =
            document.getElementById(
            "casa-"+j.posicao
            );

            const peca =
            document.createElement("div");

            peca.classList.add("peca");

            peca.style.background = j.cor;

            casa.appendChild(peca);

        }

    });

}

/* =========================================
   DADO
========================================= */

btnDado.addEventListener("click",jogarDado);

function jogarDado(){

    if(jogadores.length <= 0) return;

    btnDado.disabled = true;

    let animacao = 0;

    const intervalo = setInterval(()=>{

        dado.innerText =
        Math.floor(Math.random()*6)+1;

        animacao++;

        if(animacao >= 12){

            clearInterval(intervalo);

            const valor =
            Math.floor(Math.random()*6)+1;

            dado.innerText = valor;

            moverJogador(valor);

            btnDado.disabled = false;

        }

    },100);

}

/* =========================================
   MOVIMENTAÇÃO
========================================= */

function moverJogador(valor){

    const jogador = jogadores[jogadorAtual];

    jogador.posicao += valor;

    if(jogador.posicao > 30){

        jogador.posicao = 30;

    }

    atualizarPainel();
    desenharJogadores();

    if(minas.includes(jogador.posicao)){

        mostrarResultado(
        "💥",
        "Você caiu em uma mina!"
        );

        setTimeout(()=>{

            jogador.posicao = 0;

            desenharJogadores();
            atualizarPainel();

            proximoJogador();

        },2000);

        return;

    }

    if(jogador.posicao >= 30){

        document.getElementById(
        "mensagemVitoria"
        ).innerText =
        jogador.nome +
        " venceu com " +
        jogador.pontos +
        " pontos!";

        modalVitoria.style.display = "flex";

        return;

    }

    abrirPergunta();

}

/* =========================================
   ABRIR PERGUNTA
========================================= */

function abrirPergunta(){

    perguntaAtual =
    perguntas[
    Math.floor(
    Math.random()*perguntas.length
    )
    ];

    perguntaTxt.innerText =
    perguntaAtual.pergunta;

    altA.innerText =
    "A) " + perguntaAtual.A;

    altB.innerText =
    "B) " + perguntaAtual.B;

    altC.innerText =
    "C) " + perguntaAtual.C;

    modalPergunta.style.display = "flex";

    tempo = 15;

    tempoTxt.innerText = tempo;

    barraTempo.style.width = "100%";

    timer = setInterval(()=>{

        tempo--;

        tempoTxt.innerText = tempo;

        barraTempo.style.width =
        (tempo/15)*100 + "%";

        if(tempo <= 0){

            clearInterval(timer);

            modalPergunta.style.display = "none";

            mostrarResultado(
            "⏰",
            "Tempo esgotado!"
            );

            setTimeout(()=>{
                proximoJogador();
            },1800);

        }

    },1000);

}

/* =========================================
   RESPONDER
========================================= */

function responder(letra){

    clearInterval(timer);

    const jogador = jogadores[jogadorAtual];

    let botao;

    if(letra == "A") botao = altA;
    if(letra == "B") botao = altB;
    if(letra == "C") botao = altC;

    if(letra == perguntaAtual.correta){

        jogador.pontos += 10;

        botao.classList.add("correta");

        setTimeout(()=>{

            botao.classList.remove("correta");

            modalPergunta.style.display = "none";

            atualizarPainel();

            mostrarResultado(
            "✅",
            "Resposta correta!"
            );

            setTimeout(()=>{
                proximoJogador();
            },1800);

        },1200);

    }else{

        botao.classList.add("errada");

        setTimeout(()=>{

            botao.classList.remove("errada");

            modalPergunta.style.display = "none";

            mostrarResultado(
            "❌",
            "Resposta errada!"
            );

            setTimeout(()=>{
                proximoJogador();
            },1800);

        },1200);

    }

}

/* =========================================
   MODAL RESULTADO
========================================= */

function mostrarResultado(emoji,texto){

    document.getElementById(
    "emojiResultado"
    ).innerText = emoji;

    document.getElementById(
    "textoResultado"
    ).innerText = texto;

    modalResultado.style.display = "flex";

    setTimeout(()=>{

        modalResultado.style.display = "none";

    },1800);

}

/* =========================================
   PRÓXIMO JOGADOR
========================================= */

function proximoJogador(){

    jogadorAtual++;

    if(jogadorAtual >= jogadores.length){

        jogadorAtual = 0;

    }

    atualizarPainel();

}

/* =========================================
   REINICIAR
========================================= */

function reiniciar(){

    location.reload();

}