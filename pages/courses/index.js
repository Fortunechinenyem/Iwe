import Layout from "@/app/components/Layout";
import React from "react";

export default function Courses({ courses }) {
  return (
    <Layout>
      {" "}
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <p className="text-sm text-gray-500">Teacher: {course.teacher}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/courses`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const courses = await response.json();
    return { props: { courses } };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return { props: { courses: [] } };
  }
}
