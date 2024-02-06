alert('Boas vindas ao jogo do número secreto');
let numerMaximo = 5000;
let numeroSecreto = parseInt(Math.random() + numerMaximo + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto chute não for igual ao numero secreto 
//!= não for igual (diferente)

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numerMaximo}`); 
    // se chute for igual ao número secreto
if (chute == numeroSecreto) { 
       breack;
} else {
    if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
} else {
        alert(`0 número secreto é maior que ${chute}`);
}
  tentativas++;
}
}
let palavraTentativa = tentativa > 1 ? 'testativas' : 'tentativa';
 alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);