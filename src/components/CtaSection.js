import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Guy from '../images/guy.png';
import Car from '../images/car2.png';
import Arrowsvg from '../images/arrow.svg';
import { media } from './styles/global.styles';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
display: flex;
padding: 6vw 5% 0px;
background-color: rgb(255, 255, 255);
height: 100vh;

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
    
${media.m} {
    flex-direction: column-reverse;
    padding: 0px 5%;
    height: unset;
    overflow: hidden;
}
`
const CardContainer = styled.div`
display: flex;
-moz-box-pack: center;
justify-content: center;
align-items: flex-end;
position: relative;
height: 80vh;
width: 40vw;

${media.m} {
    position relative;
    height: unset;
    width: 120%;
    left: -10%;
    margin-top: 2vh;
}
`
const CardWrapper = styled.div`
position: absolute;
left: 0px;
top: 0px;
height: 100%;
width: 100%;
overflow: hidden;
`
const Background = styled.div`
width: 100%;
height: 100%;
background-color: rgb(251, 200, 67);
`
const CenterImg = styled.img`
width: 70%;
z-index: 0;

${media.m} {
    margin-top: 20%;
}
`
const CarImg = styled.img`
position: absolute;
bottom: -13.5vh;
right: -28.5vw;
width: 57vw;
max-width: 57vw;
`
const HeadingContainer = styled.div`
flex: 1 1 0%;
margin-left: 6vw;
margin-top: 10vh;

${media.m} {
    flex: unset;
    margin-left: 0px;
}
`
const H2 = styled.h2`
color: rgb(43, 49, 68);
font-size: 6vw;
font-weight: normal;
line-height: 6vw;
margin: 0px;
white-space: pre-line;

${media.m} {
    font-size: 11vw;
    line-height: 11vw;
    white-space: unset;
}
`
const P = styled.p`
color: rgb(0, 0, 0);
font-size: 1vw;
font-weight: normal;
line-height: 1.8vw;
width: 90%;
white-space: pre-line;
margin-top: 2vw;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

${media.m} {
    margin-top: 4vw;
    font-size: 3.5vw;
    line-height: 6vw;
    white-space: unset;
    width: 100%;
}
`
const P2 = styled.p`
color: rgb(0, 0, 0);
font-size: 0.75vw;
font-weight: 600;
letter-spacing: 0.02vw;
line-height: 1.6vw;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

${media.m} {
    font-size: 3vw;
    letter-spacing: 0.02vw;
    line-height: 3vw;
}
`
const Divider = styled.div`
background: rgb(244, 244, 245) none repeat scroll 0% 0%;
height: 0.25vw;
width: 100%;
margin: 4.4vh 0px;

${media.m} {
    height: 1vw;
    margin: 4.4vh 0px 1vh;
}
`
const CtaComponent = styled.div`

`
const ArrowIcon = styled.img`
position: relative;
top: 2px;
left: 5px;
`
function CtaSection(){

    const cardRef = useRef(null);
    const carRef = useRef(null);
    const contentRef = useRef(null);
    const guyRef = useRef (null);

    useEffect(() => {
        gsap.from(carRef.current, 1, { 
            opacity: 0,
            x: -200,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
            delay: .2,
        });
        gsap.from(guyRef.current, .5, { 
            opacity: 0,
            x: -200,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
            delay: .2,
        });
        gsap.from(cardRef.current, .5, { 
            x: -600,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
        });
        gsap.from(contentRef.current, .5, { 
            opacity: 0,
            y: -200,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
            delay: .5,
        });
    });

    return(
        <Section>
            <CardContainer>
                <CardWrapper>
                    <Background ref={cardRef}/>
                </CardWrapper> 
                <CenterImg ref={guyRef} src={Guy}/>
                <CarImg ref={carRef} src={Car} />
            </CardContainer>
            <HeadingContainer ref={contentRef}>
                <H2>
                    Customers With
                    <br />
                    That New Car Smell.
                </H2>
                <P>
                    “With Eleanor I was able to drive 2 of my dream cars 
                    <br />
                    this year!  The process is always easy and affordable!”
                </P>
                <P2>
                    Alex Bateman,   Interface Designer
                </P2>
                <Divider />
                <CtaComponent>
                    <a href='./'>
                    Available On the App Store
                    </a>
                    <ArrowIcon src={Arrowsvg} />
                </CtaComponent>
            </HeadingContainer>
        </Section>
    )
};

export default CtaSection;