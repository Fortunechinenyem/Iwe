import { getSession } from "next-auth/react";

export default function StudentDashboard({ user, courses }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
        <nav>
          <ul>
            <li>
              <a
                href="/dashboard/student"
                className="block py-2 hover:bg-gray-700"
              >
                My Courses
              </a>
            </li>
            <li>
              <a href="/quizzes" className="block py-2 hover:bg-gray-700">
                My Quizzes
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
        <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.role !== "student") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const courses = await fetch(
    `http://your-api-url/api/courses?studentId=${session.user.id}`
  ).then((res) => res.json());
  return { props: { user: session.user, courses } };
}
