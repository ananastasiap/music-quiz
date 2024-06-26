"use client";

import Header from "./components/Header";
import { Fragment } from "react";
import StartMenu from "./components/StartMenu";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <StartMenu />
    </Fragment>
  );
}
