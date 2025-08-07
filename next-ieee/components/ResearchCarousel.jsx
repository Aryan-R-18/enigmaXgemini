'use client';

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaUserCircle, FaDownload } from "react-icons/fa";

const data = Array(6).fill({
  title: "NLP and GenAI",
  description:
    "Study my research paper on Natural Language Preprocessing and Generative AI which discovers how text-to-video (T2V) generation works.",
  author: "Writer Name",
});

const ResearchCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  const currentItems = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="text-center py-16">
      <h2 className="text-4xl text-blue-700 font-light mb-8">Research Papers</h2>

      <div className="relative w-full flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 text-2xl text-gray-700 hover:text-black"
        >
          <FaArrowLeft />
        </button>

        <div className="flex gap-8 justify-center flex-nowrap">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 w-80 rounded-md shadow-sm flex-shrink-0"
            >
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <FaUserCircle size={18} />
                <span className="text-sm">{item.author}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-800 text-left mb-4">{item.description}</p>
              <a
                href="#"
                className="inline-block border border-blue-700 text-blue-700 rounded-full px-4 py-1 hover:bg-blue-700 hover:text-white transition"
              >
                Download PDF <FaDownload className="inline ml-1" />
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 text-2xl text-gray-700 hover:text-black"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === currentPage ? "bg-blue-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ResearchCarousel;
