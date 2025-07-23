import React from "react";
import Image from "next/image";
const Date = () => {
  return (
    <div>
      <section className="relative ">
        <div className="absolute inset-0 -z-10">
          <Image
            width={1920}
            height={1080}
            src="/ring.jpg"
            alt="bride"
            className="h-[60vh] object-cover "
          />
        </div>

        <div className=" flex justify-center items-center text-white  h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl">Save the date</h1>
            <p className="">Looking forward to see you!</p>
            <p className="">24.11.2022</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Date;
