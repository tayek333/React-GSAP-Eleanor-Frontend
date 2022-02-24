import React, { useEffect, useRef }from 'react';
import styled from 'styled-components';
import { media } from './styles/global.styles'
import { gsap, Power3 } from 'gsap';
import CardComponent from './cardComponent';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
display: flex;
padding: 6vw 5% 0px;
background-color: rgb(255, 255, 255);
height: 100vh;

${media.m} {
    flex-direction: column-reverse;
    margin-bottom: 10vw;
    height: unset;
}
`
const Card = styled.div`
display: flex;
position: relative;
flex-direction: column;
height: 70vh;
width: 33vw;
padding: 30px;
min-height: 40vw;

${media.m} {
    margin-top: 1vh;
    height: 60vh;
    width: 100%;
    padding: 30px;
    min-height: 70vw;
}

${media.s} {
    height: 45vh;
    min-height: 80vw;
}
`
const BackgroundContainer = styled.div`
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

const HeadingContainer = styled.div`
flex: 1 1 0%;
padding-left: 10vw;
margin-top: 10vh;

${media.m} {
    padding-left: 0px;
    margin-top: 18vh;
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
width: 60%;
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

function Section1() {

    const cardRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);


    useEffect(() => {
        gsap.from(cardRef.current, 1, { 
            transformOrigin: 'right',
            scaleX: 0,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: .5,
        });
        gsap.from(headingRef.current, 1, { 
            y: -100,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: 1,
        });
        gsap.from(paragraphRef.current, 1, { 
            y: -50,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: 1.3,
        });
    })

    return(
        <Section>
            <Card>
                <BackgroundContainer ref={cardRef}>
                    <Background />
                </BackgroundContainer>
                <CardComponent />
            </Card>
            <HeadingContainer>
                <H2 ref={headingRef}>
                    Select a Vehicle From Your Phone.
                </H2>
                <P ref={paragraphRef}>
                    Select from a wide range of luxury vehicles in our inventory. 
                    Drive it for a month, trade it the next for something else you have 
                    always wanted to own.
                </P>
            </HeadingContainer>
        </Section>
    )
};

export default Section1;