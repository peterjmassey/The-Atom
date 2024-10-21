"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#ECE7CA]">
      <header className="relative w-full h-80 md:h-100 flex justify-center items-start bg-black">
        <Image
          src="/images/Atom Logo Full.svg"
          alt="The Atom Header"
          width={500} // Set the width to the original size
          height={200} // Set the height to the original size
          priority
        />

        <div className="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24">
          <Image
            src="/images/the-atom-logo.jpg"
            alt="The Atom Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>

      <nav className="bg-[#f07c34] text-black">
        <div className="container mx-auto py-2">
          <ul
            className={`flex justify-end ${
              isMobile ? "flex-col" : "flex-row space-x-4"
            }`}
          >
            <li className={isMobile ? "mb-2" : ""}>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className={isMobile ? "mb-2" : ""}>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li className={isMobile ? "mb-2" : ""}>
              <Link href="/archive" className="hover:text-gray-300">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8 px-4 md:px-0">
        {children}
      </main>

      <footer className="bg-black text-white p-4">
        <div className="container mx-auto text-center">
          <p>Published by Atom Media</p>
          <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mt-4">
            <Image
              src="/images/the-atom-logo.jpg"
              alt="The Atom Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
