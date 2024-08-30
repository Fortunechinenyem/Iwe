export default function CourseDetail({ course }) {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-6">{course.description}</p>
        <p className="text-sm text-gray-500 mb-6">Teacher: {course.teacher}</p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const course = await fetch(`${baseUrl}/api/courses/${params.id}`).then(
    (res) => res.json()
  );

  return { props: { course } };
}
