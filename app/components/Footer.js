"use client";
import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-200 shadow mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 text-white">About Iwe</h3>
          <p className="text-gray-400">
            Iwe is a modern Learning Management System designed to provide
            engaging and flexible learning experiences. Explore courses, join
            the community, and track your progress all in one place.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/courses" className="hover:text-blue-400">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/quizzes" className="hover:text-blue-400">
                Quizzes
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-blue-400">
                Community
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-blue-400">
                Achievements
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:support@iwe.com" className="hover:text-blue-400">
                support@iwe.com
              </a>
            </li>
            <li>
              <p>Phone: +234 123 456 7890</p>
            </li>
            <li>
              <p>Lagos, Nigeria</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.924 4.924 0 002.163-2.723 9.86 9.86 0 01-3.127 1.195 4.92 4.92 0 00-8.381 4.482 13.97 13.97 0 01-10.141-5.138 4.822 4.822 0 00-.664 2.476 4.92 4.92 0 002.188 4.104 4.935 4.935 0 01-2.228-.616c-.054 1.981 1.387 3.834 3.423 4.247a4.934 4.934 0 01-2.224.084 4.927 4.927 0 004.6 3.419 9.868 9.868 0 01-6.102 2.104c-.395 0-.779-.023-1.162-.067a13.936 13.936 0 007.548 2.213c9.057 0 14.009-7.512 14.009-14.009 0-.214-.005-.427-.014-.639a9.998 9.998 0 002.457-2.548l-.047-.02z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.731 0-1.325.594-1.325 1.326v21.349c0 .731.594 1.325 1.325 1.325h11.494v-9.294h-3.128v-3.62h3.128v-2.672c0-3.1 1.894-4.792 4.66-4.792 1.325 0 2.464.099 2.797.144v3.24l-1.92.001c-1.506 0-1.798.717-1.798 1.768v2.31h3.595l-.468 3.62h-3.127v9.295h6.126c.731 0 1.325-.594 1.325-1.325v-21.35c0-.731-.594-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.998 3a4 4 0 010 8 4 4 0 010-8zM9.198 8.4H6V22.6h3.2V8.4zm1.6 0H15V10h-2.2v12.6h-3.2v-7.9H6v7.9H3V8.4h2.2v-3.5a3.9 3.9 0 013.8-3.9h5.8a3.9 3.9 0 013.8 3.9V22.6h-2.2V15h-3.2v7.6H9.198zm-3-6.6a1.85 1.85 0 010 3.7 1.85 1.85 0 010-3.7z" />
            </svg>
          </a>
        </div>
        <p className="text-sm">© 2024 Iwe. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
