import React from "react";
import styled from 'styled-components';
import logo from '../images/logo.png';

const Logo = styled.img`
height: 100%;
margin-left: 5px;
`
const HeaderContainer = styled.div`
display: flex;
height: 100px;
align-items: center;
padding: 0px 5%;
position: absolute;
top: 0px;
left: 0px;
background: #FBC843;
`
const LogoContainer = styled.div `

`

function Header() {
    return(
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo}/>
            </LogoContainer>
        </HeaderContainer>
    )
}

export default Header