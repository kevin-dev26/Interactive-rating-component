
let notaescolhida = document.querySelector('.nota-escolhida')
const cartaoAgradecimento = document.querySelector('.cartao-agradecimento')
const cartaoPesquisa = document.querySelector('.cartao-pesquisa')
const notasDaPesquisa = document.querySelectorAll('.nota')
const botaoSubmit = document.querySelector('.submit-button')
let notaEscolhidaFinal = 4 

/* 
Clicar na nota e pintar o fundo da nota com cinza mais claro, dar o classe, nota-escolhida para aquela nota e remover a classe de quem estiver com ela. 
*/


/* 
Ao clicar no botão de submit, esconde o cartão de pesquisa,
aparece o cartão de agradecimento.
 */
botaoSubmit.addEventListener('click', () => {
    cartaoPesquisa.classList.add('hide')
    cartaoAgradecimento.classList.remove('hide')
    cartaoPesquisa.classList.remove('ativo')
})




/* No cartão de agradecimento a nota é igual a escolhida no cartão de pesquisa.
 */


