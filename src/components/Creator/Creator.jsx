import { motion } from "framer-motion";
function Creator() {
  const bounceVariants = {
    initial: {
      scale: 1,
      background: "none",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "#fff",
    },
    hover: {
      scale: 1.1,
      background:
        "linear-gradient(85.53deg, #FC4C3F 55.95%, #00FFF0 77.97%, #FF00D6 97.89%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: {
        scale: { type: "spring", stiffness: 500, damping: 10 },
        background: { duration: 0.5 },
      },
    },
  };

  const BouncyGradientText = ({ children, className }) => (
    <motion.div
      className={className}
      variants={bounceVariants}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );

  return (
    <div>
     <div className='md:py-10 py-5 md:px-24 px-6 flex md:flex-row flex-col justify-between items-center gap-10 md:hidden'>
         <div className='text  md:mt-0 mt-6'>
            <img className="md:w-[624px] w-[300px]" src="/assets/Rewarding (1).png" alt="" />            
          <img className="md:w-[547px] w-[300px]" src="/assets/Creator’s Creator (1).png" alt="" />
           
         </div>
       <img className='md:w-[600px] w-[400px]' src="/assets/social media 1.png" alt="" />
     </div>
     <div className="md:py-10 py-5 md:px-24 px-6 md:flex flex-col md:flex-row justify-between items-center gap-10 hidden">
     <div className="text md:mt-0 mt-6 flex flex-col items-center md:items-start">
       <BouncyGradientText className="text-[50px] md:text-[140px] tracking-wider urbanist-700 mb-4">
         Rewarding
       </BouncyGradientText>
       <div className="text-[30px] md:text-[70px]  md:leading-[80px] tracking-wide urbanist-700 flex md:mt-0 -mt-4  items-center md:items-start md:gap-3 gap-2">
         <BouncyGradientText>Creator’s</BouncyGradientText>
         <BouncyGradientText className="text-[30px] md:text-[70px] md:leading-[80px] tracking-wide">
           Creator
         </BouncyGradientText>
       </div>
     </div>
     <img className='md:w-[600px] w-[400px]' src="/assets/social media 1.png" alt="" />
   </div>
   </div>
  );
}

export default Creator;
