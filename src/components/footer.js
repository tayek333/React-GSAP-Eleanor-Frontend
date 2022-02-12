import React from "react";
import styled from 'styled-components';
import footerimg from '../images/footerlogo.svg'

const FooterContainer = styled.div`
display: flex;
width: 100%;
-moz-box-pack: center;
justify-content: center;
padding: 0px 5% 6.25vw;
flex-wrap: wrap;
`
const Divider = styled.div`
background: rgb(244, 244, 245) none repeat scroll 0% 0%;
height: 1px;
width: 100%;
flex: 1 1 100%;
margin: 6.25vw 0px 1.875vw;
`
const Row = styled.div`
flex: 1 1 0%;
display: flex;
-moz-box-align: center;
align-items: center;
-moz-box-pack: end;
justify-content: space-between;
`
const LogoLink = styled.a`
padding: 10px 20px;
color: rgb(65, 74, 105);
font-size: 1.2vw;
font-weight: 600;
letter-spacing: -0.02vw;
text-decoration: none;
`
const FooterLogo = styled.img`
height: 1.2vw;
}
`
const SpaceBetween = styled.div`
flex: 1 1 0%;
`
const Footerlinks = styled.a`
color: rgb(65, 74, 105);
font-size: 1.2vw;
font-weight: normal;
letter-spacing: -0.02vw;
text-decoration: none;
padding: 10px 20px;
`
function Footer(){
    return(
        <FooterContainer>
            <Divider>
                <Row>
                    <LogoLink href='./'>
                        <FooterLogo src={footerimg}/>
                    </LogoLink>
                    <SpaceBetween />
                    <Footerlinks href='./'>
                        About us
                    </Footerlinks>
                    <Footerlinks href='./'>
                        Terms of Use
                    </Footerlinks>
                    <Footerlinks href='./'>
                        FAQ
                    </Footerlinks>
                </Row>
            </Divider>
        </FooterContainer>
    )
}

export default Footer