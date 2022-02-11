import React from 'react';
import styled from 'styled-components';
import Car from '../images/front-porsche.png'
import Screenshot from '../images/vehicle-swap-screenshot.png'

const Section = styled.section`
display: Flex;
padding: 6vw 5% 0px;
background-color: white;
height: 100vh;
`
const LeftColumn = styled.div`
position: relative;
height: 90vh;
width: 30vw;
transform: translateY(-6vh);
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
`
const Img = styled.img`
width: 100%;
`
const HeadingWrapper = styled.div`
flex: 1 1 0%;
margin-left: 15vw;
margin-top: 25vh;
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
function Section3() {
    return(
        <Section>   
            <LeftColumn>
                <CardWrapper>
                    <Card>
                        <CarImg src={Car}/>
                    </Card>
                </CardWrapper>
                <ScreenshotWrapper>
                    <Img src={Screenshot}/>
                </ScreenshotWrapper>
            </LeftColumn>

            <HeadingWrapper>
                <H2>
                    Trade in Your Car
                    <br />
                    Every Month.
                </H2>
                <P>
                Use Eleanor Trade-In Credits to trade in your vehicle for 
                <br />
                something else in our luxurious inventory.  Nothing says 
                <br />
                “June” like a new car!
                </P>
            </HeadingWrapper>
        </Section>
    )
}

export default Section3;