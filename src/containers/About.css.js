import styled from 'styled-components';
import variables from "../styles/variables.css";

const AboutCSS = styled.section`
  color: ${variables.colors.primaryColor};
  h1{
    margin-top: 2rem;
    font:900 1.3em/2em ${variables.fonts.Montserrat};
    @media ${variables.media.sm}{
      margin-top: 4rem;
      font:900 3em/1.7em ${variables.fonts.Montserrat};
    }
    
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
  text-align: center;
    @media ${variables.media.sm}{
      text-align: left;
    }
    h1.name{
      font-size: 1.7rem;
      margin: 0;
      letter-spacing: 0;
      @media ${variables.media.sm}{
        font-size: 3em;
        margin-top: 2rem;
      }
    }
    h2.role{
      letter-spacing: 0;
      font: 700 1.5em/1.2em ${variables.fonts.MontserratMedium};
    }
    p.text{
      font: 400 1.1em/1.2em ${variables.fonts.Raleway};
      text-align: justify;
      @media ${variables.media.sm}{
        text-align: inherit;      
      }
    }
  }
  .socialLinks{
    span.scroll{
      left:0;
      right:0;
      top:50%;
      font: 900 1.2em/1.4em ${variables.fonts.Montserrat};
      text-decoration: none;
      transform: rotate(90deg);
      color: ${variables.colors.primaryColor};
      z-index:0;
      opacity: .2;
      @media ${variables.media.sm}{
        left:45%;
        top:initial;
        right: initial;        
      }
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
    ul{
      text-align: center;
      @media ${variables.media.md}{
        text-align: right;
      }
      li{
        display: block;
        margin:1.5rem 0;
        @media ${variables.media.sm}{
          display: inline-block;
          margin: 0;
        }
        a{
          color: ${variables.colors.primaryColor};
          text-decoration: none;
          @media ${variables.media.sm}{
            margin:0 1rem;
          }
          @media ${variables.media.md}{
            margin:0 1.5rem;
          }
          @media ${variables.media.lg}{
            margin:0 3.5rem;
          }
          &:focus{
            outline: 0;
          }
          &:visited{
            color: ${variables.colors.primaryColor}; 
          }
        }  
      }
    } 
  }
`;

export default AboutCSS;