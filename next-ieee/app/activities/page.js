'use client';

import React from 'react';
import BlogCarousel from '@/components/BlogCarousel';
import MagazineSection from '@/components/MagazineSection';
import Footer from '@/components/Footer';
import ResearchCarousel from '@/components/ResearchCarousel';

export default function ActivitiesPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 scroll-smooth">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="IEEE Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-2xl font-bold">VSSUT BURLA</h1>
            <p className="text-sm">IEEE STUDENT BRANCH</p>
          </div>
        </div>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Our Team</a>
          <a href="#" className="hover:text-blue-600">Events</a>
          <a href="#" className="hover:text-blue-600 font-bold">Activities</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </nav>
      </header>

      {/* Submenu */}
      <div className="flex bg-gray-100 px-6 py-3 space-x-8 text-blue-700 font-medium sticky top-0 z-10">
        <a href="#blogs" className="hover:underline">Blogs</a>
        <a href="#magazine" className="hover:underline">Magazine</a>
        <a href="#research" className="hover:underline">Research Papers</a>
        <a href="#contribute" className="hover:underline">Contribute</a>
      </div>

      {/* Main Content */}
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-blue-700 mb-4">Activities</h2>
        <p className="text-lg leading-relaxed mb-12">
          The Activities section showcases a vibrant collection of blogs, magazines, and research papers.
          It highlights the creativity, insights, and innovations of our members. From thought-provoking
          articles to in-depth technical research, this section offers a platform for knowledge sharing
          and exploration, encouraging readers to stay informed and inspired.
        </p>

        {/* Blog Section */}
        <section id="blogs" className="mb-20">
          <BlogCarousel />
        </section>

        {/* Magazine Section */}
        <section id="magazine" className="mb-20 scroll-mt-20">
          <MagazineSection />
        </section>

        {/* Research Papers Section */}
        <section id="research" className="mb-20 scroll-mt-20">
          <ResearchCarousel />
        </section>

        {/* Contribute Section */}
        <section id="contribute" className="mb-20">
          <div className="text-center text-gray-600 text-lg italic">
            Want to contribute to our magazine or submit a research paper? Reach out to us via the contact form!
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
