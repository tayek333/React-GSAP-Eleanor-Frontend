import React from "react";

import GlobalStyles from "./components/styles/global.styles";
import HeroComponent from "./components/Hero.js";
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroComponent />
      <Section1 />
      <Section2 />
      <Section3 /> 
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
