import Image from "next/image";
const Welcome = () => {
  return (
    <div className="bg-white py-20">
      <div className="flex justify-center relative -top-50">
        <Image
          src="/kiss.jpg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-[250px] h-[250px] object-cover rounded-full"
        />
      </div>
      <div className="text-center -mt-40">
        <div>
          <p className="-tracking-[-5px]">Hello & Welcome</p>
          <h1 className=" mt-4">We're getting married!</h1>
        </div>
        <p className="w-1/2 m-auto pt-10">
          Today and always, beyond tomorrow, I need you beside me, always as my
          best friend, lover and forever soul mate. Curabit aliquet orci elit
          genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede
          gravida alisuan neque libero hendrerit magnation sit amet mollis lacus
          ithe maurise. Dunya erat couple wedding eda the semper. Event elit
          miss eget the solin miss citudino phasellus rutrum in the lacusi
          events vestibulum elen ornare drana company tortori eget the solin
          miss citudino sellus rutrum in lacus miss semper.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
