import React, { useEffect, useRef }from 'react';
import styled from 'styled-components';
import forwardarrow from '../images/forwardarrow.svg';
import backarrow from '../images/backarrow.svg';
import gas from '../images/gas.svg';
import hp from '../images/hp.svg';
import mph from '../images/mph.svg';
import RangeRover from '../images/2018-Range-Rover-Velgar.png';
import { media } from './styles/global.styles'
import { gsap, Power3 } from 'gsap';
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
const ItemsContainer = styled.div`

`
const ButtonContainer = styled.div`
position: relative;
z-index: 2;
display: flex;
justify-content: flex-end;
align-items: center;
`
const BackButton = styled.button`
appearance: none;
border: medium none;
background: none;
padding: 10px 15px;
width: 53px;
height: 30px;
cursor: pointer;
`
const ForwardButton = styled.button`
appearance: none;
border: medium none;
background: none;
padding: 10px 15px;
width: 53px;
height: 30px;
cursor: pointer;
`
const BackArrow = styled.img`
width: 100%;
height: 100%;
`
const ForwardArrow = styled.img`
width: 100%;
height: 100%;
`
const BodyContainer = styled.div`
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;

${media.m} {
    top: 13vw;
    left: 5vw;
}
`
const ProductTitle = styled.div`
margin-top: 25%;
margin-left 20%;

${media.m} {
    width: 66%;
    margin-top: 5%;
    margin-left: 0%;
}
${media.s} {
    margin-top: -*;
}
`
const H3 = styled.h3`
color: black;
font-size: 4vw;
font-weight: normal;
margin: 0px;

${media.m} {
    font-size: 9vw;
    margin: 0px;
}
`
const H4 = styled.h4`
color: #4B5168;
font-size: 1.08vw;
font-weight: normal;
margin: 0px;
line-height: 0.5;

${media.m} {
    font-size: 3.5vw;
    line-height: 0.8;
}
`
const Table = styled.table`
width: 42%;
margin-left: 20%;
margin-top: 13%;

${media.m} {
    width: 55%;
    margin-left: 0%;
    margin-top: 5%;
}
`
const Row = styled.tr`
height: 3vw;

${media.m} {
    height: 12vw;
}
`
const Icon = styled.img`
width: 1.45vw;

${media.m} {
    width: 6vw;
}
`
const Span = styled.span`
position: relative;
top: -0.3vw;
left: 0.6vw;
font-size: 1vw;

${media.m} {
    position: relative;
    top: -1.3vw;
    left: 2vw;
    font-size: 4vw
}
`
const Specs = styled.td`
color: rgb(0, 0, 0);
font-family: "Bebas Neue", sans-serif;
font-size: 2.2vw;
font-weight: normal;
padding-top: 5px;

${media.m} {
    font-size: 7vw;
    padding-top: 0.5vw
}
`
const IconContainer = styled.td`
color: rgb(0, 0, 0);
font-family: "Bebas Neue", sans-serif;
font-size: 1vw;
font-weight: normal;

${media.m} {
    font-size: 3.5vw;
}
`
const CarContainer = styled.div`
position: absolute;
width: 43vw;
bottom: -9.5vh;
left: 5.6vw;

${media.m} {
    width: 90vw;
    bottom: -25vh;
}
${media.s} {
    left: unset;
    bottom: -9.5vh;
}
`
const CarImage = styled.img`
width: 100%;
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
    
    let cardRef = useRef(null);
    let headingRef = useRef(null);
    let paragraphRef = useRef(null);
    let cardcontentRef = useRef(null);
    let carRef = useRef(null);

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
        gsap.from(cardcontentRef.current, 1, { 
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: 1.4,
        });
        gsap.from(carRef.current, 1, { 
            opacity: 0,
            x: 500,
            ease: Power3.easeOut, 
            scrollTrigger: paragraphRef.current,
            delay: 1,
        });
    });

    return(
        <Section>
            <Card>
                <BackgroundContainer ref={cardRef}>
                    <Background />
                </BackgroundContainer>
                <ItemsContainer ref={cardcontentRef}>
                    <ButtonContainer>
                        <BackButton>
                            <BackArrow src={backarrow}/>
                        </BackButton>
                        <ForwardButton>
                            <ForwardArrow src={forwardarrow} />
                        </ForwardButton>
                    </ButtonContainer>
                    <BodyContainer ref={cardcontentRef}>
                        <ProductTitle>
                            <H3>
                                Land Rover
                            </H3>
                            <H4>
                            2019 - RANGE ROVER VELAR
                            </H4>
                        </ProductTitle>
                        <Table>
                            <tbody>
                                <Row>
                                    <IconContainer>
                                        <Icon src={gas}/>
                                        <Span>MPG</Span>
                                    </IconContainer>
                                    <Specs>25/29</Specs>
                                </Row>
                                <Row>
                                    <IconContainer>
                                        <Icon src={hp}/>
                                        <Span>HP</Span>
                                    </IconContainer>
                                    <Specs>247</Specs>
                                </Row>
                                <Row>
                                    <IconContainer>
                                        <Icon src={mph}/>
                                        <Span>0-60</Span>
                                    </IconContainer>
                                    <Specs>6.4</Specs>
                                </Row>
                            </tbody>
                        </Table>
                    </BodyContainer>
                </ItemsContainer>
                <CarContainer ref={carRef}>
                    <CarImage src={RangeRover} />
                </CarContainer>
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

export default Section1