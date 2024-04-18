"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { musicSing1 } from "../musicSingData.js";
import { musicDance1 } from "../musicDanceData.js";
import styles from "./page.module.scss";

const Game1 = () => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [correctPair, setCorrectPair] = useState(false);
  const [wrongPair, setWrongPair] = useState(false);

  const checkPair = (cellId) => {
    setSelectedCells((prevSelectedCells) => {
      const cellIndex = prevSelectedCells.indexOf(cellId);
      if (cellIndex !== -1) {
        return prevSelectedCells.filter((id) => id !== cellId);
      } else {
        return [...prevSelectedCells, cellId];
      }
    });
  };

  useEffect(() => {
    if (selectedCells.length === 2) {
      const cell1Text = document
        .getElementById(selectedCells[0])
        .innerText.trim();
      const cell2Text = document
        .getElementById(selectedCells[1])
        .innerText.trim();

      if (
        ((cell1Text === "1 Действие" &&
          cell2Text ===
            "Характеристика русских. Музыка основана на интонациях русских песен и романсов") ||
          (cell1Text ===
            "Характеристика русских. Музыка основана на интонациях русских песен и романсов" &&
            cell2Text === "1 Действие")) &&
        selectedCells.includes("cell1") &&
        selectedCells.includes("cell7")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "2 Действие" &&
          cell2Text ===
            "Характеристика поляков. Танцы: полонез, краковяк, вальс, мазурка") ||
          (cell1Text ===
            "Характеристика поляков. Танцы: полонез, краковяк, вальс, мазурка" &&
            cell2Text === "2 Действие")) &&
        selectedCells.includes("cell2") &&
        selectedCells.includes("cell6")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "3 Действие" &&
          cell2Text ===
            "Конфликт. Поляки врываются в дом Ивана Сусанина. Столкновение «Столкновение» тем русских и поляков (столкновение вокального и инструментального начал)") ||
          (cell1Text ===
            "Конфликт. Поляки врываются в дом Ивана Сусанина. Столкновение «Столкновение» тем русских и поляков (столкновение вокального и инструментального начал)" &&
            cell2Text === "3 Действие")) &&
        selectedCells.includes("cell3") &&
        selectedCells.includes("cell8")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "4 Действие" &&
          cell2Text === "Подвиг и гибель Ивана Сусанина") ||
          (cell1Text === "Подвиг и гибель Ивана Сусанина" &&
            cell2Text === "4 Действие")) &&
        selectedCells.includes("cell4") &&
        selectedCells.includes("cell10")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "Эпилог" &&
          cell2Text === "Праздник на Красной площади") ||
          (cell1Text === "Праздник на Красной площади" &&
            cell2Text === "Эпилог")) &&
        selectedCells.includes("cell5") &&
        selectedCells.includes("cell9")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else {
        setWrongPair(true);
        setTimeout(() => {
          setWrongPair(false);
          setSelectedCells([]);
        }, 2000);
      }
    }
  }, [selectedCells]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const allQuestions = [...musicSing1.questions, ...musicDance1.questions];

  const handleAnswerClick = (questionId, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const calculateResults = () => {
    let correctCount = 0;
    allQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const showResult = () => {
    setShowResults(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td
                id="cell1"
                onClick={() => checkPair("cell1")}
                className={`${
                  selectedCells.includes("cell1") ? styles.selected : styles.td
                } ${styles.tdFirst}`}
              >
                1 Действие
              </td>
              <td
                id="cell6"
                onClick={() => checkPair("cell6")}
                className={
                  selectedCells.includes("cell6") ? styles.selected : styles.td
                }
              >
                Характеристика поляков. Танцы: полонез, краковяк, вальс, мазурка
              </td>
            </tr>
            <tr>
              <td
                id="cell2"
                onClick={() => checkPair("cell2")}
                className={`${
                  selectedCells.includes("cell2") ? styles.selected : styles.td
                } ${styles.tdFirst}`}
              >
                2 Действие
              </td>
              <td
                id="cell7"
                onClick={() => checkPair("cell7")}
                className={
                  selectedCells.includes("cell7") ? styles.selected : styles.td
                }
              >
                Характеристика русских. Музыка основана на интонациях русских
                песен и романсов
              </td>
            </tr>
            <tr>
              <td
                id="cell3"
                onClick={() => checkPair("cell3")}
                className={`${
                  selectedCells.includes("cell3") ? styles.selected : styles.td
                } ${styles.tdFirst}`}
              >
                3 Действие
              </td>
              <td
                id="cell8"
                onClick={() => checkPair("cell8")}
                className={
                  selectedCells.includes("cell8") ? styles.selected : styles.td
                }
              >
                Конфликт. Поляки врываются в дом Ивана Сусанина. Столкновение
                «Столкновение» тем русских и поляков (столкновение вокального и
                инструментального начал)
              </td>
            </tr>
            <tr>
              <td
                id="cell4"
                onClick={() => checkPair("cell4")}
                className={`${
                  selectedCells.includes("cell4") ? styles.selected : styles.td
                } ${styles.tdFirst}`}
              >
                4 Действие
              </td>
              <td
                id="cell9"
                onClick={() => checkPair("cell9")}
                className={
                  selectedCells.includes("cell9") ? styles.selected : styles.td
                }
              >
                Праздник на Красной площади
              </td>
            </tr>
            <tr>
              <td
                id="cell5"
                onClick={() => checkPair("cell5")}
                className={`${
                  selectedCells.includes("cell5") ? styles.selected : styles.td
                } ${styles.tdFirst}`}
              >
                Эпилог
              </td>
              <td
                id="cell10"
                onClick={() => checkPair("cell10")}
                className={
                  selectedCells.includes("cell10") ? styles.selected : styles.td
                }
              >
                Подвиг и гибель Ивана Сусанина
              </td>
            </tr>
          </tbody>
        </table>
        {correctPair && <p className={styles.right}>Правильно!</p>}
        {wrongPair && <p className={styles.wrong}>Неправильно!</p>}
      </div>

      <div className={`${styles.container} ${styles.containerQuiz}`}>
        <h2 className={styles.titleSection}>Кто поёт?</h2>
        <div className={styles.quizContainer}>
          {musicSing1.questions.map((question) => (
            <div key={question.id} className={styles.questionContainer}>
              <audio
                controls
                src={question.audio_file}
                className={styles.audio}
              />
              <div className={styles.imageContainer}>
                {question.images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.image} ${
                      selectedAnswers[question.id] === image && styles.selected
                    } ${
                      showResults &&
                      image === question.correctAnswer &&
                      styles.correct
                    } ${
                      showResults &&
                      image !== question.correctAnswer &&
                      selectedAnswers[question.id] === image &&
                      styles.incorrect
                    }`}
                    onClick={() => handleAnswerClick(question.id, image)}
                  >
                    <img
                      src={image}
                      alt={`Option ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.titleSection}>Какой танец?</h2>
        <div className={styles.quizContainer}>
          {musicDance1.questions.map((question) => (
            <div key={question.id} className={styles.questionContainer}>
              <audio
                controls
                src={question.audio_file}
                className={styles.audio}
              />
              <div className={styles.imageContainer}>
                {question.images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.image} ${
                      selectedAnswers[question.id] === image && styles.selected
                    } ${
                      showResults &&
                      image === question.correctAnswer &&
                      styles.correct
                    } ${
                      showResults &&
                      image !== question.correctAnswer &&
                      selectedAnswers[question.id] === image &&
                      styles.incorrect
                    }`}
                    onClick={() => handleAnswerClick(question.id, image)}
                  >
                    <img
                      src={image}
                      alt={`Option ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={showResult} className={styles.showResultButton}>
          Ответы
        </button>
        {showResults && (
          <div className={styles.results}>
            <h2>
              Молодцы! {calculateResults()} из{" "}
              {musicDance1.questions.length + musicSing1.questions.length}.
            </h2>
          </div>
        )}
      </div>
      <Link href="../games/" className={styles.exit}>
        Выйти
      </Link>
    </main>
  );
};

export default Game1;
