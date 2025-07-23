import React from "react";
import Image from "next/image";
const Rsvp = () => {
  return (
    <div>
      <section className="relative ">
        <div className="absolute inset-0 -z-10">
          <Image
            width={1920}
            height={1080}
            src="/hug.jpg"
            alt="bride"
            className="h-[100vh] object-cover "
          />
        </div>

        <div className=" flex justify-center items-center  h-[100vh]">
          <div>
            <form className="bg-white p-10 w-[500px]" action="">
             <div className="text-center mb-6">
                 <h1 className="uppercase">r.s.v.p</h1>
              <p>Will you attend?</p>
             </div>
              <div className="mb-4">
                <input className="w-full p-2 border border-gray-200" type="text" placeholder="Name" />
              </div>
              <div className="mb-4">
                <input className="w-full p-2 border border-gray-200" type="email" placeholder="Email" />
              </div>
              <div>
                <input className="w-full p-2 border border-gray-200" type="text" placeholder="Guest" />
              </div>
              <div className="mb-4 mt-4">
                <textarea cols={3} className="w-full p-2 border border-gray-200" name="" id="" placeholder="Message"></textarea>
              </div>
              <div className="mt-7 ">
                <button className="bg-yellow-600 text-white px-10 py-2">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rsvp;
