import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import store from '../redux/redux';
const Navbar = () => {
  const [mode, setMode] = useState(store.getState().mode)
  // useEffect(() => {
  store.subscribe(() => {
    setMode(store.getState().mode)
  })
  // })
  return (
    <div className="fixed top-0 flex justify-center items-center w-full p-6 z-[99999]">
      <motion.div
        className={`flex flex-row gap-6 justify-between py-3 ${mode == 'dark' ? 'bg-neutral-900 text-white border-white/10' : 'bg-white text-black border-indigo-50'}  rounded-3xl items-center border-[1px] shadow-md `}
        style={{
          width: '300px', // Adjust width based on the section
          paddingLeft: '30px', // Ensure padding remains consistent
          paddingRight: '30px',
        }}
        initial={{ width: 160, opacity: 0 }}
        animate={{ width: '300px', opacity: 1 }} // Animate the width transition
        transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
      >
        <>
          <a
            href="/"
            className="font-bold text-xl"
          >
            dz7
          </a>
          <button onClick={() => {
            window.scrollTo(0, 0)
          }}>About</button>
          <button onClick={() => {
            document.getElementById('work')?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>Work</button>
          {/* <a href="/contact">Contact</a> */}
        </>

      </motion.div>
    </div>
  );
};

export default Navbar;
