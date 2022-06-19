import React from "react";
import styles from "./Styles-modules/Cabecera.module.css";

export default function Cabecera({ cantidad }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Carrito de compras</h1>
      <p>&#x1F33C; Haz seleccionado  <span className={styles.contador}>{cantidad}</span> de productos &#x1F33C; </p>
    </header>
  );
}
