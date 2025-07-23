import React from 'react'
import Image from 'next/image';
const Gallery = () => {
     const images = [
    { src: '/hug.jpg', label: 'Wedding Party' },
    { src: '/couple.jpg', label: 'Wedding Party' },
    { src: '/kiss.jpg', label: 'Wedding Party' },
    { src: '/hug.jpg', label: 'Wedding Party' },
    { src: '/couple.jpg', label: 'Wedding Party' },
    { src: '/hug.jpg', label: 'Wedding Party' },
  ];
  return (
     <section className="py-20 bg-white">
        <div className='text-center mb-10'>
            <p>Our Gallery</p>
            <h1>Our Memories</h1> 
        </div>
        <div className='flex justify-center items-center gap-4 mb-10'>
            <div className='bg-yellow-600 text-white px-4 py-2'>
                <h1>All</h1>
            </div>
            <div >
                <h1>Ceremony</h1>
            </div>
            <div>
                <h1>Party</h1>
            </div>
        </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
          
              <Image
                width="1000"
                height="1000"
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
 
           
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery