"use client";

import { useState } from "react";
import Link from "next/link";

import "./page.scss";

const Page = ({ data }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const { questions } = data;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const handleAnswerSelected = (answer, idx) => {
    if (showResult || answerSubmitted) {
      return;
    }

    setChecked(true);
    setSelectedAnswerIndex(idx);
    setIsAnswerCorrect(answer === correctAnswer);
    setAnswerSubmitted(true);
  };

  const nextQuestion = () => {
    if (!answerSubmitted) {
      return;
    }

    setSelectedAnswerIndex(null);
    setResult((prev) =>
      isAnswerCorrect
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
    setIsAnswerCorrect(null);
    setAnswerSubmitted(false);
  };

  return (
    <div className="container">
      <h1>{data.title}</h1>
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
                  selectedAnswerIndex === idx
                    ? isAnswerCorrect === null
                      ? "li-selected"
                      : isAnswerCorrect
                      ? "li-correct"
                      : "li-incorrect"
                    : "li-hover"
                }
              >
                <span className="answer">{`· ${answer}`}</span>
              </li>
            ))}
            {checked ? (
              <button
                onClick={nextQuestion}
                className={`btn ${
                  isAnswerCorrect ? "btn-correct" : "btn-incorrect"
                }`}
              >
                {activeQuestion === questions.length - 1
                  ? "Заканчиваем"
                  : "Дальше"}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {activeQuestion === questions.length - 1
                  ? "Заканчиваем"
                  : "Дальше"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Баллы</h3>
            <h3>
              {result.score} из {questions.length}
            </h3>
            <Link href="../page.js">Выход</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
