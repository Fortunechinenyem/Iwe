"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/images";
import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="logo" width={60} height={40} priority />
            <span className="ml-3 text-xl font-semibold">Iwe</span>{" "}
          </Link>

          <div className="hidden md:flex space-x-8 ml-auto">
            <Link
              href="/dashboard"
              className="text-gray-800 hover:text-blue-500"
            >
              Dashboard
            </Link>
            <Link href="/courses" className="text-gray-800 hover:text-blue-500">
              Courses
            </Link>
            <Link href="/quizzes" className="text-gray-800 hover:text-blue-500">
              Quizzes
            </Link>
            <Link
              href="/progress"
              className="text-gray-800 hover:text-blue-500"
            >
              Progress
            </Link>
            <Link
              href="/discussions"
              className="text-gray-800 hover:text-blue-500"
            >
              Discussions
            </Link>
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-800 hover:text-red-500"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className="text-gray-800 hover:text-blue-500"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-x-0 top-0 p-4 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <Link href="/">
                <Image src={Logo} alt="logo" width={60} height={40} priority />
                <span className="ml-3 text-xl font-semibold">Iwe</span>{" "}
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="space-y-6">
              <Link
                href="/dashboard"
                className="block text-gray-800 hover:bg-gray-100 p-3 rounded-md"
              >
                Dashboard
              </Link>
              <Link
                href="/courses"
                className="block text-gray-800 hover:bg-gray-100 p-3 rounded-md"
              >
                Courses
              </Link>
              <Link
                href="/quizzes"
                className="block text-gray-800 hover:bg-gray-100 p-3 rounded-md"
              >
                Quizzes
              </Link>
              <Link
                href="/progress"
                className="block text-gray-800 hover:bg-gray-100 p-3 rounded-md"
              >
                Progress
              </Link>
              <Link
                href="/discussions"
                className="block text-gray-800 hover:bg-gray-100 p-3 rounded-md"
              >
                Discussions
              </Link>
              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="block text-gray-800 hover:bg-gray-100 p-3 rounded-md"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left text-gray-800 hover:bg-red-100 p-3 rounded-md"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="block w-full text-left text-gray-800 hover:bg-gray-100 p-3 rounded-md"
                >
                  Sign In
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
