import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Iwe</h1>
        <p className="text-lg md:text-xl mb-6">
          Embark on your learning journey with expert-led courses, interactive
          quizzes, and a vibrant community.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
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

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Gain new skills in web development, data science, AI, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Web Development
              </h3>
              <p className="text-gray-600 mt-4">
                Master HTML, CSS, JavaScript, and more.
              </p>
              <Link
                href="/courses/web-development"
                className="text-blue-500 mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800">Data Science</h3>
              <p className="text-gray-600 mt-4">
                Unlock insights with Python and R.
              </p>
              <Link
                href="/courses/data-science"
                className="text-blue-500 mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Artificial Intelligence
              </h3>
              <p className="text-gray-600 mt-4">
                Explore AI concepts and build models.
              </p>
              <Link
                href="/courses/ai"
                className="text-blue-500 mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Connect with fellow learners and instructors. Share insights, ask
            questions, and grow together.
          </p>
          <Link
            href="/community"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700"
          >
            Join Now
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            Your Achievements
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Track your progress and earn certificates as you complete courses
            and quizzes.
          </p>
          <Link
            href="/achievements"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700"
          >
            View Achievements
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Hear from our community about their learning experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "Iwe has helped me land my dream job in web development. The
                courses are top-notch!"
              </p>
              <h4 className="text-gray-800 font-semibold">- John Doe</h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "The interactive quizzes and community discussions made learning
                so engaging."
              </p>
              <h4 className="text-gray-800 font-semibold">- Jane Smith</h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "It was a life changing process of discovery"
              </p>
              <h4 className="text-gray-800 font-semibold">- Freda Stone</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
