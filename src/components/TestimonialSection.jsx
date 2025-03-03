import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TestimonialSection() {
  const testimonials = [
    {
      name: "Viez Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      text: '"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".',
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      text: '"I like it because I like to travel far and still can connect with high speed".',
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      text: '"This is very unusual for my business that currently requires a virtual private network that has high security".',
    },
    {
      name: "John Doe",
      location: "New York, USA",
      rating: 4.5,
      text: '"This VPN has been a game-changer for my online security needs".',
    },
    {
      name: "Jane Smith",
      location: "London, UK",
      rating: 4.5,
      text: '"I love how easy it is to use this VPN while traveling".',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3; 
  const totalSlides = Math.max(1, testimonials.length); 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % totalSlides;

      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? totalSlides - 1 : prevIndex - 1;

      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-28 mx-[150px]">
      {/* Header Section */}
      <h1 className="text-center font-rubik font-medium text-4xl/[50px] text-secondary mb-5">
        Trusted by Thousands of <br />
        Happy Customer
      </h1>
      <p className="font-rubik text-center font-normal text-base/[30px] text-tertiary pb-16">
        These are the stories of our customers who have joined us with great{" "}
        <br />
        pleasure when using this crazy feature.
      </p>

      {/* Testimonials Slider */}
      <div className="max-w-6xl w-full px-4 overflow-hidden">
        {/* Testimonials Container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-1/3 flex-shrink-0 p-6 bg-white border rounded-lg shadow-md mr-[50px]
                ${
                  index === currentIndex
                    ? "border-2 border-red-500"
                    : "border-gray-300"
                }`}
            >
              {/* Testimonial Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary font-rubik">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-tertiary font-rubik">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500">
                  <span className="text-base font-medium font-rubik">
                    {testimonial.rating}
                  </span>
                  <span className="ml-1">★</span>
                </div>
              </div>
              {/* Testimonial Text */}
              <p className="text-base text-tertiary leading-relaxed font-rubik">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-between items-center mt-6">
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-red-500" : "w-3 bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
