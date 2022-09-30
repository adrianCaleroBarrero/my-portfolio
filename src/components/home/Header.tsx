import React from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

export const Header = () => {
  function scrollTo() {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  return (
    <header>
      <ul>
        <li>
          <a onClick={scrollTo}>About</a>
        </li>
        <li>
          <a>My Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a className="resume">Resume</a>
        </li>
      </ul>
      <section className="introduction">
        <p>Hi, I'm</p>
        <h1>
          <span>&lt;</span> Adrian Calero <span>/ &gt;</span>
        </h1>
        <h2>I create this website</h2>
        <p>
          I'm a software enginner, who loves programming, fixing code problems
          while learning and teamwork.
        </p>
      </section>
    </header>
  );
};
