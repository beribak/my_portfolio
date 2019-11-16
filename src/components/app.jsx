import React from 'react';

import Header from '../containers/header';
import Projects from '../containers/projects';
import About from '../containers/about';
import Footer from '../containers/footer';

const App = () => {
  return (
    <div className="">
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;
