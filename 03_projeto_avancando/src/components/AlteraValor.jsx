//Importa o hook useState do React
//Ele é usado para criar e gerenciar estados dentro do componente
import { useState } from "react";

//Declaração de um componente funcional chamado AlteraValor
const AlteraValor = () => {

    //Cria um estado chamado "numero"
    //numero - valor atual do estado
    //setNumero - função que atualiza o estado
    //useState(10) - valor inicial do estado é 10
    const [numero, setNumero] = useState(10);

    //Retorno do componente (o que será renderizado na tela)
    return (
        <>
            <div>
                {/* Exibe o valor atual do estado "numero" */}
                <p>Valor: {numero}</p>

                {/* Botão que ao ser clicado executa uma função */}
                {/* Ao clicar, o estado é atualizado para 15
                    Isso faz o React re-renderizar o componente */}
                <button onClick={() => setNumero(numero + 5)}>
                    Mudar Valor
                </button>
            </div>
        </>
    )
}

//Exporta o componente para ser usado em outros arquivos
export default AlteraValor;