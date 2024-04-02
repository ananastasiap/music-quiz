"use client";
import { quiz as Composer } from "@/app/composerData";
import { quiz1 as Opera } from "@/app/operaData";
import Page from "@/app/quiz/page";
import { useState } from "react";

const StartMenu = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <main>
      <div className="container">
        {selectedQuiz === "composer" ? (
          <Page data={Composer} />
        ) : selectedQuiz === "opera" ? (
          <Page data={Opera} />
        ) : (
          <div>
            <h1>Выберите квиз</h1>
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
