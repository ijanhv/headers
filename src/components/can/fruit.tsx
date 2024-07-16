import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";


const Fruit = ({ soda }: any) => {


  return (
    <div className="relative h-full w-full  top-44 ">
      {soda.image.map((image: string, index: number) => (
        <motion.div
        id="fruit-image"
          key={`${soda.name}-${index}`}
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, stiffness: 100}}
          className={`absolute h-56 w-56 
            
          `}
          style={{
            zIndex: [0, 0, 0, 1][index],
            top: ["40%", "40%", "10%", "0%"][index],
            right: ["0%", "0", "20%", "10%"][index],
            left: ["25%", "60%", "10%", ""][index],
          }}
        >
          <Image
            src={image}
            alt={soda.name}
            fill
            className=""
            style={{
              rotate: `${Math.random() * 180 - 5}deg`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Fruit;
