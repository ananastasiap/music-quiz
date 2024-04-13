"use client";
import { useState } from "react";
import "./page.scss";

const Page = ({ data }) => {
  if (!data || !data.questions) {
    console.error("Data or questions array is undefined!");
    return null;
  }
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndexes, setSelectedAnswerIndexes] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showCheckButton, setShowCheckButton] = useState(true);
  const [answerFeedback, setAnswerFeedback] = useState([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const { questions } = data;
  const { answers, correctAnswer } = questions[activeQuestion];

  const handleAnswerSelected = (answerIndex) => {
    if (showResult || isAnswerChecked) {
      return;
    }

    const newSelectedAnswerIndexes = [...selectedAnswerIndexes, answerIndex];

    setSelectedAnswerIndexes(newSelectedAnswerIndexes);
    setIsAnswerCorrect(null);
  };

  const checkAnswers = () => {
    const answerFeedback = answers.map((answer, idx) => {
      const isCorrect = correctAnswer.includes(answer);
      return {
        index: idx,
        isCorrect: isCorrect,
      };
    });

    setAnswerFeedback(answerFeedback);

    const selectedCorrectIndexes = selectedAnswerIndexes.filter((index) =>
      correctAnswer.includes(answers[index])
    );

    setResult((prevResult) => ({
      ...prevResult,
      score: prevResult.score + selectedCorrectIndexes.length,
      correctAnswers: prevResult.correctAnswers + selectedCorrectIndexes.length,
      wrongAnswers:
        prevResult.wrongAnswers +
        (selectedCorrectIndexes.length === selectedAnswerIndexes.length
          ? 0
          : 1),
    }));

    setShowCheckButton(false);
    setIsAnswerChecked(true);
  };

  const nextQuestion = () => {
    if (!showResult) {
      setShowCheckButton(true);
      setIsAnswerChecked(false);
    }
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
    setSelectedAnswerIndexes([]);
    setIsAnswerCorrect(null);
    setAnswerFeedback([]);
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
                    ? "li-selected"
                    : "li-hover"
                } ${
                  answerFeedback[idx]?.isCorrect
                    ? "li-correct"
                    : answerFeedback[idx]?.isCorrect === false
                    ? "li-incorrect"
                    : ""
                }`}
              >
                <span className="answer">{`· ${answer}`}</span>
              </li>
            ))}
            {showCheckButton ? (
              <button onClick={checkAnswers} className="btn btn-next">
                Проверить
              </button>
            ) : (
              <button onClick={nextQuestion} className="btn btn-next">
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
              {result.score} из{" "}
              {questions.length * questions[0].correctAnswer.length}
            </h3>
            <button onClick={handleExit}>Выход</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
