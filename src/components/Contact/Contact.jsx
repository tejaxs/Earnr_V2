function Contact() {
  return (
    <div className="md:py-10 py-4 flex flex-col items-center justify-center contact-bg text-white md:mt-0 -mt-20">
      
      <h2 className="urbanist-700 md:text-[30px] text-[20px]">Contact Us</h2>
      <div className="flex md:gap-10 gap-6 md:mt-10 mt-5">
        <a
          target="_blank"
          href={"https://www.instagram.com/earnr.live/"}
          className="flex flex=col justify-center items-center cursor-pointer"
        >
          <img
            className=" w-[25px] h-[25px]"
            src="/assets/Group 22.png"
            alt="Instagram"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/earnr-live/"
          className="flex flex=col justify-center items-center cursor-pointer"
        >
          <img
            className=" w-[25px] h-[25px]"
            src="/assets/providers-list.png"
            alt="LinkedIn"
          />
        </a>
        <a
          target="_blank"
          href="https://x.com/Earnr_live"
          className="flex flex=col justify-center items-center cursor-pointer"
        >
          <img
            className=" w-[25px] h-[25px]"
            src="/assets/Group 23.png"
            alt="Twitter"
          />
        </a>
        <a href="mailto:contact@earnr.live" className="flex flex=col justify-center items-center cursor-pointer">
          <img
            className=" w-[25px] h-[25px]"
            src="/assets/Layer 2.png"
            alt="Email"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
