import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Services from './components/Services.js';

const App = () => {
  return (
    <>
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Contact resumeData={resumeData} />
        <Services />
        <Footer resumeData={resumeData} />

      </div>
















    </>
  );
}


export default App;