  import React from "react";
  import styled from 'styled-components';
  import heroimg from '../images/Your Vehicle - phone2 1.png';
  import arrow from '../images/arrow.svg';
  import porsche from '../images/porsche.png';
  import car1 from '../images/car1.png';
  import car2 from '../images/car2.png';

  const Hero = styled.section `

  height: 100vh;
  background: #FBC843;
  padding: 100px 5% 0px;
  `
  const Herotitle = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 8vw;
  letter-spacing: -0.256vw;
  line-height: 8.625vw;
  white-space: pre-line;
  margin: 0px;
  `
  const Arrowicon = styled.img`
  position: relative;
  top: 2px;
  left: 2vw;
  `
  const Herocontainer = styled.div`
  padding: 50px 0px;
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

  `
  const Whitespace = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 200px;
  background-color: rgb(255, 255, 255);
  `
  const Car1 = styled.img`
  position: absolute;
    width: 30vw;
    bottom: 105px;
    left: 0%;
  `
  const Car2 = styled.img`
  position: absolute;
  width: 43.8vw;
  bottom: 135px;
  left: 23%;
  `
  const Porsche = styled.img `
  position: absolute;
  width: 45.7vw;
  bottom: 110px;
  left: 6%;
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
  `


  function HeroComponent() {
      return(
          <Hero>
            <Herocontainer>
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

            <Carscontainer>
              <Whitespace />
              <Car1 src={car1} />
              <Car2 src={car2} />
              <Porsche src={porsche} />
            </Carscontainer>
            
            <Heroimgcontainer>
              <Heroimg src={heroimg}/>
            </Heroimgcontainer>
          </Hero>
      )
  }

  export default HeroComponent;