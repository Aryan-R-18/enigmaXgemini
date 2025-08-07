'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="my-10 px-4 md:px-10">
      <h2 className="text-3xl text-blue-700 mb-6 font-light">Blogs</h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="px-2">
            <div className="h-60 bg-gray-100 rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              Blog Card {i}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
