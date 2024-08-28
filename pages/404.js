import Link from "next/link";
// import Image from "next/image";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col justify-center items-center text-white text-center px-6">
      <div className="relative w-96 h-96">
        {/* <Image
          src="/images/404-illustration.svg"
          alt="404 Illustration"
          layout="fill"
          objectFit="contain"
        /> */}
      </div>
      <h1 className="text-6xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-xl mb-8">
        The page you're looking for doesn't exist. It might have been moved or
        deleted.
      </p>
      <Link
        href="/"
        className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
      <div className="mt-6">
        <Link
          href="/courses"
          className="text-white underline hover:text-gray-200 transition duration-300 ease-in-out"
        >
          Or browse our courses
        </Link>
      </div>
    </div>
  );
}
