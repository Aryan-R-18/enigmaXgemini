'use client';

import React from 'react';

const MagazineSection = () => {
  return (
    <section className="my-16 px-4 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl text-blue-700 mb-8 font-light">Magazines</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/assets/symphony.png"
          alt="Symphony for Tomorrow"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />

        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">About “Symphony for Tomorrow”</h3>
          <p className="text-gray-800 text-justify leading-relaxed mb-6">
            Symphony for Tomorrow is the official magazine of the IEEE Student Branch at VSSUT, a vibrant reflection of
            our members’ creativity, knowledge, and passion for technology. This magazine showcases a blend of technical
            articles, insightful editorials, interviews, and student achievements, offering readers a deep dive into the
            world of innovation and emerging trends.
            <br /><br />
            Curated by enthusiastic minds, Symphony for Tomorrow serves as a platform for students to express their
            thoughts and contribute to the larger engineering community. Whether you're curious about the latest
            advancements or inspired by peer stories, this magazine is your gateway to the future of tech.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-blue-600 text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            VIEW MAGAZINE ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
