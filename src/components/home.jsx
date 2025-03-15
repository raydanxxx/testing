import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
        style={{ backgroundImage: `url('/particle.jpg')` }} // Replace with a fixed image
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold text-center leading-[1.2]">
            Nimish Sharma
          </h1>
          <p className="text-[2.4vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] text-center max-w-[80vw] md:max-w-[65vw] lg:max-w-[50vw] leading-[3.5vh] mt-[2vh]">
            Hey there! I'm Nimish Sharma.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
