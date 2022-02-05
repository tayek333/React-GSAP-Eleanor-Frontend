import { createGlobalStyle } from 'styled-components'
import Eina03 from '../../fonts/Eina03-Bold.ttf'

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

@font-face {
    font-family: Eina03;
    src: url(${Eina03});
}
* {
    box-sizing: border-box;
}

body{
    font-family: 'Bebas Neue';
    margin: 0;
    font-size: 1.15em;
    padding: 0;
    
}

img {
    max-width 100%;
}
`

export default GlobalStyles