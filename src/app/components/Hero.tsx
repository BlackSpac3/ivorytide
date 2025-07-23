import React from 'react'

const hero = () => {
  return (
      <main className="relative">
  
      <section className="relative h-screen overflow-y-auto">
    
        <div className="absolute inset-0 -z-10">
          <div className="bg-[url('/bg.jpg')] bg-cover bg-center fixed top-0 left-0 w-full h-screen" />
        </div>

        
        <div className=" flex flex-col justify-center items-center text-white px-6">
          <h1 className="text-6xl font-bold mb-6 mt-[30vh] uppercase">Amanda and dayo</h1>
          <p className="max-w-xl text-center text-lg">
            24 December, 2022 — New York
          </p>
        </div>
      </section>

     
    
    </main>
  );
  
}

export default hero
