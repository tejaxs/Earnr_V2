function HowItWorks() {
  return (
    <div className="mt-[40px] bg-transparent flex flex-col md:px-24 px-6">
      <div className="relative flex justify-center z-10">
        <img
          className="z-20 md:w-[900px] w-[400px]"
          src="/assets/How it works_.png"
          alt=""
        />
        {/* <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] text-white text-[px] urbanist-700 tracking-wider translate-y-[-30%] z-20">How it works?</h2> */}
        <img
          className="md:w-[320px] w-[160px] absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-20%] z-20"
          src="/assets/How it works_ (1).png"
          alt=""
        />
      </div>
      <div className="">
        <div className="absolute left-0 z-0">
          <img
            className="relative left-0 z-0 md:w-[460px] w-[380px] md:-top-48 -top-36 "
            src="/assets/circle.png"
            alt=""
          />
        </div>

        <div className="flex md:flex-row flex-col justify-center lg:gap-24 gap-10 md:mt-24 mt-10">
          <div className="z-20 flex flex-col items-center">
            <iframe
              className="lg:w-[500px] md:w-[360px] w-[300px] lg:h-[280px] md:h-[230px] h-[150px] z-20 button-gradient-border"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/7MDlK8DBtbo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="urbanist-600 md:text-[36px] text-[28px] text-white mt-2">For Creators</h2>
          </div>
          <div className="z-20 flex flex-col items-center">
            <iframe
              className="lg:w-[500px] md:w-[360px] w-[300px] lg:h-[280px] md:h-[230px] h-[150px] z-20 button-gradient-border"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/hXAC8lIgMr8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="urbanist-600 md:text-[36px] text-[28px] text-white mt-2">For Supporters</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
