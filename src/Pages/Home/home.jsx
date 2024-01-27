import React, { createContext, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.css';
import About from '../About/about';
import Skills from '../Skills/skills';
import Works from '../Works/works';
import Contact from '../Contact/contact';
import Layout from '../../Layouts/layout';


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


const defaultValue = {}
const AppContext = createContext(defaultValue)
export {AppContext}

export default function Home() {

  const [isDark, setIsDark] = useState(false);
  console.log(isDark);


  return (
    <>
      <AppContext.Provider value={isDark}>
        <div className={isDark ? 'appDark' : 'app'}>
      <Layout onSwitch={value => setIsDark(value)} />
      <motion.div  className={isDark ? 'parentHomeDark' : 'parentHome'} variants={container} initial='hidden' animate='visible'>
        <motion.div className={isDark ? 'parentGraphDark' : 'parentGraph'}  variants={item}>
          <motion.div className={isDark ? 'CircleDark' : 'Circle'} variants={item}>
            <center>
              <img src="./img17.png" alt="" className='imageProfile' />
            </center>
            <div className='CircleEffect1'></div>
            <div className='CircleEffect2'></div>
            <div className='CircleEffect3'></div>
            <div className='CircleEffect4'></div>
          </motion.div>
          <motion.h1 variants={item}>TALIBI</motion.h1>
        </motion.div>
        <motion.div className={isDark ? 'parentLinksSocialMediaDark' : 'parentLinksSocialMedia'} variants={item}>
          <ul>
            <li className='liLink'>
              <Link to='https://www.linkedin.com/in/youssef-talibi-b0a0b8238/' target='_blanka' spy={"true"} smooth={"true"} duration={500} title='linkedin'>
                <motion.i className='bx bxl-linkedin-square' variants={item}></motion.i>
              </Link>
            </li>
            <li className='liLink'>
              <Link to='https://github.com/youce-etalibi' spy={"true"} smooth={"true"} target='_blanka' duration={500} title='github'>
                <motion.i className='bx bxl-github' variants={item}></motion.i>
              </Link>
            </li>
            <li className='liLink'>
              <Link to='https://www.instagram.com/youcef.talibi/' spy={"true"} target='_blanka' smooth={"true"} duration={500} title='instgram'>
                <motion.i className='bx bxl-instagram-alt' variants={item}></motion.i>
              </Link>
            </li>
            <li>
              <motion.div className={isDark ? 'lineDark' : 'line'} variants={item}></motion.div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <br /><br /><br />
      <About isDark={isDark}/>
      <br />
      <Skills isDark={isDark}/>
      <br /><br />
      <Works isDark={isDark}/>
      <br />
      <Contact isDark={isDark}/>
      <br />
      <footer>
          <h5>
              <i className='bx bx-copyright' ></i> {new Date().getFullYear()} Portfolio, All rights resorved
          </h5>
      </footer>
    </div>
      </AppContext.Provider>
    </>
  );
}
