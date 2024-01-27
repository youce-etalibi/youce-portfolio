import React, { useContext, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './layout.css';
import { AppContext } from '../Pages/Home/home';


// framer motion animation 
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};




export default function Layout({onSwitch}) {

  const isDark = useContext(AppContext);
  // console.log(isDark);

  
  // dark mode state 
  const [darkToggle, setDarkToggle] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkToggle(!darkToggle);
    onSwitch(darkToggle);
  };


  // checkbox dyal menu 
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // scroll to top nbtnScrollToTop + eila clicka fmenu kizole
  const scrollToTop = () => {
    scroll.scrollToTop();
    if (isChecked) {
      setIsChecked(false);
    }


};

  return (
    <>
    <input type="checkbox" className='checkMenuBtn'         
        checked={isChecked}
        onChange={handleCheckboxChange}/>
      <motion.header variants={container} initial='hidden' animate='visible' id='home'>
        <div className={isDark ? 'parentNavbarDark' : 'parentNavbar'} >
          <motion.div className={isDark ? 'parentBrandDark' : 'parentBrand'} variants={item}>
            <ScrollLink to='home' className={isDark ? 'LinkBrandDark' : 'LinkBrand'} spy={"true"} smooth={"true"} duration={500} onClick={scrollToTop}>
              <h3>Portfolio<span>.</span></h3>
            </ScrollLink>
          </motion.div>
          <div className={isDark ? 'parentRightDark' : 'parentRight'}>
          <motion.div
              variants={item}
              className={isDark
                ? isChecked
                    ? 'parentLinksMenuDark'
                      : 'parentLinksDark'
                    : isChecked
                      ? 'parentLinksMenu'
                        : 'parentLinks'}>            
          <ul>
              <li>
                <ScrollLink  className={isDark ? 'LinkDark cool-linkDark' : 'Link cool-link'} to='home' spy={"true"} smooth={"true"} duration={500} onClick={scrollToTop}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink  className={isDark ? 'LinkDark cool-linkDark' : 'Link cool-link'} to='about' spy={"true"} smooth={"true"} duration={500} onClick={scrollToTop}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink  className={isDark ? 'LinkDark cool-linkDark' : 'Link cool-link'} to='skills' spy={"true"} smooth={"true"} duration={500} onClick={scrollToTop}>
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink  className={isDark ? 'LinkDark cool-linkDark' : 'Link cool-link'} to='works' spy={"true"} smooth={"true"} duration={500} onClick={scrollToTop}>
                  Works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink  className={isDark ? 'LinkDark cool-linkDark' : 'Link cool-link'} to='contact' spy={"true"} smooth={"true"} duration={500} onClick={scrollToTop}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </motion.div>
          <motion.div className={isDark ? 'parentModeDark' : 'parentMode'} variants={item}>
          <button className={isDark ? 'LinkDarkModeDark' : 'LinkDarkMode'} onClick={handleDarkModeToggle}>
              <h3>
                {isDark ? (
                  <i className='bx bx-sun'></i> 
                  ) : (
                  <i className='bx bxs-moon'></i>
                )}
              </h3>
            </button>
          </motion.div>
          <motion.div className={isDark ? 'parentMenuDark' : 'parentMenu'} variants={item}>
              <button className={isDark ? 'LinkMenuDark' : 'LinkMenu'} onClick={handleCheckboxChange}>
                <h3>
                {isChecked ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
                </h3>
              </button>
          </motion.div>
          </div>
        </div>
      </motion.header>
      <motion.section variants={container} initial='hidden' animate='visible'>
        <Outlet />
      </motion.section>
    </>
  );
}
