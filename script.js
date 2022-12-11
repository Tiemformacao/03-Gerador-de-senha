// 1º pegar a quantidade de caracteres que o usuário quer gerar, no caso, selecionando o input.
// O input do tipo 'ranger' tem o id chamado slider.
let sliderElement = document.querySelector('#slider');

// 2º pegar a função de click no botão para executar um algoritimo que será criado.
// O botão tem o id chamado button.
let buttonElemet = document.querySelector('#button');


// Vamos pegar o elemento span que vai mostrar a quantidade de caracteres. Tem o id de nome 'valor'.
let sizePassword = document.querySelector('#valor');

// Vamos pegar o elemento que mostrará a senha que será gerada.
let password = document.querySelector('#password');

// Vamos selecionar o elemento div para que possamos mostrar seu conteúdo na tela, já que ele ainda está invisível. Pois com a classe:hide lá no CSS, nos tornamos essa div, invisível.
// container-password é o id que demos a essa div.
let containerPassword = document.querySelector('#container-password')



// Algoritmo para gerar a senha.

// Vamos estabelecer quais caracteres podem ser escolhidos pelo usuário.
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let novaSenha = '';


sizePassword.innerHTML = sliderElement.value;



// Fazer que, a medida que mova a bolinha do input, aumente ou diminua a quantidade de caracteres mostrada na frase acima (exatamente no span que estabelecemos). Pois com o código acima, está com o valor que estabelecemos no input. Ou seja, só com o código acima, mesmo mexendo a bolinha, vai ficar um valor fixo, aquele que estabelecemos no próprio elemento.
// O código abaixo vai fazer com que, a medida que o usuário mova a bolinha, os valores relativos a quantidade de caracteres vai modificando.

// O evento 'oninput' ocorre quando um elemento recebe a entrada do usuário. O EVENTO OCORRE QUANDO O VALOR DE UM ELEMENTO <input> ou <textarea> É ALTERADO.
// Então, o sizePassword vai receber o valor que tem atualmente no input. Toda vez que o usuário modificar o valor, o sizePassword vai recebê-lo.
slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}


// Vamos criar uma função para gerar a senha.
// Levamos o nome da função até o elemento html button e colocamos no evento onclick.
// n = charset.length é para pegar o tamanho do charset. Charset é o nome dado a variável e length é para saber o tamanho da sequência de caracteres.
// charset é o nome da nossa variável que está todos os caracteres.
// charAt() retorna o caractere em um índice especificado (posição) em uma string.
// Math.floor é para gerar um número inteiro. O Math.floor()método arredonda um número PARA BAIXO para o inteiro mais próximo.
// Math.random retorna um número aleatório de 0 (inclusive) até, mas não incluindo 1 (exclusivo). Por isso que tem que multiplicar pelo valor do tamanho do charset(que é o tamanho da lista de caracteres). Essa multiplicação nos fornece o índice, e o valor desse índice é que será colocado na senha.
function generatePassword() {
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    // Remover a classe hide que está fazendo com que o campo fique escondido.
    containerPassword.classList.remove('hide');
    
    
    // Colocando a senha gerada no campo próprio.
    password.innerHTML = pass;


    // Depois de gerada a senha ela será repassada para a variável 'novaSenha'(já criada acima).
    novaSenha = pass;
}


// Função que copia a senha quando clicado.
function copyPassword() {
    navigator.clipboard.writeText(novaSenha); 
    alert('Senha copiada com sucesso!')   
}


 




