"use client";

import { useState } from "react";
import { quiz } from "../composerData";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const handleAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {};

  return (
    <div className="container">
      <h1>Композитор</h1>
      <div>
        <h2>
          Вопрос: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => handleAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === question.length - 1
                  ? "Заканчиваем"
                  : "Дальше"}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {activeQuestion === question.length - 1
                  ? "Заканчиваем"
                  : "Дальше"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container"></div>
        )}
      </div>
    </div>
  );
};

export default Page;
