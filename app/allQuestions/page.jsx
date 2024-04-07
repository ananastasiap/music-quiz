"use client";

import { Fragment } from "react";
import Header from "../components/Header";
import { quiz } from "../composerData";
import { quiz1 } from "../operaData";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <h2>Список вопросов</h2>
        <section>
          <h3>{quiz.title}</h3>
          <div>
            {quiz.questions.map((question) => (
              <p key={question.id}>{question.question}</p>
            ))}
          </div>
        </section>
        <section>
          <h3>{quiz1.title}</h3>
          <div>
            {quiz1.questions.map((question) => (
              <p key={question.id}>{question.question}</p>
            ))}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Page;
