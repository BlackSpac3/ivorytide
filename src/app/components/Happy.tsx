import React from "react";
import Image from "next/image";
const Happy = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="text-center">
        <p>Bride & Groom</p>
        <h1>Happy Couple</h1>
      </div>
      <div className="flex justify-center gap-10 mt-10">
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/bride.png"
              alt="bride"
              className="w-[200px]"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h1 className="mt-2">The Bride</h1>
            <p className="w-[50%] mx-auto mt-4">
              Mary fringilla dui at elit finibus viverra nec alan seda couple
              the miss druane sema the wedding intono miss sollicitudin non the
              fermen.
            </p>
            <div></div>
          </div>
        </div>
         <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/groom.png"
              alt="bride"
              className="w-[200px]"
            />
          </div>
          <div className="text-center">
            <p className="mt-5 uppercase">Brian Martin</p>
            <h1 className="mt-2">The Groom</h1>
            <p className="w-[50%] mx-auto mt-4">
             Mary fringilla dui at elit finibus viverra nec alan seda couple 
             the miss druane sema the wedding intono miss sollicitudin non the fermen.
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happy;
