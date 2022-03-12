import Link from "next/link"
import styles from "../../styles/Home.module.css"

export default function rockPaperScissors() {
    return (
        <div>
        <h1>Rock, Papers, Scissors</h1>
        <footer className={styles.footer}>
            <a href="/">click here to return home</a>
        </footer>
        </div>
    )
}
