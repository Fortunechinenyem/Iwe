export default function QuizDetail({ quiz }) {
  return (
    <div>
      <h1>{quiz.title}</h1>
      <form>
        {quiz.questions.map((question, index) => (
          <div key={index}>
            <p>{question.questionText}</p>
            <input type="text" name={`question-${index}`} />
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const quiz = await fetch(`${baseUrl}/api/quizzes/${params.id}`).then((res) =>
    res.json()
  );

  return { props: { quiz } };
}
