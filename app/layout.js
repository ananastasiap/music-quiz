import { Caveat } from "next/font/google";
import "./globals.scss";

const сaveat = Caveat({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Тест по Глинке",
  description: "Тест по Глинке",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={сaveat.className}>{children}</body>
    </html>
  );
}
