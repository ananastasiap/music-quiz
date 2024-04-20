// page.jsx
"use client";
import Header from "../components/Header";
import Card from "../components/Card/Card.jsx";
import { genreData } from "../genreData.js";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h2>{genreData.title}</h2>
          <div className={styles.cards}>
            {genreData.questions.map((question) => (
              <Card
                key={question.id}
                question={question.question}
                correctAnswer={question.correctAnswer}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
