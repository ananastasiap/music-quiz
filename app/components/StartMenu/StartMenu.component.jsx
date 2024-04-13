"use client";
import { quiz as Composer } from "@/app/composerData";
import { quiz1 as Opera1 } from "@/app/operaData";
import { quiz2 as Opera2 } from "@/app/opera2Data";
import Page from "@/app/quiz/page";
import { useState } from "react";

import styles from "./StartMenu.module.scss";

const StartMenu = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
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
  );
};

export default StartMenu;
