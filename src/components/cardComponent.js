import React , { useEffect, useRef, useState } from 'react';
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

function CardComponent() {


    const cardcontentRef = useRef(null);
    const carRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.from(cardcontentRef.current, 1, { 
            opacity: 0,
            ease: Power3.easeOut, 
            scrollTrigger: cardcontentRef.current,
            delay: 1.4,
        });
        gsap.from(carRef.current, 1, { 
            opacity: 0,   
            x: 500,
            ease: Power3.easeOut, 
            scrollTrigger: cardcontentRef.current,
            delay: 1,
        });
        gsap.from(buttonRef.current, 1, { 
            opacity: 0,   
            ease: Power3.easeOut, 
            scrollTrigger: cardcontentRef.current,
            delay: 1,
        });
    }, []);
    // Needs to be refactored by mapping json data to array and toggeling between arrays.
    const [productTitle, setproductTitle] = useState("Range Rover");
    const [modelState, setmodelState] = useState("2019 - RANGE ROVER VELAR");
    const [mpgState, setmpgState] = useState("25/29");
    const [hpState, sethpState] = useState("247");
    const [mphState, setmphState] = useState("6.4");
    const [rangerover, setrangerover] = useState(require("../images/2018-Range-Rover-Velgar.png"));

    const handleForward = () => {
        if (productTitle == 'Range Rover') {

            setproductTitle('Porsche');
            setmodelState('2019 - 911 Carrera S');
            setmpgState('19/24');
            sethpState('443');
            setmphState('3.2');
            setrangerover(require("../images/porsche-left.png"))
            gsap.fromTo(carRef.current, .5, { 
                opacity: 0,   
                ease: Power3.easeOut, 
                x: 300
            }, {
                opacity: 1,
                x: 0
            });
            gsap.fromTo(cardcontentRef.current, .5, { 
                opacity: 0,   
                ease: Power3.easeOut, 
                y: 50
            }, {
                opacity: 1,
                y: 0
            }
            );
        } else if (productTitle == 'Porsche') {
            setproductTitle('Range Rover');
            setmodelState('2019 - RANGE ROVER VELAR');
            setmpgState('25/29');
            sethpState('247');
            setmphState('6.4');
            setrangerover(require("../images/2018-Range-Rover-Velgar.png"))
            gsap.fromTo(carRef.current, .5, { 
                opacity: 0,   
                ease: Power3.easeOut, 
                x: 300,
            }, {
                opacity: 1,
                x: 0,
            });
            gsap.fromTo(cardcontentRef.current, .5, { 
                opacity: 0,   
                ease: Power3.easeOut, 
                y: 50
            }, {
                y: 0,
                opacity: 1,
            });
        }
    }


    return (
        <>
        <ItemsContainer>
        <ButtonContainer ref={buttonRef}>
            <BackButton onClick={() => handleForward()}>
                <BackArrow src={backarrow}/>
            </BackButton>
            <ForwardButton onClick={() => handleForward()}>
                <ForwardArrow src={forwardarrow} />
            </ForwardButton>
        </ButtonContainer>
        <BodyContainer ref={cardcontentRef}>
            <ProductTitle>
                <H3 ref={titleRef}>
                    {productTitle}
                </H3>
                <H4>
                {modelState}
                </H4>
            </ProductTitle>
            <Table>
                <tbody>
                    <Row>
                        <IconContainer>
                            <Icon src={gas}/>
                            <Span>MPG</Span>
                        </IconContainer>
                        <Specs>{mpgState}</Specs>
                    </Row>
                    <Row>
                        <IconContainer>
                            <Icon src={hp}/>
                            <Span>HP</Span>
                        </IconContainer>
                        <Specs>{hpState}</Specs>
                    </Row>
                    <Row>
                        <IconContainer>
                            <Icon src={mph}/>
                            <Span>0-60</Span>
                        </IconContainer>
                        <Specs>{mphState}</Specs>
                    </Row>
                </tbody>
            </Table>
        </BodyContainer>
    </ItemsContainer>
    <CarContainer ref={carRef}>
        <CarImage src={rangerover}/>
    </CarContainer>
    </>
    )
}

export default CardComponent;
