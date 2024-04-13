import Link from "next/link";
import styles from "./StartMenu.module.scss";

const StartMenu = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link href="../../quizes/">Тесты</Link>
          </li>
          <li className={styles.menu__item}>
            <Link href="../../games/">Игры</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default StartMenu;
