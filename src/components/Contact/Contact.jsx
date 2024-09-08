function Contact() {
  return (
    <div className="md:py-20 py-10 flex flex-col items-center justify-center contact-bg text-white">
      
      <h2 className="urbanist-700 md:text-[40px] text-[40px]">Contact Us</h2>
      <div className="flex md:gap-16 gap-10 md:mt-20 mt-10">
        <a
          target="_blank"
          href={"https://www.instagram.com/earnr.live/"}
          className="flex flex=col justify-center items-center cursor-pointer"
        >
          <img
            className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
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
            className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
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
            className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
            src="/assets/Group 23.png"
            alt="Twitter"
          />
        </a>
        <div className="flex flex=col justify-center items-center cursor-pointer">
          <img
            className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
            src="/assets/Layer 2.png"
            alt="Email"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
