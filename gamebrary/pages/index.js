import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamebrary</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Gamebrary!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/tic-tac-toe" className={styles.card}>
            <h2>Tic Tac Toe &rarr;</h2>
            <p>Play Tic Tac Toe on this page!</p>
          </a>

          <a href="/rock-paper-scissors" className={styles.card}>
            <h2>Rock, Paper, Scissors! &rarr;</h2>
            <p>Play Rock, Paper, Scissors on this page!</p>
          </a>

          <a
            href="/pokemon-generator"
            className={styles.card}
          >
            <h2>Random Pokemon generator &rarr;</h2>
            <p>Discover new Pokemon!.</p>
          </a>

          <a
            href="/coin-flipper"
            className={styles.card}
          >
            <h2>Coin flipper &rarr;</h2>
            <p>Flip a coin to settle a debate!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>Gamebrary</a>
      </footer>
    </div>
  );
}
