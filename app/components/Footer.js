"use client";
import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-200 shadow mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center items-center space-x-6">
        <Link href="/privacy-policy" className="hover:text-blue-400">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="hover:text-blue-400">
          Terms of Service
        </Link>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">© 2024 Iwe. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
