import React from "react";
import "./about.css";

export default function About({isDark}) {
  const handleDownload = () => {
    const pdfFilePath = "/Youssef-Talibi-CV-E.pdf";
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "Youssef-Talibi-CV-E.pdf";
    link.click();
  };
  return (
    <>
      <div className={isDark ? 'parentAboutDark' : 'parentAbout'} id="about">
        <div className={isDark ? 'typeSectionDark' : 'typeSection'}>
          <h6>ABOUT ME</h6>
          <div className={isDark ? 'lineDark' : 'line'}></div>
        </div>
        <div className="parentFlex">
        <div className={isDark ? 'IntroSectionDark' : 'IntroSection'}>
          <h2>Who I am</h2>
          <p>
            Who am I ? What is my age ? Where do I study now ?
          </p>
        </div>
        <div className={isDark ? 'bodySectionDark' : 'bodySection'}>
          <div className={isDark ? 'childSectionDark' : 'childSection'}>
            <p>
              Hello there! I'm <strong className="name">Youssef Talibi</strong>,
              a 19-year-old student at OFPPT, currently pursuing my passion for
              web development at <strong>ISTA NTIC Tangier</strong>. I'm on the
              exciting journey to become a skilled Fullstack Web Developer.
            </p>
            <button className="buttonDownload" onClick={handleDownload}>
              <i className="bx bx-download"></i> Download CV
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
