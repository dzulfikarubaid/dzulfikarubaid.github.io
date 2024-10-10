import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TextBig() {
  const [showSecondText, setShowSecondText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 2500); // Delay sebelum menampilkan "I'm Here!"
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      {/* Teks pertama "Hello World!" */}
      <AnimatePresence>
        {!showSecondText && (
          <motion.div
            key="hello-world"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // Durasi transisi hilang
            className="absolute"
          >
            {/* <FancyText
              gradient={{ from: '#818CF8', to: '#5B21B6', type: 'radial' }}
              animateTo={{ from: '#F858E0', to: '#77156C' }}
              animateDuration={2000}
            >
              
            </FancyText> */}
            <h1 className="text-center text-[120px] font-bold ">Hello World!</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teks kedua "I'm Here!" */}
      <AnimatePresence>
        {showSecondText && (
          <motion.div
            key="im-here"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Durasi transisi muncul
            className="absolute"
          >
            <h1 className="text-center text-[120px] font-bold ">I'm Here!</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
