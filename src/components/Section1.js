import React from 'react';
import styled from 'styled-components';
import forwardarrow from '../images/forwardarrow.svg';
import backarrow from '../images/backarrow.svg';
import gas from '../images/gas.svg';
import hp from '../images/hp.svg';
import mph from '../images/mph.svg';
import RangeRover from '../images/2018-Range-Rover-Velgar.png';

const Section = styled.section`
display: flex;
padding: 6vw 5% 0px;
background-color: rgb(255, 255, 255);
height: 100vh;
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
`
const ProductTitle = styled.div`
margin-top: 25%;
margin-left 20%;
`
const H3 = styled.h3`
color: black;
font-size: 4vw;
font-weight: normal;
margin: 0px;
`
const H4 = styled.h4`
color: #4B5168;
font-size: 1.08vw;
font-weight: normal;
margin: 0px;
line-height: 0.5;
`
const Table = styled.table`
width: 42%;
margin-left: 20%;
margin-top: 13%;
`
const Row = styled.tr`
height: 3vw;
`
const Icon = styled.img`
width: 1.45vw;
`
const Span = styled.span`
position: relative;
top: -0.3vw;
left: 0.6vw;
`
const Specs = styled.td`
color: rgb(0, 0, 0);
font-family: "Bebas Neue", sans-serif;
font-size: 2.2vw;
font-weight: normal;
padding-top: 5px;
`
const IconContainer = styled.td`
color: rgb(0, 0, 0);
font-family: "Bebas Neue", sans-serif;
font-size: 1vw;
font-weight: normal;
`
const CarContainer = styled.div`
position: absolute;
width: 43vw;
bottom: -11vh;
left: 5.6vw;
`
const CarImage = styled.img`
width: 100%;
`
const HeadingContainer = styled.div`
flex: 1 1 0%;
padding-left: 10vw;
margin-top: 10vh;
}
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
function Section1() {
    return(
        <Section>
            <Card>
                <BackgroundContainer>
                    <Background />
                </BackgroundContainer>
                <ItemsContainer>
                    <ButtonContainer>
                        <BackButton>
                            <BackArrow src={backarrow}/>
                        </BackButton>
                        <ForwardButton>
                            <ForwardArrow src={forwardarrow} />
                        </ForwardButton>
                    </ButtonContainer>
                    <BodyContainer>
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
                <CarContainer>
                    <CarImage src={RangeRover}/>
                </CarContainer>
            </Card>
            <HeadingContainer>
                <H2>
                    Select a Vehicle From Your Phone.
                </H2>
                <P>
                    Select from a wide range of luxury vehicles in our inventory.
                    <br />   
                    Drive it for a month, trade it the next for something else you have 
                    <br />
                    always wanted to own.
                </P>
            </HeadingContainer>
        </Section>
    )
}

export default Section1