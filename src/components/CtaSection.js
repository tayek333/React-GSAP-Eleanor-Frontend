import React from 'react';
import styled from 'styled-components'
import Guy from '../images/guy.png'
import Car from '../images/car2.png'

const Section = styled.section`
display: flex;
padding: 6vw 5% 0px;
background-color: rgb(255, 255, 255);
height: 100vh;
`
const CardContainer = styled.div`
display: flex;
-moz-box-pack: center;
justify-content: center;
align-items: flex-end;
position: relative;
height: 80vh;
width: 40vw;
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

`
const CenterImg = styled.img`

`
const CarImg = styled.img`

`
function CtaSection(){
    return(
        <Section>
            <CardContainer>
                <CardWrapper>
                    <Background />
                </CardWrapper> 
                    <CenterImg src={Guy}/>
                    <CarImg src={Car}/>
            </CardContainer>
        </Section>
    )
}

export default CtaSection