import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Iwe</h1>
        <p className="text-xl mb-6">Your learning journey starts here.</p>
        <div className="space-x-4">
          <Link
            href="/courses"
            className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100"
          >
            Browse Courses
          </Link>
          <Link
            href="/quizzes"
            className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100"
          >
            Take a Quiz
          </Link>
        </div>
      </div>
    </Layout>
  );
}
