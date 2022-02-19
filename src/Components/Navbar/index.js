import styles from "./index.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.listElement}><a href="" className={styles.navlink}>About</a></li>
                <li className={styles.listElement}><a href="" className={styles.navlink}>Projects</a></li>
                <li className={styles.listElement}><a href="" className={styles.navlink}>Contact</a></li>
                
            </ul>
        </nav>
    )
}