import React, { SyntheticEvent } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

export const Header = () => {
  function scrollTo(e: SyntheticEvent) {
    const element = e.target as HTMLElement;
    console.log(e);

    scroller.scrollTo(element.innerText, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a onClick={scrollTo}>About</a>
          </li>
          <li>
            <a onClick={scrollTo}>My Projects</a>
          </li>
          <li>
            <a onClick={scrollTo}>Contact</a>
          </li>
          <li>
            <a
              className="resume"
              href={require('./files/cv.pdf')}
              download="AdrianCaleroCV"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <section className="introduction">
        <p>Hi, I'm</p>
        <h1>
          <span>&lt;</span> Adrian Calero <span>/ &gt;</span>
        </h1>
        <h2>I've created this website</h2>
        <p>
          I'm a software enginner, who loves programming, fixing code problems
          while learning and working as a team.
        </p>
      </section>
    </header>
  );
};
