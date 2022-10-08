import React, { useState } from 'react';
import './Home.css';
import { Header } from '../../components/home/Header';
import About from '../../components/home/About';
import MyProjects from '../../components/home/MyProjects';
import Contact from '../../components/home/Contact';

export function Home() {
  const [scrollVisible, setScrollVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollVisible(true);
    } else if (scrolled <= 300) {
      setScrollVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <Header />
      <img
        className={scrollVisible ? 'scrolled' : 'scrolled-invisible'}
        src={require('../../components/home/img/up.png')}
        alt="Go to top arrow"
        onClick={scrollToTop}
      />
      <About />
      <MyProjects />
      <Contact />
    </>
  );
}
