import Link from "next/link"
import styles from "../../styles/Home.module.css"

export default function coinFlipper() {
    return (
        <div>
        <h1 id="coinFlipper">Coin Flipper</h1>
        <footer className={styles.footer}>
            <a href="/">click here to return home</a>
        </footer>
        </div>
    )
}
