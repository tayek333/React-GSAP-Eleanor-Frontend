import React, { useEffect, useRef} from 'react';
import styled from 'styled-components';
import Car from '../images/front-porsche.png'
import Screenshot from '../images/vehicle-swap-screenshot.png'
import { media } from './styles/global.styles'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap, {Power3} from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
display: Flex;
padding: 6vw 5% 0px;
background-color: white;
height: 100vh;

${media.m} {
    height: unset;
    margin-top: 6vw;
    flex-direction: column-reverse;
}
`
const LeftColumn = styled.div`
position: relative;
height: 90vh;
width: 30vw;
transform: translateY(-6vh);

${media.m} {
    height: 100vh;
    width: 80vw;
    transform: translate(-10%, 2vh);
}
${media.s} {
    height: 75vh;
    width: 80vw;
    transform: translate(-10%, 2vh)
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
const Card = styled.div`
display: flex;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
width: 100%;
height: 100%;
background-color: rgb(251, 200, 67);
`
const CarImg = styled.img`
width: 80%;
transform: translateX(5%);
`
const ScreenshotWrapper = styled.div`
position: absolute;
right: 0px;
top: 50%;
width: 36.7vh;
font-size: 0px;
border-radius: 35px;
transform: translate(40%, -50%);
filter: drop-shadow(rgba(0, 0, 0, 0.2) 20px 20px 25px);

${media.m} {
    right: 0px;
    top: 50%;
    width: 35vh;
}
${media.s} {
    right: 0px;
    top: 50%;
    width: 25vh
}
`
const Img = styled.img`
width: 100%;
`
const HeadingWrapper = styled.div`
flex: 1 1 0%;
margin-left: 15vw;
margin-top: 25vh;

${media.m} {
    flex: unset;
    margin-left: 0vw;
    margin-top: 0vh
}
`
const H2 = styled.h2`
color: rgb(43, 49, 68);
font-size: 6vw;
font-weight: normal;
line-height: 6vw;
margin: 0px;
white-space: pre-line;
margin-right: 20%;

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
padding-right: 30%;
${media.m} {
    margin-top: 4vw;
    font-size: 3.5vw;
    line-height: 6vw;
    white-space: unset;
    width: 100%;
    padding-right: 0%;
}
`
function Section3() {

    const cardRef = useRef(null);
    const paragraphRef = useRef(null);
    const screenRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.from(cardRef.current, 1, { 
            x: -1000,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
        });
        gsap.from(screenRef.current, 1, { 
            opacity: 0,
            y: -100,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: .5,
        });
        gsap.from(headingRef.current, .5, { 
            opacity: 0,
            y: -200,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: .8,
        });
        gsap.from(paragraphRef.current, .5, { 
            opacity: 0,
            y: -200,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: .9,
        });
    });

    return(
        <Section>   
            <LeftColumn>
                <CardWrapper ref={cardRef}>
                    <Card>
                        <CarImg src={Car}/>
                    </Card>
                </CardWrapper>
                <ScreenshotWrapper>
                    <Img src={Screenshot} ref={screenRef}/>
                </ScreenshotWrapper>
            </LeftColumn>

            <HeadingWrapper>
                <H2 ref={headingRef}>
                    Trade in Your Car
                    Every Month.
                </H2>
                <P ref={paragraphRef}>
                Use Eleanor Trade-In Credits to trade in your vehicle for 
                something else in our luxurious inventory.  Nothing says 
                “June” like a new car!
                </P>
            </HeadingWrapper>
        </Section>
    )
}

export default Section3;