import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const Where = () => {
  return (
    <div className="">
      <div className="bg-white py-20 ">
        <div className="text-center mb-10">
          <p>Save the date</p>
          <h1>When & Where</h1>
        </div>
        <div className="flex justify-center gap-16 items-center mb-10">
          <div>
            <Image src="/altar.jpg" alt="Location" width={500} height={300} />
          </div>
          <div className="flex gap-15">
            <div>
              <h2>24th</h2>
              <p>Dec 2022</p>
            </div>
            <div>
              <p>Are you ready?</p>
              <p>Wedding Ceremony</p>
              <div className="mt-6">
                <div className="flex gap-6">
                  <p>📌</p>
                  <h2>175 Broadway, Brooklyn NY <span className="block">New York 11244, USA</span></h2>
                </div>
                <div className="flex gap-6 mt-4">
                  <p>🕝</p>
                  <h2>12:00am – 13:00pm</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-row-reverse gap-16 items-center">
          <div>
            <Image src="/pple.jpg" alt="Location" width={500} height={300} />
          </div>
          <div className="flex gap-15">
            <div>
              <h2>24th</h2>
              <p>Dec 2022</p>
            </div>
            <div>
              <p>Are you ready?</p>
              <p>Wedding Ceremony</p>
              <div className="mt-6">
                <div className="flex gap-6">
                  <p>📌</p>
                  <h2>175 Broadway, Brooklyn NY <span className="block">New York 11244, USA</span></h2>
                </div>
                <div className="flex gap-6 mt-4">
                  <p>🕝</p>
                  <h2>12:00am – 13:00pm</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Where;
