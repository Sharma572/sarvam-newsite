import React from 'react';
import Award from './Award/Award';
import Counter from './Counter/Counter';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import { Testimonials } from './Testimonial/Testimonial';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Award />
    <Testimonials />
    <Counter />
    <Footer />
    </>
  );
}

export default Home;