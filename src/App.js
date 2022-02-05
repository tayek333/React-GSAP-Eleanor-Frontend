import React from "react";

import GlobalStyles from "./components/styles/global.styles";
import HeroComponent from "./components/Hero.js";
import Header from './components/Header';
import Section1 from './components/Section1';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroComponent />
      <Section1 />
    </>
  );
}

export default App;
