"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { musicSing2 } from "../musicSing2Data.js";
import { musicDance2 } from "../musicDance2Data.js";
import styles from "./page.module.scss";

const Game2 = () => {
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
            "Свадебный пир. Киевский князь Светозар выдает дочь Людмилу за храброго витязя Руслана") ||
          (cell1Text ===
            "Свадебный пир. Киевский князь Светозар выдает дочь Людмилу за храброго витязя Руслана" &&
            cell2Text === "1 Действие")) &&
        selectedCells.includes("cell1") &&
        selectedCells.includes("cell10")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "2 Действие" &&
          cell2Text ===
            "От мудрого старца Финна Руслан узнает, что Людмилу похитил злой карлик Черномор. Поиски приводят Руслана на поле, усеянное костями воинов. Поле стережет огромная голова") ||
          (cell1Text ===
            "От мудрого старца Финна Руслан узнает, что Людмилу похитил злой карлик Черномор. Поиски приводят Руслана на поле, усеянное костями воинов. Поле стережет огромная голова" &&
            cell2Text === "2 Действие")) &&
        selectedCells.includes("cell2") &&
        selectedCells.includes("cell7")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "3 Действие" &&
          cell2Text ===
            "Волшебный замок Наины. Прекрасные девы заманили Ратмира, обольстив его песнями и танцами") ||
          (cell1Text ===
            "Волшебный замок Наины. Прекрасные девы заманили Ратмира, обольстив его песнями и танцами" &&
            cell2Text === "3 Действие")) &&
        selectedCells.includes("cell3") &&
        selectedCells.includes("cell6")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "4 Действие" &&
          cell2Text ===
            "В волшебных садах Черномора Людмила думает только о своем возлюбленном и отвергает все притязания злобного карлика") ||
          (cell1Text ===
            "В волшебных садах Черномора Людмила думает только о своем возлюбленном и отвергает все притязания злобного карлика" &&
            cell2Text === "4 Действие")) &&
        selectedCells.includes("cell4") &&
        selectedCells.includes("cell9")
      ) {
        setCorrectPair(true);
        setTimeout(() => {
          setCorrectPair(false);
          setSelectedCells([]);
        }, 1000);
      } else if (
        ((cell1Text === "5 Действие" &&
          cell2Text ===
            "Руслан с помощью волшебного перстня, который вручил ему Финн, освобождает Людмилу от чар Черномора") ||
          (cell1Text ===
            "Руслан с помощью волшебного перстня, который вручил ему Финн, освобождает Людмилу от чар Черномора" &&
            cell2Text === "5 Действие")) &&
        selectedCells.includes("cell5") &&
        selectedCells.includes("cell8")
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

  const [showResults, setShowResults] = useState(false);
  const [selectedAnswersSing, setSelectedAnswersSing] = useState({});
  const [selectedAnswersDance, setSelectedAnswersDance] = useState({});

  const allQuestions = [...musicSing2.questions, ...musicDance2.questions];

  const handleAnswerClick = (section, questionId, selectedOption) => {
    if (section === "sing") {
      setSelectedAnswersSing((prev) => ({
        ...prev,
        [questionId]: selectedOption,
      }));
    } else if (section === "dance") {
      setSelectedAnswersDance((prev) => ({
        ...prev,
        [questionId]: selectedOption,
      }));
    }
  };

  const calculateResults = () => {
    let correctCount = 0;
    allQuestions.forEach((question) => {
      if (
        (selectedAnswersSing[question.id] === question.correctAnswer &&
          musicSing2.questions.some((q) => q.id === question.id)) ||
        (selectedAnswersDance[question.id] === question.correctAnswer &&
          musicDance2.questions.some((q) => q.id === question.id))
      ) {
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
                Волшебный замок Наины. Прекрасные девы заманили Ратмира,
                обольстив его песнями и танцами
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
                От мудрого старца Финна Руслан узнает, что Людмилу похитил злой
                карлик Черномор. Поиски приводят Руслана на поле, усеянное
                костями воинов. Поле стережет огромная голова
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
                Руслан с помощью волшебного перстня, который вручил ему Финн,
                освобождает Людмилу от чар Черномора
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
                В волшебных садах Черномора Людмила думает только о своем
                возлюбленном и отвергает все притязания злобного карлика
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
                5 Действие
              </td>
              <td
                id="cell10"
                onClick={() => checkPair("cell10")}
                className={
                  selectedCells.includes("cell10") ? styles.selected : styles.td
                }
              >
                Свадебный пир. Киевский князь Светозар выдает дочь Людмилу за
                храброго витязя Руслана
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
          {musicSing2.questions.map((question) => (
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
                      selectedAnswersSing[question.id] === image &&
                      styles.selected
                    } ${
                      showResults &&
                      image === question.correctAnswer &&
                      styles.correct
                    } ${
                      showResults &&
                      image !== question.correctAnswer &&
                      selectedAnswersSing[question.id] === image &&
                      styles.incorrect
                    }`}
                    onClick={() =>
                      handleAnswerClick("sing", question.id, image)
                    }
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
          {musicDance2.questions.map((question) => (
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
                      selectedAnswersDance[question.id] === image &&
                      styles.selected
                    } ${
                      showResults &&
                      image === question.correctAnswer &&
                      styles.correct
                    } ${
                      showResults &&
                      image !== question.correctAnswer &&
                      selectedAnswersDance[question.id] === image &&
                      styles.incorrect
                    }`}
                    onClick={() =>
                      handleAnswerClick("dance", question.id, image)
                    }
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
              {musicDance2.questions.length + musicSing2.questions.length}.
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

export default Game2;
