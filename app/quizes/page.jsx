"use client";
import { quiz as Composer } from "../composerData.js";
import { quiz1 as Opera1 } from "../operaData.js";
import { quiz2 as Opera2 } from "../opera2Data.js";
import Page from "../quiz/page.jsx";
import Header from "../components/Header";
import { Fragment, useState } from "react";

import styles from "./page.module.scss";
import Link from "next/link.js";

const StartMenu = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {selectedQuiz === "composer" ? (
            <Page data={Composer} />
          ) : selectedQuiz === "opera1" ? (
            <Page data={Opera1} />
          ) : selectedQuiz === "opera2" ? (
            <Page data={Opera2} />
          ) : (
            <div>
              <button onClick={() => handleQuizSelect("composer")}>
                Композитор
              </button>
              <Link href="../quizGenre/">Жанры творчества</Link>
              <button onClick={() => handleQuizSelect("opera1")}>
                Опера «Иван Сусанин»
              </button>
              <button onClick={() => handleQuizSelect("opera2")}>
                Опера «Руслан и Людмила»
              </button>
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default StartMenu;
