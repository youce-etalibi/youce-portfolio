import React from "react";
import "./skills.css";

import { SkillsArray } from './skillsList.js';

export default function Skills({isDark}) {
  return (
    <>
      <div className={isDark ? 'parentAboutDark' : 'parentAbout'} id="skills">
        <div className={isDark ? 'typeSectionDark' : 'typeSection'}>
          <h6>MY SKILLS</h6>
          <div className={isDark ? 'lineDark' : 'line'}></div>
        </div>  
        <div className={isDark ? 'IntroSectionDark' : 'IntroSection'}>
          <h2>My Programming Skills</h2>
          <p>
            These are my skills. Some skills I acquired during my training at OFPPT, and some skills I developed through self-study.
          </p>
        </div>
        <div className={isDark ? 'bodySectionDark' : 'bodySection'}>
          <div className={isDark ? 'skills-containerDark' : 'skills-container'}>
            {SkillsArray.map((item, index) => (
              <div key={index} className={isDark ? 'tooltipDark' : 'tooltip'}>
                <div className={isDark ? 'skill-itemDark' : 'skill-item'} dangerouslySetInnerHTML={{ __html: item.logo }}/>
                <span className={isDark ? 'tooltiptextDark' : 'tooltiptext'}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
