import React from "react";
import styled from 'styled-components';
import MapImg from '../images/map.png'
import PhoneImg from '../images/phone.png'
import Porsche from '../images/porsche.png'

const Section = styled.section`
display: Flex;
padding: 6vw 5% 0px;
background-color: white;
height: 100vh;
`
const HeadingContainer = styled.div`
flex: 1 1 0%;
margin-top: 10%;
`
const H2 = styled.h2`
color: rgb(43, 49, 68);
font-size: 6vw;
font-weight: normal;
line-height: 6vw;
margin: 0px;
white-space: pre-line;
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
`
const ImageContent = styled.div`
position: relative;
flex: 1.5 1 0%;
height: 34.9vw;
box-sizing: border-box;
`
const MapWrapper = styled.div`
position: absolute;
left: 0px;
width: 50vw;
margin-top: 8%;
overflow: hidden;
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

`
const Phone = styled.img`
width: 100%;
`
function Section2() {
    return(
        <Section>
            <HeadingContainer>
                <H2>
                    Delivered To 
                    <br />
                    Your Door.
                </H2>
                <P>
                    Eleanor works with your schedule to have a 
                    <br />
                    white-glove delivery service deliver your new
                    <br />
                    vehicle right to your door.
                </P>
            </HeadingContainer>
            <ImageContent>
                <MapWrapper>
                    <Map src={MapImg}/>
                </MapWrapper>
                <Car src={Porsche}/>
                <PhoneWrapper>
                    <Phone src={PhoneImg}/>
                </PhoneWrapper>
            </ImageContent>
        </Section>
    )
}

export default Section2;