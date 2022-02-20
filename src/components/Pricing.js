import React from 'react';
import styled from 'styled-components';
import Coinimg from '../images/coin.svg';
import PaperIcon from '../images/paper.svg';
import WrenchIcon from '../images/wrench.svg';
import { media } from './styles/global.styles';

const Section = styled.section`
display: flex;
padding: 0px 5%;
background-color: rgb(255, 255, 255);
height: 70vh;
overflow: hidden;

${media.m} {
    flex-direction: column;
    padding: 16vh 5% 0px;
    height: unset;
}
`
const Container = styled.div`
display: flex;
-moz-box-align: center;
align-items: center;
width: 100%;
height: 100%;
-moz-box-pack: justify;
justify-content: space-between;
${media.m} {
    flex-direction: column;
}
`
const Box = styled.div`
display: flex;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
flex-direction: column;
background-color: rgb(244, 244, 245);
height: 28.3vw;
width: 28.3vw;
${media.m} {
    flex-direction: column;
    height: 100vw;
    width: 100vw;
    margin-bottom: 3vw;
}
`
const Icon = styled.img`
height: 30%;
`
const Content = styled.div`
display: flex;
flex-direction: column;
`
const H2 = styled.h2`
color: rgb(43, 49, 68);
font-size: 2.1vw;
font-weight: normal;
letter-spacing: -0.01vw;
line-height: 1;
margin: 2vw 0px 1vw;
${media.m} {
    font-size: 8vw;
    letter-spacing:-0.01vw;
    line-height: 1;
    margin: 10vw 0px 4vw;
}
`
const P = styled.p`
white-space: pre-line;
color: rgb(0, 0, 0);
font-size: 0.875vw;
font-weight: normal;
letter-spacing: -0.03vw;
line-height: 1.5;
margin: 0px;
${media.m} {
    font-size: 3vw;
    letter-spacing: -0.01vw;
}
`
function Pricing(){
    return(
        <Section>
            <Container>
                <Box>
                    <Icon src={Coinimg}/>
                    <Content>
                        <H2>
                            Simple Monthly Pricing
                        </H2>
                        <P>
                            Pick your plan, pay the monthly price.  
                            <br />
                            Thats it.  No hidden fees!
                        </P>
                    </Content>
                </Box>
                <Box>
                    <Icon src={PaperIcon}/>
                    <Content>
                        <H2>Vehicle Insurance Included</H2>
                        <P>
                        That’s right, you’re covered.  All Eleanor plans 
                        <br />
                        include insurance coverage.
                        </P>
                    </Content>
                </Box>
                <Box>
                    <Icon src={WrenchIcon}/>
                    <Content>
                        <H2>
                            MAINTENANCE IS COVERED
                        </H2>
                        <P>
                            Leave it us.  Don’t worry about maintaining 
                            <br />
                            your vehicle.  Eleanor covers that as well.
                        </P>
                    </Content>
                </Box>
            </Container>
        </Section>
    )
}

export default Pricing