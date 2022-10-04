import React, { SyntheticEvent } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

export const Header = () => {
  function scrollTo(e: SyntheticEvent) {
    const element = e.target as HTMLElement;
    scroller.scrollTo(element.innerText, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  return (
    <header>
      <nav>
        <li>
          <button className="menu">
            <img src={require('./img/menu.png')} alt="menu" />
            <ul className="vertical-menu">
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
                <a href={require('./files/cv.pdf')} download>
                  Resume
                </a>
              </li>
            </ul>
          </button>
        </li>

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
            <a className="resume" href={require('./files/cv.pdf')} download>
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
        <h2>I create this website</h2>
        <p>
          I'm a software enginner, who loves programming, fixing code problems
          while learning and teamwork.
        </p>
      </section>
    </header>
  );
};
