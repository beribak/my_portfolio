import React from 'react';

import Header from '../containers/header';
import Projects from '../containers/projects';
import About from '../containers/about';
import Footer from '../containers/footer';
import Navbar from '../containers/navbar';
import TechContainer from '../containers/tech';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <TechContainer />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
