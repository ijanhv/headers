import React from "react";
import { motion } from "framer-motion";

const SodaName = ({ name }: { name: string }) => {
  return (
    <motion.div
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }} // Add an exit animation
    transition={{ delay: 0.1, ease: "easeInOut"}}
      className="text-white text-[440px]  absolute opacity-50 font-bold tracking-wider  -z-0"
    >
      {name}
    </motion.div>

  );
};

export default SodaName;
