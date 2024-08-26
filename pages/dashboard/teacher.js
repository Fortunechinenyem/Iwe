import { getSession } from "next-auth/react";

export default function TeacherDashboard({ user, courses }) {
  return (
    <div>
      <h1>{user.name}'s Dashboard</h1>
      <h2>Your Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
      <h2>Create a new Course</h2>
      <button>Create Course</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.role !== "teacher") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const courses = await fetch(
    `http://your-api-url/api/courses?teacherId=${session.user.id}`
  ).then((res) => res.json());
  return { props: { user: session.user, courses } };
}
