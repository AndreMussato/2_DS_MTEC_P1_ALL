import { useState } from "react";

function App() {

  //Cria uma variavel estado chamada "nome"
  //e a função "setNome" para atualizá-la
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  //Cria a variavel "usuário", que será um objeto
  //contendo nome, email e idade
  const [usuario, setUsuario] = useState({});

  //Função executada quando o formulário for enviado
  function enviaDados(e) {
    /* preventDefault - esse evento é usado para não permitir
    que a página seja recacrregada após o envio de dados do
    form(submit). Assim o react atualiza o valor dos elementos do
    form sem recarregar a página toda! */
    e.preventDefault(); //Impede que o formulário recarregue a página.

    //Atualizar o estado "usuario" com os dados digitados
    //no formulário (nome, email e idade)
    setUsuario({
      nome: nome,
      email: email,
      idade: idade
    });
  }

  //O componente retorna a interface visual em jsx
  return (
    <>
    {/* Formulário com o evento onsubmit que chama a função enviaDados */}
    <form onSubmit={enviaDados}>
      <p>
        <label>Nome: </label>
      </p>
      {/* onChange é um evento usado em inputs (como, <input>,
      <textarea>, <select>) para detectar mudanças no valor
      digitado pelo usuário, ou seja, sempre que o usuário digita,
      apaga ou modifica o conteúdo de um campo, o onChange é acionado.
      e.target.value - target define o elemento que você deseja manipular.
      value - captura o valor do elemento especificado com target. */}
      <input type="text" placeholder="Digite seu nome" id="nome" 
        onChange={(e) => setNome(e.target.value)} />

      <p>
        <label>E-mail: </label>
      </p>
      <input type="email" placeholder="Digite seu e-mail" id="email"
      onChange={(e) => setEmail(e.target.value)} />

      <p>
        <label>Idade: </label>
      </p>
      <input type="text" placeholder="Digite sua idade" id="idade"
      onChange={(e) => setIdade(e.target.value)} />

      <p>
        {/* Botão que envia o formulário */}
        <button type="submit">Enviar</button>
      </p>      
    </form>
    </>
  )
}

export default App