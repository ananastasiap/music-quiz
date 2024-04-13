"use client";

import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        П
      </a>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <Link href="../../allQuestions/">Тесты</Link>
        </li>
        <li className={styles.menu__item}>
          <Link href="../../allQuestions/">Игры</Link>
        </li>
        <li className={styles.menu__item}>
          <Link href="../../allQuestions/">Все вопросы</Link>
        </li>
        <li className={styles.menu__item}>
          <Link href="../../about/">О проекте</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
