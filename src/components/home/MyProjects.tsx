import React from 'react';
import { Element } from 'react-scroll';

export default function MyProjects() {
  return (
    <Element name="My Projects">
      <section className="myProject">
        <h2>My personal projects</h2>
        <p>
          Look more in detail of my code :
          <a href="https://github.com/adrianCaleroBarrero">
            <img src={require('./img/github.png')} />
          </a>
        </p>
      </section>
    </Element>
  );
}
