import React from "react";
import styled from 'styled-components';
import logo from '../images/logo.png';
import { media } from './styles/global.styles'

const Logo = styled.img`
height: 100%;
margin-left: 5px;
`
const HeaderContainer = styled.div`
display: flex;
height: 100px;
width: 100%;
align-items: center;
padding: 0px 5%;
position: absolute;
top: 0px;
left: 0px;
`
const LogoLink = styled.a`
z-index: 1;
height: 1vw;
${media.m} {
    height: 3.882vw;
}
`

function Header() {
    return(
        <HeaderContainer>
            <LogoLink>
                <Logo src={logo}/>
            </LogoLink>
        </HeaderContainer>
    )
}

export default Header