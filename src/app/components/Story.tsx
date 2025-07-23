"use client";
import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/hand.jpg",
    date: "JULY 20, 2015",
    title: "First time we meet",
    text: `First time we meet viverra tristique duis vitae diam the nesumen nivamus aestan ateuene artines finibus. 
      Nedana setlie the love thermen inilla duimane elit finibus nec a lacus durana meeta nonsaiere viventaa miss the fermen.`,
  },
  {
    image: "/couple.jpg",
    date: "OCTOBER 15, 2016",
    title: "Our first trip",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, libero eget dignissim lacinia.`,
  },
  {
    image: "/hand.jpg",
    date: "DECEMBER 24, 2017",
    title: "Proposal Day",
    text: `It was magical. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat suscipit varius.`,
  },
  {
    image: "/couple.jpg",
    date: "MARCH 12, 2019",
    title: "Wedding Day",
    text: `The best day of our lives. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.`,
  },
];

const Story = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x < -threshold && current < slides.length - 1) {
      setCurrent(current + 1);
    } else if (info.offset.x > threshold && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="bg-white text-center py-20">
      <p>Mary & Brian</p>
      <h1>Our Love Story</h1>
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center gap-8 px-6 py-10"
            >
              <Image
                width={1000}
                height={1000}
                src={slide.image}
                alt={slide.title}
                className="w-1/2 object-cover rounded-lg shadow"
              />
              <div className="bg-[#f9f5f3] p-8 rounded shadow max-w-md">
                <p className="text-sm text-gray-500 mb-2">{slide.date}</p>
                <h2 className="text-2xl italic font-semibold mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-700">{slide.text}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-yellow-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 w-10 h-10 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default Story;
