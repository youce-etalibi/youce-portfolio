import React from "react";
import "./works.css";
import { motion } from 'framer-motion';


export default function Works({isDark}) {

    const worksArray = [
        {
            id : 1,
            name : 'Pomodoro technique Timer',
            image : 'p1.jpeg',
            demo : 'https://youce-etalibi.github.io/pomo-technique/',
            code : 'https://github.com/youce-etalibi/pomo-technique',
            statu : 'Done'
        },
        {
            id : 2,
            name : 'Flags Game',
            image : 'p2.jpeg',
            demo : 'https://youce-etalibi.github.io/FlagsGame/',
            code : 'https://github.com/youce-etalibi/FlagsGame',
            statu : 'Done'
        },
        {
            id : 3,
            name : 'SOUNO',
            image : 'p3.png',
            demo : '',
            code : '',
            statu : 'Done'
        },
        {
            id : 4,
            name : 'Dash Interface',
            image : 'p4.png',
            demo : '',
            code : '',
            statu : 'Done'
        },
        {
            id : 5,
            name : 'Chat bdarija',
            image : 'p5.png',
            demo : 'https://github.com/youce-etalibi/chat-bdarija',
            code : 'https://github.com/youce-etalibi/chat-bdarija',
            statu : 'Doing'
        },
    ]

    return (
        <div className={isDark ? 'parentAboutDark' : 'parentAbout'} id="works"> 
          <div  className={isDark ? 'typeSectionDark' : 'typeSection'}>
            <h6>MY WORKS</h6>
            <div className={isDark ? 'lineDark' : 'line'}></div>
          </div>
          <div className={isDark ? 'IntroSectionDark' : 'IntroSection'}>
            <h2>See My Works</h2>
            <p>
              These are some projects I created solely for practicing skills. Currently, I am working on my first professional project, which is Chat-Bdarija.
            </p>
          </div>
          <div className={isDark ? 'bodySectionDark' : 'bodySection'}>
            <div className={isDark ? 'works-containerDark' : 'works-container'}>
              {worksArray.map((work) => (
                <div key={work.id} className={isDark ? 'work-itemDark' : 'work-item'}>
                  <img src={require(`./Works/${work.image}`)} alt={work.name} title={work.name}/>
                  <div className="ribbon">{work.statu}</div>
                {work.code ?   
                    <div className={isDark ? 'parentButtonsDark' : 'parentButtons'}>
                        <a href={work.demo} target="_blanka"><i className='bx bx-show' ></i></a>
                        <a href={work.code} target="_blanka"><i className='bx bx-code-alt' ></i></a>
                </div> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    
}
