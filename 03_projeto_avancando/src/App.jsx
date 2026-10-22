//Importa o hook useState do React
import { useState } from "react";

//Importa uma imagem da pasta assets
//O React trata isso como um módulo e gera um caminho válido
import Serie from './assets/serie.jpg';

//Importa o componente AlteraValor criado
import AlteraValor from "./components/AlteraValor";

//Importa o componente de renderização condicional
//Responsável por mostrar elementos baseado em condições (if, &&,  ternário)
import RenderCondicional from "./components/RenderCondicional";

//Importa o componente de renderização de lista
import RenderLista from "./components/RenderLista";
import DetalhesUsuarios from "./components/DetalhesUsuarios";

function App() {

  const pessoas = [
    { id: 1, nome: "Bethy do Tigrinho", idade: 17, profissao: "Estudante" },
    { id: 2, nome: "Isac Newton", idade: 16, profissao: "Estudante" },
    { id: 3, nome: "Gaybriel", idade: 16, profissao: "Estudante" },
    { id: 4, nome: "Ferrari", idade: 16, profissao: "Estudante" },
    { id: 5, nome: "André Mussato", idade: 31, profissao: "Professor de Programação" },
    { id: 6, nome: "Bruno", idade: 26, profissao: "Professor de Matemática" },
  ]

  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>

        {/* IMAGEM EM PUBLIC */}
        {/* Aqui a imagem está na pasta /public
        que pode ser acessada diretamente pelo caminho */}
        <img src="/onepiece.jpg" alt="One Piece" />

        {/* IMAGEM EM ASSETS */}
        <div>
          {/* Aqui a imagem foi importada no inicio do arquivo,
          usamos a variavel Serie como src */}
          <img src={Serie} alt="Imagem da Serie" />
        </div>

        <hr />
        {/* Renderiza o componente que demonstra o uso de useState */}
        <AlteraValor />

        <hr />
        {/* Renderiza o componente de condição
        Mostra conteúdos diferentes dependendo do estado  */}
        <RenderCondicional />


        {/* Renderiza o componente de lista
        Aqui será exibido um array de dados na tela */}
        <RenderLista />

        {/* DESAFIO 
        1 - Crie um array de objetos composto de pessoas, com as propriedades de:
          nome, idade e profissão (array com pelo menos 3 itens); (deve estar na App)
        2 - Os dados devem ser exibidos em um componente DetalhesUsuarios, que você deve
        criar, todas as informações devem ser exibidas;
        3 - Faça uma renderização condicional que exibe se o usuário pode tirar carteira
        de habilitação ou não, imprima isso também no componente
        4 - A informação pode ser exibida num parágrafo (checar se idade >= 18)
        */}

        <hr />
        <h1>Desafio</h1>
        {pessoas.map((pessoa) => (
          <DetalhesUsuarios
            key={pessoa.id}
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}

      </div>
    </>
  )
}

export default App