
import { useState } from "react";

import MyComponent from "./components/MyComponent";

import Title from "./components/Title";

function App() {

  const n = 5;

  const nome = 'André';

  return (
    <>
      {/* CSS Global */}
      <h1> CSS COM REACT </h1>

      {/* CSS DE COMPONENTE */}
      <MyComponent />

      {/* Paragrafo Global */}
      <p>Paragrafo Global</p>

      {/* INLINE CSS 
    Estilização aplicada diretamente no elemento */}
      <p style={{ color: "pink", padding: "25px", borderTop: "2px solid red" }}>
        Esse paragrafo foi estilizado de forma inline
      </p>

      {/* CSS DINÂMICO
      Se n for menor que 10, a cor será roxa; caso contráro, rosa */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
        CSS DINÂMICO
      </h2>

      {/* Se o nome for André, aplica a cor verde e fundo preto senão o
      estilo fica null */}
      <h2 style={nome === "André" ?
        ({ color: "green", backgroundColor: 'black' }) : null}>
        CSS Dinâmico - Teste Nome
      </h2>

      {/* 
        Pergunta de Prova: Qual a diferença entre '=' e '==' e '==='
        R: = - Atribui um valor a uma variavel
        == - Comparação mas leva em consideração apenas o 
                                          valor da variavel
        === - Comparação também, mas leva em consideração 
                              o valor e o tipo da variável.
      */}

      {/* CSS MODULES
      Renderiza o componente Title, que usa CSS Modules */}
      <Title />

      {/* DESAFIO 
        1 - Crie um novo projeto chamado 5_desafio_css;
        2 - No CSS global zere a margin, padding, coloque a fonte verdana
             e texto alinhado ao centro;
        3 - Crie um componente que exibe detalhes do seu tema, este componente 
            deve ser estilizado com scoped;
        4 - Exiba pelo menos 5 itens do seu tema;
        5 - Coloque um título em App.js para o seu projeto, estilize com o App.css;
      */}

    </>
  )
}

export default App;