import { motion } from "framer-motion";
function Roadmap() {
  return (
    <div className="relative md:mt-40 -mt-24 md:mb-20 flex flex-col items-center justify-center overflow-hidden">
      <motion.h1
  className="md:text-[5rem] text-[3rem] text-white urbanist-700"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }} // Only animates once when in view
  transition={{
    duration: 0.8,
    ease: "easeInOut",
  }}
>
  GAME PLAN
</motion.h1>

      <div className="flex justify-between w-full items-center flex-col md:gap-[50px] gap-6 z-10 md:mb-[330px] mb-[200px] mt-[40px]">
        <div className="md:w-9/12 w-11/12 md:h-[100px] rounded-[10px] flex justify-center items-center backdrop">
          <img src="/assets/Group 25 (1).png" alt="" className="h-[120%]" />
        </div>
        <div className="md:w-9/12 w-11/12 md:h-[100px] rounded-[10px] flex justify-center items-center backdrop">
          <img src="/assets/Group 26.png" alt="" className="h-[120%]" />
        </div>
        <div className="md:w-9/12 w-11/12 md:h-[100px] rounded-[10px] flex justify-center items-center backdrop">
          <img src="/assets/Group 27.png" alt="" className="h-[120%]" />
        </div>
      </div>

      {/* Overlaying the strips */}
      {/* <div className="absolute w-full h-auto z-20">
  <motion.div
    className="marquee-line yellow-strip-1 rota"
    animate={{ x: [0, -1000] }} // Moves only horizontally
    transition={{
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    }}
  >
    {Array.from({ length: 10 }).map((_, index) => (
      <span
        key={index}
        className=" transform urbanist-700 text-[24px] bg-[#FA9928] text-[#111]"
      >
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////
      </span>
    ))}
  </motion.div>

  <motion.div
    className="marquee-line"
    animate={{ x: [0, -1000] }} // Moves only horizontally
    transition={{
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    }}
  >
    {Array.from({ length: 10 }).map((_, index) => (
      <span
        key={index}
        className="yellow-strip-2 urbanist-700 text-[24px] bg-[#FA9928] text-[#111]"
      >
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////
      </span>
    ))}
  </motion.div>

  <motion.div
    className="marquee-line"
    animate={{ x: [-1000, 0] }} // Moves only horizontally
    transition={{
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    }}
  >
    {Array.from({ length: 10 }).map((_, index) => (
      <span
        key={index}
        className="black-strip-1 urbanist-700 text-[24px] bg-[#111] text-[#fff]"
      >
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////
      </span>
    ))}
  </motion.div>

  <motion.div
    className="marquee-line"
    animate={{ x: [-1000, 0] }} // Moves only horizontally
    transition={{
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    }}
  >
    {Array.from({ length: 10 }).map((_, index) => (
      <span
        key={index}
        className="black-strip-2 urbanist-700 text-[24px] bg-[#111] text-[#fff]"
      >
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////GROW WITH YOUR CREATOR////////////////
        GROW WITH YOUR CREATOR////////////////
      </span>
    ))}
  </motion.div>
</div> */}
 <div className="absolute w-full h-auto z-20">
          <img src="/assets/Group 6.png" alt="Black Strip 1" className="black-strip-1" />
          <img src="/assets/Group 3.png" alt="Yellow Strip 1" className="yellow-strip-1" />
          <img src="/assets/Group 4.png" alt="Black Strip 2" className="black-strip-2" />
          <img src="/assets/Group 5.png" alt="Yellow Strip 2" className="yellow-strip-2" />
        </div>

    </div>
  );
}

export default Roadmap;
