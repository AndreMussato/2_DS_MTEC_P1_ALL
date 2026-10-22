import React from "react";

import "./MyComponent.css"

function MyComponent() {
    return (
        <>
        {/* Título do componente */}
        <h1>CSS de Componente</h1>

        {/* Parágrafo utilizando uma classe CSS chamada
        'my-comp-paragraph' definida no arquivo MyComponent.css */}
        <p className="my-comp-paragraph">
            Paragrafo desse componente
        </p>
        </>
    )
}

export default MyComponent