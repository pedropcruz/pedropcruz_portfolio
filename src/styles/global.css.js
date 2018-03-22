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
        top: -1000px;
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
    
    body.ReactModal__Body--open{
        .overlay{
          background:${variables.colors.primaryColor};
           position: fixed;
           top:0;
           left:0;
           right:0;
           bottom:0;
           z-index: 20;
          .overlayModal{
            height:100%; 
            ul{
              display: flex;
                align-content: center;
                justify-content: center;
                flex-direction: column;
                float: none;
                text-align: center;
                height:100%; 
                li{
                  display: block;
                  a{
                    font: 900 2.3em/2em ${variables.fonts.Montserrat};
                    color: ${variables.colors.secondaryColor};
                    text-decoration: none;
                  }
                }
              }
              a.close{
                width:45px;
                height: 45px;
                background: transparent;
                border: 0;
                &:before,
                &:after{
                  content:'';
                  position: absolute;
                  display: block;
                  top:50%;
                  transform: translate(0, 50%);
                  width: 100%;
                  height: ${variables.value.bv1};
                  background: ${variables.colors.secondaryColor};
                }
                &:before{
                  transform: rotate(45deg);
                }
                &:after{
                  transform: rotate(-45deg);
                }
                &:hover{
                  cursor: pointer;
                }
              }
          }
      }
    }
    
`;

