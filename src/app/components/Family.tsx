import Image from "next/image";
import React from "react";

const Family = () => {
  return (
    <div className="">
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
            <h1 className="text-3xl">
              We will become a family in
            </h1>
            <p className="">
              We're getting married in
            </p>
            <p className="">
             date date
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Family;
