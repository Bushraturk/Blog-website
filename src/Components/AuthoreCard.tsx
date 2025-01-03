import React from "react";
import Image from "next/image";
export default function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          src="/img.jpg"
          alt="Authore image"
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
        />
        <div>
          <h3 className="text-xl font-bold">Bushra Turk</h3>
          <p className="text-slate-500">Fronted developer</p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
        Bushra is a web developer who builds blogs that are fast, modern, and
        easy to use. Using Next.js and Tailwind CSS, she transforms ideas into
        amazing websites that stand out.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>

        <a
          href="www.linkedin.com/in/bushra-turk12
"
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Linkdin
        </a>

        <a
          href="#"
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Github
        </a>
      </div>
    </div>
  );
}
