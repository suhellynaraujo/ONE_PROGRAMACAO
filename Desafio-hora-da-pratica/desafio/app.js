
alert('Boas boas-vindas ao nosso site!')
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos.';

nome = prompt('Qual seu nome?');
idade = prompt('Digite sua idade: ');

if(nome == "" || idade == ""){
    
    alert(mensagemDeErro)

    nome = prompt('Qual seu nome?');
    idade = prompt('Digite sua idade: ');

    if(nome == !null || idade == !null){

        if(idade <= 18){
            alert('Pode tirar a habilitação!');        
        }
        else{
            alert('Menor de 18 anos, não está apto(a)!');
        }
    }
}



