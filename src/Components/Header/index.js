import Navbar from "../Navbar"
import styles from "./index.module.css"

export default function Header() {
return (
    <header className={styles.header}>
    <p className={styles.logo}>AR</p>
        <Navbar />
    </header>
)
}