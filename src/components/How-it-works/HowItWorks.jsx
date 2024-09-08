function HowItWorks() {
  return (
    <div className="mt-[40px] bg-transparent flex flex-col md:px-24 px-6">
      <div className="relative flex justify-center">
        <img
          className="z-10 md:w-[900px] w-[400px]"
          src="/assets/How it works_.png"
          alt=""
        />
        <img
          className="md:w-[320px] w-[160px] absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-20%] z-20"
          src="/assets/How it works_ (1).png"
          alt=""
        />
      </div>
      <div className="">
        <div className="absolute left-0">
          <img
            className="relative left-0 z-0 md:w-[460px] w-[380px] md:top-24 top-80"
            src="/assets/Group 2.png"
            alt=""
          />
        </div>

        <div className="flex md:flex-row flex-col justify-center md:gap-24 gap-10 md:mt-24 mt-10">
          <div className="z-20 flex flex-col items-center">
            <iframe
              className="lg:w-[500px] md:w-[360px] w-[350px] lg:h-[250px] md:h-[230px] h-[200px] z-20"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/7MDlK8DBtbo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <img
              src="/assets/For Creators.png"
              alt=""
              className="md:pt-10 pt-4 md:w-[300px] w-[150px] z-20"
            />
          </div>
          <div className="z-20 flex flex-col items-center">
            <iframe
              className="lg:w-[500px] md:w-[360px] w-[350px] lg:h-[250px] md:h-[230px] h-[200px] z-20"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/hXAC8lIgMr8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <img
              src="/assets/For Supporters.png"
              alt=""
              className="md:pt-10 pt-4 md:w-[300px] w-[150px] z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
