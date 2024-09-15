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
  className="relative border-2 z-20 border-[#FFE3E3] bg-black rounded bg-transparent md:w-[160px] w-[140px] py-5 md:px-4 px-0 text-[#FFE3E3] flex justify-center items-center md:text-lg text-xs overflow-hidden"
>
  <span
    className={`absolute transition-all duration-700 ease-in-out transform ${
      hover ? 'opacity-0 -translate-x-10 -rotate-6 skew-y-6' : 'opacity-100 translate-x-0 rotate-0 skew-y-0'
    }`}
  >
    Launch
  </span>
  <span
    className={`absolute transition-all duration-700 ease-in-out transform ${
      hover ? 'opacity-100 translate-x-0 rotate-0 skew-y-0' : 'opacity-0 translate-x-10 rotate-6 skew-y-6'
    }`}
  >
    Coming soon...
  </span>
</button>

      <div className="absolute right-0 opacity-20 z-0">
        <img
          src="/assets/earnr_5@4x.png"
          alt=""
          className="md:w-[670px] md:h-[505px] w-[250px] h-[230px] z-0"
        />
      </div>
    </div>
  );
}

export default Navbar;
