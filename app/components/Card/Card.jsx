// Card.jsx
import { useState } from "react";
import styles from "../../quizGenre/page.module.scss";

const Card = ({ question, correctAnswer }) => {
  const [flipped, setFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleCardClick = () => {
    setFlipped(true);
    setSelectedAnswer(correctAnswer);
  };

  const resetCard = () => {
    setFlipped(false);
    setSelectedAnswer("");
  };

  return (
    <div
      className={`${styles.cards__item} ${flipped ? styles.flipped : ""}`}
      onClick={flipped ? resetCard : handleCardClick}
    >
      <p>{flipped ? selectedAnswer : question}</p>
    </div>
  );
};

export default Card;
