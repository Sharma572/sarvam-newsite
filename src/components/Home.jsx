import React from 'react';
import Award from './Award/Award';
import Counter from './Counter/Counter';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Award />
    <Counter />
    <Footer />
    </>
  );
}

export default Home;