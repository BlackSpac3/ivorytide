import React from 'react'
import Image from 'next/image'
const Watch = () => {
  return (
    <div>
        <section className="relative ">
                <div className="absolute inset-0 -z-10">
                  <Image
                    width={1920}
                    height={1080}
                    src="/hug.jpg"
                    alt="bride"
                    className="h-[60vh] object-cover "
                  />
                </div>
        
                <div className=" flex justify-center items-center text-white  h-[60vh]">
                  <div className="text-center">
                    <h1>
                        ▶️ Watch the Wedding Video
                    </h1>
        
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Watch