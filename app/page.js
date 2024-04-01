import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Quiz</h1>
        <Link href="/quiz">
          <button>start</button>
        </Link>
      </div>
    </main>
  );
}
