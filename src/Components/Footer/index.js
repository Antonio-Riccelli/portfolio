import styles from "./index.module.css"

export default function Footer(){
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.motto}>Amor Sola Lex</p>
            <p className={styles.copyright}>ANTONIO RICCELLI &copy; <span id="year" title="I am dynamically updated 😎">{year}</span></p>
        </footer>
    )
}