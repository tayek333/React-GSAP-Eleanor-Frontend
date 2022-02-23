  import React, { useRef, useEffect } from "react";
  import styled from 'styled-components';
  import heroimg from '../images/Your Vehicle - phone2 1.png';
  import arrow from '../images/arrow.svg';
  import porsche from '../images/porsche.png';
  import car1 from '../images/car1.png';
  import car2 from '../images/car2.png';
  import { media } from './styles/global.styles';
  import { gsap, Power3 } from 'gsap';

  const Hero = styled.section `

  padding: 100px 5% 0px;
  background-color: rgb(251, 200, 67);
  height: 100vh;

  ${media.m} {
    position: relative;
    padding: 10vh 5% 0px;
    height: unset;
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
  }

  a {
    color: rgb(65, 74, 105);
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.47px;
    line-height: 54px;
    text-decoration: none;
    margin-left: 5px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
  `
  const Herotitle = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 8vw;
  letter-spacing: -0.256vw;
  line-height: 8.625vw;
  white-space: pre-line;
  margin: 0px;
  font-weight: normal;

  ${media.m} {
    font-size: 12.8vw;
    line-height: 12.8vw;
  }

  `
  const Arrowicon = styled.img`
  position: relative;
  top: 2px;
  left: 2vw;
  `
  const Herocontainer = styled.div`
  padding: 50px 0px;

  ${media.m}  {
    padding: 40px 0px 20vw;
    
  }
  `
  const Subcontainer = styled.div`
  color: rgb(65, 74, 105);
  font-size: 16px;
  letter-spacing: -0.47px;
  line-height: 54px;
  text-decoration: none;
  margin-left: 5px;
  font-family: 'Eina03';
  `
  const Carscontainer = styled.div`
  width: 100%;
  height: 30vh;
  position: absolute;
  left: 0px;
  bottom: -5vh;
  ${media.m}  {
    overflow: hidden;
    width: 100%;
    height: 30vh;
    position: absolute;
    left: 0px;
    bottom: -5vh;
  }
  `
  const Whitespace = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0px;
  width: 100%;
  height: 215px;
  background-color: rgb(255, 255, 255);

  ${media.m} {
    display: none
  }

  `
  const Car1 = styled.img`
  position: absolute;
    width: 30vw;
    bottom: 105px;
    left: 0%;
    
    ${media.m} {
    width: 47vw;
    bottom: 0vh;
  }
  `
  const Car2 = styled.img`
  position: absolute;
  width: 43.8vw;
  bottom: 135px;
  left: 23%;

  ${media.m}  {
    width: 50vw;
    bottom: 3vh;
    left: 55%;
  }
  `
  const Porsche = styled.img `
  position: absolute;
  width: 45.7vw;
  bottom: 110px;
  left: 6%;

  ${media.m} {
    width: 68vw;
    bottom: 0vh;
    left: 13%;

  }
  `
  const Heroimgcontainer = styled.div`
  position: absolute;
  right: 8%;
  top: 100px;
  width: 36.7vh;
  font-size: 0px;
  border-radius: 35px;
  filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
  `
  const Heroimg = styled.img`
  width: 100%;

  ${media.m} {
    opacity: 0;
  }
  
  `


  function HeroComponent() {

    const backgroundRef = useRef(null);
    const carsRef = useRef(null);
    const headingRef = useRef(null);
    const screenRef = useRef(null);

    useEffect(() => {
      gsap.from(backgroundRef.current, 1, {
        x: -5000, 
        ease: Power3.easeOut
        });
      gsap.from(carsRef.current, 1, {
        x: -1280, 
        ease: Power3.easeOut, 
        delay: .2
      });
      gsap.from(headingRef.current, 1, {
        opacity: 0, 
        y: -100, 
        ease: Power3.easeOut, 
        delay: .5
      });
      gsap.from(screenRef.current, 1, {
        opacity: 0, 
        x: 700, 
        ease: Power3.easeOut, 
        delay: .5});
    });
    
      return(
          <Hero ref={backgroundRef}>
            <Herocontainer ref={headingRef}>
              <Herotitle>
                Drive A New <br /> Car Every Month.
              </Herotitle>
              <Subcontainer>
                <a href='./'>
                  Available On The Appstore
                </a>
                <Arrowicon src={arrow} />
              </Subcontainer>
            </Herocontainer>
            <Whitespace />
            <Carscontainer ref={carsRef}>
              
              <Car1 src={car1} />
              <Car2 src={car2} />
              <Porsche src={porsche} />
            </Carscontainer>
            
            <Heroimgcontainer ref={screenRef}>
              <Heroimg src={heroimg}/>
            </Heroimgcontainer>
          </Hero>
      )
  };

  export default HeroComponent;