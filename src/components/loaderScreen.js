import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import loader from '../images/loader.svg';
import crown from '../images/crown.svg';
import { gsap, Power3 } from 'gsap';

const LoaderScreen = styled.div`
background-color: white;
width: 100%;
height: 95vh;
display: flex;

`
const Crown = styled.img`
position: absolute;
height: 50px;
width: 50px;
`
const Loader = styled.img`
position: absolute;
height: 100px;
width: 100px;

`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
height: 100%;

`

function LoaderComponent() {

    const loaderRef = useRef(null);

    useEffect(() => {
        gsap.to(loaderRef.current, 5, {
            transformOrigin: 'center center',
            rotation: 360,
            });
    }, [])

    return (
        <LoaderScreen>
            <Container>
                <Crown src={crown} />
                <Loader src={loader} ref={loaderRef}/>
            </Container>
        </LoaderScreen>
    )
};

export default LoaderComponent;