import React from 'react';
import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element name="Contact" className="contact">
      <h2>Contact with me</h2>
      <p>
        I’m always looking for new oportunities.if you would like to find out
        more about my work, do not hesitate to contact me and have a chat with
        me.
      </p>
      <a
        className="contact-me"
        href="mailto:adriancalerobarrero@gmail.com?subject=Contact"
      >
        <p>Contact !</p>
      </a>
      <a href="https://www.linkedin.com/in/adrian-calero-barrero-310036197/">
        <img src={require('./img/linkedin.gif')} />
      </a>
    </Element>
  );
}
