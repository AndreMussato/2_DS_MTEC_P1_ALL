function Card(props) {

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
          width: "300px"
        }}
      >
        <h2>{props.nome}</h2>

        <p>RM: {props.rm}</p>
        <p>Idade: {props.idade}</p>
        <p>Turma: {props.turma}</p>
        <p>Cidade: {props.cidade}</p>
        <p>Nota: {props.nota}</p>

        {props.status ? (
          <p>Disponível</p>
        ) : (
          <p>Indisponível</p>
        )}
      </div>
    </>
  );
}

export default Card;