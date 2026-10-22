//Importação do hook use state do react para manipular estados dentro do componente
import { useState } from 'react'

import Aluno from "./Aluno"

import Desafio from "./Desafio"

import Produto from "./Produto"

//O componente principal da aplicação
function App() {

  //Cria uma variável de estado chamada "nome" com valor inicial "Ferrari"
  //A função "setNome" permite alterar o valor de "nome"
  let [nome, setNome] = useState("Ferrari");

  //Função chamada ao clicar no botão para alterar o nome do aluno
  function alterarNome() {
    //Altera o valor de "nome" para "Lamborghini"
    setNome("Lamborghini");
  }

  return (
    <>
      {/* Primeiro H1 */}
      <h1>Olá Mundo!</h1>
      <hr />

      {/* Chamando/renderizando o componente Disc
      CASO,  esse chamado seja APAGADO, o conteúdo do componente Disc
      não aparecerá na tela inicial.*/}
      <Disc />

      <Prof />

      <Aluno nome="Azarite" idade="15" />

      <hr />
      {/* DESAFIO 1:
        1 - Crie um componente em um novo arquivo .jsx chamado: Desafio
        2 - Importe esse componente em App.jsx
        3 - No componente criado faça duas variáveis constantes com 
          valores numéricos
        4 - Imprima os valores no componente
        5 - Mostre a soma desses dois valores.
        
        Dicas: 
        1 - Não necessita a utilização de props
        2 - Para a criação de variáveis, elas devem ser criadas dentro 
          da function, porém, fora do return.
        3 - Para utilizar js dentro do return deve-se colocar em {}
        */}
      <Desafio />

      {/* DESAFIO 2:
        1 - Crie um componente em um novo arquivo .jsx chamado: Produto
        2 - Importe esse componente em App.jsx
        3 - No componente criado faça o recebimento de 5 props sendo elas:
              codigo, nome, valor, quantEstoque, categoria
        4 - Imprima o componente enviando os valores das props
        
        Dicas: 
        1 - Necessita a utilização de props
        */}
      <hr />
      <Produto codigo="54915165" nome="iPhone 14" valor="3.249,00" quantEstoque="10" categoria="Smartphone" />

      {/* Exibe dinamicamente o valor atual da variavel "nome" */}
      <h2>{nome}</h2>

      {/* Botão que, ao ser clicado, chama a função alterarNome */}
      <button onClick={alterarNome}>
        Mudar Nome
      </button>
    </>
  )
}

//Declaração de um componente secundáro chamado Disc
//Este componente "Disc" pode ser utilizado dentro deste arquivo,
//mas pode ser utilizado por qualquer outro componente criado aqui.
function Disc() {
  return (
    <>
      <h1>Programação Web</h1>
    </>
  )
}

function Prof() {
  return (
    <>
      <p>Prof. André Mussato.</p>
    </>
  )
}

export default App
