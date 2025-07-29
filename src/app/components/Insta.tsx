import React from "react";
import Image from "next/image";
const Insta = () => {
  return (
    <div className=" py-30 px-20 relative">
      <div className="absolute bg-white text-center top-32 flex">
        <Image src="/altar.jpg" alt="Insta" width={300} height={300} />
        <Image src="/altar.jpg" alt="Insta" width={300} height={300} />
        <Image src="/altar.jpg" alt="Insta" width={300} height={300} />
        <Image src="/altar.jpg" alt="Insta" width={300} height={300} />
      </div>
    </div>
  );
};

export default Insta;
