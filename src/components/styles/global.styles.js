import { createGlobalStyle } from 'styled-components'
import Eina03 from '../../fonts/Eina03-Bold.ttf'
import BebasRegular from '../../fonts/BebasNeue Regular.otf'
import BebasBold from '../../fonts/BebasNeue Bold.otf'
import BebasBook from '../../fonts/BebasNeue Book.otf'  

export const media = {
    s: '@media(max-width: 767px)',
    m: '@media(max-width: 1023px)'
}

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

@font-face {
    font-family: Eina03;
    src: url(${Eina03});
}
@font-face {
    font-family: BebasNeue;
    src: url(${BebasRegular});
    font-weight: normal;
}
@font-face {
    font-family: BebasNeue;
    src: url(${BebasBold});
    font-weight: bold;
}
@font-face {
    font-family: BebasNeue;
    src: url(${BebasBook});
    font-weight: 200;
}


* {
    box-sizing: border-box;
}

body{
    font-family: 'Bebas Neue';
    margin: 0;
    font-size: 16px;
    padding: 0;
    
}

img {
    max-width 100%;
}

p {
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

`

export default GlobalStyles