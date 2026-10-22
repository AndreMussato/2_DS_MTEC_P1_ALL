import { useState } from "react";
import Card from "./Card";

function App() {

  const [titulo, setTitulo] = useState("Lista de Alunos");

  const alunos = [
    {
      rm: 10240,
      nome: "João Silva",
      idade: 16,
      turma: "2° DS",
      cidade: "Jales",
      nota: 8.5,
      status: true
    },
    {
      rm: 10241,
      nome: "Maria Souza",
      idade: 17,
      turma: "2° DS",
      cidade: "Pontalinda",
      nota: 9.0,
      status: true
    },
    {
      rm: 10242,
      nome: "Pedro Santos",
      idade: 16,
      turma: "2° DS",
      cidade: "Urânia",
      nota: 7.5,
      status: false
    },
    {
      rm: 10243,
      nome: "Ana Lima",
      idade: 17,
      turma: "2° DS",
      cidade: "Jales",
      nota: 10,
      status: true
    },
    {
      rm: 10244,
      nome: "Carlos Oliveira",
      idade: 16,
      turma: "2° DS",
      cidade: "Santa Salete",
      nota: 6.5,
      status: false
    }
  ];

  return (
    <>
    
      <h1>André Mussato</h1>

      <hr /> 
      <h1>{titulo}</h1>

      <button onClick={() => setTitulo("Alunos da Turma")}>
        Alterar Título
      </button>


      <hr />

      {alunos.map((aluno) => (
        <Card
          key={aluno.rm}
          rm={aluno.rm}
          nome={aluno.nome}
          idade={aluno.idade}
          turma={aluno.turma}
          cidade={aluno.cidade}
          nota={aluno.nota}
          status={aluno.status}
        />
      ))}
    </>
  );
}

export default App;