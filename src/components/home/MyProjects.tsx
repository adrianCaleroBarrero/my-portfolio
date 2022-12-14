import React from 'react';
import { Element } from 'react-scroll';
import Card from '../core/Card';

export default function MyProjects() {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <Element name="My Projects">
      <section className="myProject">
        <h2>My personal projects</h2>
        <div className="myProject-container">
          <Card
            title="Github searcher"
            link="https://github.adriancalero.dev/"
            skill="angular"
          />
          <Card
            title="Pokedex"
            link="https://pokedex.adriancalero.dev/"
            skill="react"
          />
        </div>
        <p>
          Look more in detail of my code :
          <img
            data-testid="github"
            src={require('./img/github.png')}
            onClick={() =>
              openInNewTab('https://github.com/adrianCaleroBarrero')
            }
          ></img>
        </p>
      </section>
    </Element>
  );
}
