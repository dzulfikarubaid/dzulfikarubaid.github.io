import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isInSection, setIsInSection] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId); // Set current section when scrolled
    }
  };

  // Function to check if the user is in a specific section
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');

      const checkInView = (section: any) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        }
        return false;
      };

      const isInAboutView = checkInView(aboutSection);
      const isInProjectsView = checkInView(projectsSection);

      // Update the state based on current scroll position
      if (window.scrollY > -500 && window.scrollY <= 0) {
        openAllMenu(); 
      } else if (isInAboutView) {
        setIsInSection(true);
        setCurrentSection('about');
      } else if (isInProjectsView) {
        setIsInSection(true);
        setCurrentSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to open all menu options
  const openAllMenu = () => {
    setIsInSection(false); // Show the full menu again
    setCurrentSection(''); // Reset current section
  };

  return (
    <div className="fixed top-0 flex justify-center items-center w-full p-6 z-[99999]">
      <motion.div
        className="flex flex-row gap-6 justify-between py-3 bg-black text-white rounded-3xl items-center border-[1px] border-white"
        style={{
          width: isInSection ? '200px' : '400px', // Adjust width based on the section
          paddingLeft: '20px', // Ensure padding remains consistent
          paddingRight: '20px',
        }}
        initial={{width:160, opacity:0}}
        animate={{ width: isInSection ? '160px' : '400px', opacity:1 }} // Animate the width transition
        transition={{ duration: 1, ease: 'easeInOut'}} // Smooth transition
      >
        {!isInSection ? (
          <>
            <motion.a
              animate={{
                color: ['#fff'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              href="/"
              className="font-bold text-xl"
            >
              dz7
            </motion.a>
            <button onClick={() => scrollToSection('about')}>about</button>
            <button onClick={() => scrollToSection('projects')}>projects</button>
            <a href="/contact">contact</a>
          </>
        ) : (
          <>
            <motion.a
              animate={{
                color: ['#fff'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              href="/"
              className="font-bold text-xl"
            >
              dz7
            </motion.a>
            <button onClick={openAllMenu}>
              {currentSection === 'about' ? 'about' : 'projects'}
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
