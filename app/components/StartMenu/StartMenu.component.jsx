"use client";
import { quiz as Composer } from "@/app/composerData";
import { quiz1 as Opera } from "@/app/operaData";
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
        ) : selectedQuiz === "opera" ? (
          <Page data={Opera} />
        ) : (
          <div>
            <button onClick={() => handleQuizSelect("composer")}>
              Композитор
            </button>
            <button onClick={() => handleQuizSelect("opera")}>Оперы</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default StartMenu;
