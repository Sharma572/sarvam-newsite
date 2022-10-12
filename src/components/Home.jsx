import React from 'react';
import About from './About/About';
import Albums from './Album/Albums';
import Award from './Award/Award';
import Counter from './Counter/Counter';
import Featured from './Featured Product/Featured';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Mission from './Mission/Mission';
import Navbar from './Navbar/Navbar';
import { Testimonials } from './Testimonial/Testimonial';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Mission />
    <Featured />
    <Counter />
    <Award />
    <Testimonials />
    <Albums />
    <Footer />
    </>
  );
}

export default Home;