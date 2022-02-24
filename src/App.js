import React, { useEffect, useState, Suspense, lazy} from "react";
import { Switch } from 'react-dom';
import GlobalStyles from "./components/styles/global.styles";
import HeroComponent from "./components/Hero.js";
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/footer';
import styled from 'styled-components';
import LoaderComponent from './components/loaderScreen';

const Main = styled.main`
min-height: 100vh;
width: 100vw;
overflow: hidden;
`

function App() {

  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      console.log('test');
      setDone(true);
    }, 500);
  }, []);


  return (
    
      <>
      {! done ? (
        
        <LoaderComponent />
      ):
        <Main>
          <GlobalStyles />
          <Header />
          <HeroComponent />
          <Section1 />
          <Section2 />
          <Section3 /> 
          <Pricing />
          <CtaSection />
          <Footer />
        </Main>
      }
    </>
  );
}

export default App;
