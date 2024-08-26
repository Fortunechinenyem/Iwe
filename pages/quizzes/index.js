import Link from "next/link";

export default function Quizzes({ quizzes }) {
  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link href={`/quizzes/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/quizzes`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch quizzes");
    }
    const quizzes = await response.json();
    return { props: { quizzes } };
  } catch (error) {
    console.error(error);
    return { props: { quizzes: [] } };
  }
}
