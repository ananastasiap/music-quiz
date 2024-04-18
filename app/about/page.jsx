"use client";

import React from "react";

import styles from "./page.module.scss";
import Header from "../components/Header";

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <p>
            Контрольный урок по творчеству <strong>М.И.Глинки.</strong> <br />
            Урок провела С.В.Попова, студентка 2 курса Краснодарского
            музыкального колледжа им.Николая Андреевича Римского-Корсакова
          </p>
        </div>
      </main>
    </>
  );
};

export default Page;
