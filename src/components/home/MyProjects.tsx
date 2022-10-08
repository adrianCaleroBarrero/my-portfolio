import React from 'react';
import { Element } from 'react-scroll';
import Card from '../core/Card';

export default function MyProjects() {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
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
        </div>
        <p>
          Look more in detail of my code :
          <img
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
