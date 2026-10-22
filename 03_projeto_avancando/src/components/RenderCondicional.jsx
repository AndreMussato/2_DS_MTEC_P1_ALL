//Importa o hook useState do React
//Serve para criar e controlar o estado dentro do componente
import { useState } from "react";

//Declaração do componente funcional RenderCondicional
const RenderCondicional = () => {

    //Cria um estado chamado "x"
    //Aqui você está pegando apenas o valor (false)
    //Não pegou a função de atualização (setX), então x nunca muda
    const [x] = useState(true);

    //Cria um estado chamado "cor"
    //cor - valor atual
    //setCor - função para atualizar o valor
    const [cor, setCor] = useState("Rosa");

    return (
        <>
            <div>
                {/* Título */}
                <h1>Isso será exibido?</h1>

                {/* Renderização condicional com operaador &&
                Só aparece se x for true */}
                {x && <p>X é Verdadeiro!</p>}

                {/* Aqui usamos !x (negação)
                Só aparece se x for false */}
                {!x && <p>Agora X é falso!</p>}

                {/* Título da próxima seção */}
                <h1>If Ternário</h1>

                {/* Operador ternário (if/else no JSX) */}
                {/* Se cor === "Rosa" - mostra o primeiro Texto
                Senão - vai mostrar o segundo texto */}
                {cor === "Rosa" ? (
                    <p>É Rosa mesmo, João?</p>
                ) : (
                    <p>Não é Rosa!</p>
                )}

                {/* Botão que altera o estado "cor"
                    Ao clicar - muda o valor para "Azul" */}
                <button onClick={() => setCor("Azul")}>
                    Mudar Cor
                </button>
            </div>
        </>
    )

}

//Exporta o componente para ser usado em outros arquivo
export default RenderCondicional;