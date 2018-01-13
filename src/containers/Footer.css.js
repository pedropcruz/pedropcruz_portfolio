import styled from 'styled-components';
import variables from "../styles/variables.css";

const FooterCSS = styled.section`
  .footer{
    height: 15em;
    background: ${variables.colors.primaryColor};
    p{
      font: 400 1.2em/2.8em ${variables.fonts.Raleway};
      color: ${variables.colors.secondaryColor};
      opacity: .5;
    }
    a{
      text-decoration: none;
      color: ${variables.colors.secondaryColor};
      font: 900 1.5em/1.6em ${variables.fonts.Montserrat};
      @media ${variables.media.sm}{
        font: 900 2.4em/1em ${variables.fonts.Montserrat};
      }
    }
  }
  .socialLinks{
    margin: 0;
    ul{
      text-align: center;
      margin:${variables.value.bv5} 0;
      li{
        font-size:1.2em;
        a{
          text-decoration: none;
          color: ${variables.colors.primaryColor};
          margin: 0 2em;
        }
      }
    }
    span{
      display: none;
    }
  }
`;

export default FooterCSS;