import React from "react";
import styles from "./Styles-modules/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.Presentacion}>Parcial Front-End 3 / Stehania Martheyn</p>
            <a className={styles.MiGitHub} href="https://github.com/Stephania-Martheyn"> Accede a mi GitHub &#127872; </a>

        </footer>

    );
  }