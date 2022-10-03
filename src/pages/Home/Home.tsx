import React from 'react';
import './Home.css';
import { Header } from '../../components/home/Header';
import About from '../../components/home/About';
import MyProjects from '../../components/home/MyProjects';

export function Home() {
  return (
    <>
      <Header />
      <About />
      <MyProjects />
    </>
  );
}
