import React from 'react';
import { motion } from "framer-motion";
import '../styles/Loader.css'

const colors = ["#22238f", "#6b45fa", "#ca3286", "#fe2b49", "#fe652d"];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const dotVariants = {
  initial: {},
  animate: {
    height: [40, 100, 40],
    transition: {
      repeat: Infinity
    }
  }
};

const Loader = ({ count = 5 }) => {
  return (
      <motion.div
          className='load'
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}
    >
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors[index % colors.length],
                borderRadius: 20
              }}
            ></motion.div>
          );
        })}
    </motion.div>
  );
};

export default Loader;
