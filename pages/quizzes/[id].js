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
  const quiz = await fetch(`http://your-api-url/api/quizzes/${params.id}`).then(
    (res) => res.json()
  );
  return { props: { quiz } };
}
