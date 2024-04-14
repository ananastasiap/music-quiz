"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import Header from "../components/Header";

const MenuGames = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="../game1/" className={styles.btnGame}>
            Игра 1
          </Link>
          <br />
          <Link href="../game2/" className={styles.btnGame}>
            Игра 2
          </Link>
        </div>
      </main>
    </>
  );
};

export default MenuGames;
