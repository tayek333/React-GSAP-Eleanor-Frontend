import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import MapImg from '../images/map.png';
import PhoneImg from '../images/phone.png';
import Porsche from '../images/porsche.png';
import { media } from './styles/global.styles';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
display: Flex;
padding: 6vw 5% 0px;
background-color: white;
height: 100vh;

${media.m} {
    height: unset;
    margin-top: 6vw;
    flex-direction: column;
}
`
const HeadingContainer = styled.div`
flex: 1 1 0%;
margin-top: 10%;

${media.m} {
    margin-top: 30%;
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
    margin-right: 0px;
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
const ImageContent = styled.div`
position: relative;
flex: 1.5 1 0%;
height: 34.9vw;
box-sizing: border-box;

${media.m} {
    overflow: hidden;
    width: 110%;
    margin-left: -5%;
    padding: 45vh 0px;
}
`
const MapWrapper = styled.div`
position: absolute;
left: 0px;
width: 50vw;
margin-top: 8%;
overflow: hidden;

${media.m} {
    left: 50%;
    top: 50%;
    margin-top: 0px;
    width: 130%;
    transform: translate(-57%, -50%)
}
`
const Map = styled.img`
width: 100%;
`
const Car = styled.img`
position: absolute;
width: 31vw;
bottom: -19px;
left: -27%;
`
const PhoneWrapper = styled.div`
position: absolute;
left: 38%;
top: 0%;
width: 36.7vh;
font-size: 0px;
border-radius: 35px;
filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
transform: translate(0%);
opacity: 1;
${media.m} {
    left: 50%;
    top: 50%;
    width: 30vh;
    transform: translate(-50%, -50%);
}
`
const Phone = styled.img`
width: 100%;
`
function Section2() {

    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const mapRef = useRef(null); 
    const carRef = useRef(null );
    const screenRef = useRef(null);

        useEffect(() => {
            gsap.from(headingRef.current, 1, { 
            y:-200,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
        });
        gsap.from(paragraphRef.current, 1, { 
            y:-200,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
            delay: .2,
        });
        gsap.from(mapRef.current, 1, { 
            x: 500,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
        });
        gsap.from(carRef.current, 1, { 
            x: -150,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
            delay: .3,
        });
        gsap.from(screenRef.current, 1.5, { 
            y: -250,
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: carRef.current,
            delay: .3,
    });
})

    return(
        <Section>
            <HeadingContainer>
                <H2 ref={headingRef}>
                    Delivered To Your Door.
                </H2>
                <P ref={paragraphRef}>
                    Eleanor works with your schedule to have a 
                    white-glove delivery service deliver your new
                    vehicle right to your door.
                </P>
            </HeadingContainer>
            <ImageContent>
                <MapWrapper ref={mapRef}>
                    <Map src={MapImg}/>
                </MapWrapper>
                <Car src={Porsche} ref={carRef}/>
                <PhoneWrapper>
                    <Phone ref={screenRef} src={PhoneImg}/>
                </PhoneWrapper>
            </ImageContent>
        </Section>
    )
}

export default Section2;