import React from "react";
import { motion } from "framer-motion";
const Marquue = () => {
  return (
    <div className="marquee-container opacity-55">
      <motion.div
        className="marquee-line"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="md:text-[32px] urbanist-700 text-[#CBA74B]">
            GROW WITH YOUR CREATOR////////////////
          </span>
        ))}
      </motion.div>
      <motion.div
        className="marquee-line"
        animate={{ x: [-1000, 0] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="md:text-[32px] urbanist-700 w-full text-[#fff]">
            GROW WITH YOUR CREATOR////////////////
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquue;
