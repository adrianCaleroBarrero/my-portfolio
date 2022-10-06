import React from 'react';

export default function Card({
  title,
  link,
  skill,
}: {
  title: string | undefined;
  link: string | undefined;
  skill: string | undefined;
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img
        className="card-skill"
        src={require(`../home/img/${skill}.png`)}
        alt={skill}
      />
      <a href={link}>
        <img src={require('./img/www.png')} alt="link" />
      </a>
    </div>
  );
}
