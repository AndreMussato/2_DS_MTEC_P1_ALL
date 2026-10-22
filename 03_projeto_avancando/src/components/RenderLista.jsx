//importa o hook do React
//UseState é Usado para armazenar e gerenciar estado
import { useState } from "react";

//Declaração do componente funcional
function RenderLista() {

    //Cria um estado chamado "lista" com um array de nomes
    //Aqui não usamos setLista, então a lista é fixa
    const [lista] = useState(["Bethy do Tigrinho", "Ferrari", "Gaybriel", "Du Dudu e Edu", "Isac Newton"]);


    //Cria um estado chamado "alunos" com um array de objetos
    //Cada objeto representa um aluno com rm, nome e idade
    const [alunos] = useState([
        { rm: 10420, nome: "Bethy do Tigrinho", idade: 17 },
        { rm: 10427, nome: "Ferrari", idade: 16 },
        { rm: 10279, nome: "Gaybriel", idade: 16 },
        { rm: 10393, nome: "Du Dudu e Edu", idade: 16 },
        { rm: 10240, nome: "Isac Newton", idade: 16 },
    ]);

    //Retorno do componente (O que será exibido na tela)
    return (
        <>
        <div>
            {/* Lista simples de nomes */}
            <ul type="circle">
                {/* map percorre o array e retorna um elemento para cada item */}
                {lista.map((item, i) => (
                    //key é obrigatório para o React identificar cada item
                    <li key={i}> {item} </li>
                ))}
            </ul>

            {/* Lista de objetos (mais comum em projetos com banco de dados) */}
            <ol type="I">
                {/* Percorre o array de alunos */}
                {alunos.map((aluno) => (
                    //Aqui usamos o rm como key (melhor prática)
                    <li key={aluno.rm}>
                        {/* Exibe o nome e a idade */}
                        {aluno.nome} - {aluno.idade}
                    </li>
                ))}
            </ol>
        </div>
        </>
    )
}

//Exporta o componente
export default RenderLista;