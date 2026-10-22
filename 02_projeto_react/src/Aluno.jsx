//Declaração de um componente React chamado "Aluno"
//o (props) define que o comportamento irá receber alguma 
// prop que deverá renderizar
function Aluno(props) {
    return(
        <>
            <p>O Aluno {props.nome} tem {props.idade} anos de idade.</p>
        </>
    )
}

//Exporta o componente "Aluno" para que ele possa ser usado 
//em outros arquivos (como App.jsx)
export default Aluno