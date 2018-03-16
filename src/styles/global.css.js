import {injectGlobal} from 'styled-components';
import variables from './variables.css';
import './reset.css';
import 'basscss/css/basscss.min.css';

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
  
    ${fontFace("Montserrat", "Montserrat", "Montserrat-Bold")};
    ${fontFace("Raleway", "Raleway", "Raleway-Regular")};
    ${fontFace("RalewayI", "Raleway", "Raleway-Italic")}
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
        top:0;
      }
    
      to {
        top: -500px;
      }
    }
    
    .fadeOutUp {
      position: absolute;
      display: block;
      width: 100%;
      left:50%;
      transform: translateX(-50%);
      animation-name: fadeOutUp;
    }
    
    .animated{
        animation-duration: 1s;
        animation-fill-mode: both;
    }

`;

