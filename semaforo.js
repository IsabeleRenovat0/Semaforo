const img = document.getElementById('img');
const botoes = document.getElementById('botoes');
let corIndex = 0;
let intervalId = null;

const semaforo = (event) =>{
    pararAuto();
    console.log = (event.target.id);
}

const nextIndex = () => {

corIndex = corIndex < 2 ? corIndex++ : 0;

    if(corIndex < 2){
        corIndex++
    }else{
        corIndex = 0;
    }
}

const alteracor = () => {
    const cores = ['vermelho', 'amarelo', 'verde']
    const cor = cores [corIndex];
    turnOn[cor]();
    nextIndex;
}

const pararAuto = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval(alteracor, 1000)
}

botoes.addEventListener('click', semaforo);