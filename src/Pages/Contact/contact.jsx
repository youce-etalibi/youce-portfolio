import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

export default function Contact({isDark}) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_rkuvvxt', 'template_zg181yr', form.current, 'F53bha7sLwQaBE10-')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div className={isDark ? 'parentAboutDark' : 'parentAbout'} id="contact">
        <div className={isDark ? 'typeSectionDark' : 'typeSection'}>
          <h6>ABOUT ME</h6>
          <div className={isDark ? 'lineDark' : 'line'}></div>
        </div>
        <div className={isDark ? 'IntroSectionDark' : 'IntroSection'}>
          <h2>Have you any project please? Please drop a message</h2>
          <p>Feel free to contact me for collaboration on a project or anything similar.</p>
        </div>
        <div className={isDark ? 'bodySectionContactDark' : 'bodySectionContact'}>
          <form action="" className={isDark ? 'FormContactDark' : 'FormContact'} onSubmit={sendEmail} ref={form}>
            <label htmlFor="Name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Youssef Talibi"
            />
            <label htmlFor="Email">Email</label> <br />
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="message">Message</label> <br />
            <textarea
              rows="6"
              id="message"
              name="message"
              placeholder="Write message"
            ></textarea>
            <input type="submit" value="SEND" className="btnSubmit" /> <br />
          </form>
        </div>
      </div>
    </>
  );
}
