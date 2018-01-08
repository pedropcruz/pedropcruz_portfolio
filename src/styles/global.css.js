import {injectGlobal} from 'styled-components';
import variables from './variables.css';
import './reset.css';
import 'basscss/css/basscss.min.css'

function fontFace(name, src, fontDir) {
    return `
       @font-face {
          font-family: '${name}';
          src: url('../fonts/${src + '/' + fontDir}.ttf')  format('truetype');
          font-weight: normal;
          font-style: normal;
        }
    `;
}

injectGlobal`
  
    ${fontFace("Montserrat", "Montserrat", "Montserrat-SemiBold")};
    ${fontFace("Raleway", "Raleway", "Raleway-Regular")};
    ${fontFace("MontserratM", "Montserrat", "Montserrat-Medium")};
    
    html, body{
      font-family: ${variables.fonts.Raleway};
      background: ${variables.colors.secondaryColor};
    }
  
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
    
      to {
        opacity: 1;
        transform: none;
      }
    }
    
    .fadeInDown {
      animation-name: fadeInDown;
    }
    
    @keyframes fadeOutUp {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
    }
    
    .fadeOutUp {
      animation-name: fadeOutUp;
    }
    
    .animated{
        animation-duration: 1s;
        animation-fill-mode: both;
    }

`;

