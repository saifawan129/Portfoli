import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DynamicText = () => {
  const texts = ["Full Stack Developer", "Software Developer", "Football Enthusiast"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Added index as a dependency

  return (
    <span className="text-green-600 text-5xl md:text-6xl font-bold block">
      A{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={index} // Changed from texts[index] to index
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default DynamicText;


