import styled from 'styled-components';
import variables from "../styles/variables.css";

const AboutCSS = styled.section`
  color: ${variables.colors.primaryColor};
  h1{
    font:900 3em/1.7em ${variables.fonts.Montserrat};
  }
  form{
    min-height: 385px;
    h1{
      font-size: 1.8em;
      letter-spacing: 0;
    }
    input{
      color: ${variables.colors.primaryColor};
      text-align: center;
      font:400 2em/2.2em ${variables.fonts.Raleway};
      background: transparent;
      border: none;
      border-bottom: 4px solid ${variables.colors.primaryColor};
      &:focus{
        outline: 0;
      }
    }
  }
  article{
    h1.name{
      letter-spacing: 0;
    }
    h2.role{
      letter-spacing: 0;
      font: 700 1.5em/1.2em ${variables.fonts.MontserratMedium};
    }
    p.text{
      font: 400 1.1em/1.2em ${variables.fonts.Raleway};
    }
  }
  .socialLinks{
    span.scroll{
      left:45%;
      font: 900 1.2em/1.4em ${variables.fonts.Montserrat};
      text-decoration: none;
      transform: rotate(90deg);
      color: ${variables.colors.primaryColor};
      z-index:0;
      opacity: .2;
      &:after{
        content:"";
        position: absolute;
        top:50%;
        transform: translate(0,-50%);
        display: inline-block;
        height: ${variables.value.bv3};
        width:11em;
        margin-left: ${variables.value.bv3} ;
        background: ${variables.colors.primaryColor};
      }
    }
    a{
      color: ${variables.colors.primaryColor};
      text-decoration: none;
      &:focus{
        outline: 0;
      }
      &:visited{
        color: ${variables.colors.primaryColor}; 
      }
    }   
  }
`;

export default AboutCSS;