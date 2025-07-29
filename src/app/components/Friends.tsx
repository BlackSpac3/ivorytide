import React from "react";
import Image from "next/image";
const Friends = () => {
  return (
    <div className="bg-gray-100 text-center py-20">
      <p>Best friends</p>
      <h1>Thanks for being there</h1>

      <div className="flex justify-center mt-10 w-[75%] mx-auto">
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/b1.jpg"
              alt="bride"
              className="w-[200px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h3 className="mt-2">The Bridesmaid</h3>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/b2.jpg"
              alt="bride"
              className="w-[200px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h3 className="mt-2">The Bridesmaid</h3>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/b3.jpg"
              alt="bride"
              className="w-[200px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h3 className="mt-2">The Bridesmaid</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 w-[75%] mx-auto">
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/w1.jpg"
              alt="bride"
              className="w-[200px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h3 className="mt-2">The Groonsmen</h3>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/w2.jpg"
              alt="bride"
              className="w-[200px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h3 className="mt-2">The Groonsmen</h3>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/w3.jpg"
              alt="bride"
              className="w-[200px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="mt-5">MARY BROWN</p>
            <h3 className="mt-2">The Groonsmen</h3>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Friends;
