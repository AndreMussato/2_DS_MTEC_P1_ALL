import React from "react";

//Importa o arquivo de CSS Module 
//O CSS Modules permite que as classes sejam isoladas,
//evitando conflito com estilos de outros componentes
import styles from './Title.module.css';

function Title() {
    return (
        <>
        {/* O className recebe o styles.my_title
        por que estamos usando CSS Modules.
        
        A classe "my_title" deve existir
        dentro do arquivo Title.module.css */}
        <h1 className={styles.my_title}>Title</h1>
        </>
    )
}

export default Title;