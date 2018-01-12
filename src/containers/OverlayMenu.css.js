import styled from 'styled-components';
import variables from "../styles/variables.css";

const OverlayMenuCSS = styled.div`
  background:${variables.colors.primaryColor};
  ul{
    float: none;
    text-align: center;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
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
`;

export default OverlayMenuCSS;
