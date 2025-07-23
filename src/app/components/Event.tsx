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

const Event = () => {
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
    <div className='bg-white py-20 text-center'>
        <p>Organization</p>
        <h1 className='text-3xl'>Wedding Events</h1>
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
                      <div className="bg-[#f9f5f3] p-8 rounded shadow max-w-md">
                        <p className="text-sm text-gray-500 mb-2">{slide.date}</p>
                        <h2 className="text-2xl italic font-semibold mb-4">
                          {slide.title}
                        </h2>
                        <p className="text-gray-700">{slide.text}</p>
                      </div>
                      <Image
                        width={1000}
                        height={1000}
                        src={slide.image}
                        alt={slide.title}
                        className="w-1/2 object-cover rounded-lg shadow"
                      />
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
        
               
              </div>
    </div>
  )
}

export default Event