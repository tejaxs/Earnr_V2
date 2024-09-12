import { useState } from "react";

function Navbar() {
  const [hover, setHover] = useState(false);
  return (
    <div className=" flex justify-between md:px-24 px-3 py-6 items-center">
      <img
        className="md:w-[218px] w-[120px] md:h-[62px] h-[38px]"
        src="/assets/earnr_white@4x 1.png"
        alt=""
      />
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="border-2 z-20 border-[#FFE3E3] rounded bg-transparent w-[140px] md:py-3 py-2 text-[#FFE3E3] flex justify-center items-center md:text-lg text-sm"
      >
        {hover ? "Coming soon..." : "Launch"}
      </button>
      <div className="absolute right-0 opacity-20 z-0">
        <img
          src="/assets/earnr_5@4x.png"
          alt=""
          className="w-[670px] h-[505px] z-0"
        />
      </div>
    </div>
  );
}

export default Navbar;
