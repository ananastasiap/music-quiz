"use client";

import { useState } from "react";
import "./page.scss";

const Page = ({ data }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndexes, setSelectedAnswerIndexes] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const { questions } = data;
  const { answers, correctAnswer } = questions[activeQuestion];

  const handleAnswerSelected = (answerIndex) => {
    if (showResult || selectedAnswerIndexes.includes(answerIndex)) {
      return;
    }

    const newSelectedAnswerIndexes = [...selectedAnswerIndexes, answerIndex];

    const selectedAnswers = newSelectedAnswerIndexes.map(
      (index) => answers[index]
    );
    const isAnswerCorrect = selectedAnswers.every((answer) =>
      correctAnswer.includes(answer)
    );

    setSelectedAnswerIndexes(newSelectedAnswerIndexes);
    setIsAnswerCorrect(isAnswerCorrect);
  };

  const nextQuestion = () => {
    const allSelectedAnswersCorrect = selectedAnswerIndexes.every((index) =>
      correctAnswer.includes(answers[index])
    );

    setResult((prevResult) => ({
      ...prevResult,
      score: prevResult.score + (allSelectedAnswersCorrect ? 1 : 0),
      correctAnswers:
        prevResult.correctAnswers + (allSelectedAnswersCorrect ? 1 : 0),
      wrongAnswers:
        prevResult.wrongAnswers + (allSelectedAnswersCorrect ? 0 : 1),
    }));

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
    setSelectedAnswerIndexes([]);
    setIsAnswerCorrect(null);
  };

  const handleExit = () => {
    window.location.reload();
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
                onClick={() => handleAnswerSelected(idx)}
                className={`${
                  selectedAnswerIndexes.includes(idx)
                    ? isAnswerCorrect === null
                      ? "li-selected"
                      : isAnswerCorrect
                      ? "li-correct"
                      : "li-incorrect"
                    : "li-hover"
                }`}
              >
                <span className="answer">{`· ${answer}`}</span>
              </li>
            ))}
            {selectedAnswerIndexes.length > 0 ? (
              <button onClick={nextQuestion} className="btn btn-next">
                {activeQuestion === questions.length - 1
                  ? "Заканчиваем"
                  : "Дальше"}
              </button>
            ) : (
              <button disabled className="btn-disabled btn-next">
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
            <button onClick={handleExit}>Выход</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
