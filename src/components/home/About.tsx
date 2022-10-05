import React from 'react';
import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element name="About">
      <section className="about">
        <h2> About me</h2>
        <div className="about-contain">
          <section className="description">
            <p>
              Enthusiast, code lover and really passionate. Looking for a
              Front-end developer position where I can learn and grow at
              different levels.
            </p>
            <p className="experience"> With experience in</p>
            <div className="skills">
              <img src={require('./img/js.png')} alt="javascript" />
              <img src={require('./img/ts.png')} alt="typescript" />
              <img src={require('./img/html.png')} alt="html" />
              <img src={require('./img/css.png')} alt="css" />
              <img src={require('./img/sass.png')} alt="sass" />
              <img src={require('./img/react.png')} alt="react" />
              <img src={require('./img/jest.png')} alt="jest" />
              <img src={require('./img/git.png')} alt="git" />
              <img src={require('./img/mongoDb.png')} alt="mongoDb" />
              <img src={require('./img/angular.png')} alt="angular" />
              <img src={require('./img/jasmine.png')} alt="jasmine" />
            </div>

            <p>
              I was formed at prestigious Skylab coder academy, and know I'm
              looking forward to keep growing and helping companies to reach
              their goals in software development.
            </p>
            <p>
              Really confortable being part of a team, good communicator always
              trying to help as much as I can to the rest of the team members.
            </p>
            <ul className="soft-skills">
              <li>
                <span>-</span> Good practices
              </li>
              <li>
                <span>-</span> Code quality and good code standards
              </li>
              <li>
                <span>-</span> Team player
              </li>
              <li>
                <span>-</span> Self-taught and not afraid to face new
                challengues
              </li>
            </ul>
          </section>
          <section className="photo">
            <img src={require('./img/my.photo.jpg')} alt="myPhoto" />
          </section>
        </div>

        <div className="cv-container">
          <p>If you want to know more about me, </p>
          <p className="check">
            Check my
            <a
              className="cv"
              href={require('./files/cv.pdf')}
              download="AdrianCaleroCV"
            >
              <img src={require('./img/cv.png')} alt="cv" />
            </a>
          </p>
        </div>
      </section>
    </Element>
  );
}
