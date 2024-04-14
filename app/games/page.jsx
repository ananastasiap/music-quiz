"use client";
import Link from "next/link";

const MenuGames = () => {
  return (
    <div>
      <h1>Выберите игру:</h1>
      <Link href="../game1/">Игра 1</Link>
      <br />
      <Link href="../game2/">Игра 2</Link>
    </div>
  );
};

export default MenuGames;
