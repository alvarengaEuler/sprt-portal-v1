import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export const BrilhanteButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient "
    >
      <span className="flex flex-row  text-slate-900 tracking-wide  h-full w-full  relative linear-mask">
        Download CV
        <MoveRight size={18} className="mr-4" />
      </span>

      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};
