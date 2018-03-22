import styled from "styled-components";
import variables from "../../styles/variables.css";

const AboutCSS = styled.section`
  color: ${variables.colors.primaryColor};
  h1 {
    font: 900 1.3em/2em ${variables.fonts.Montserrat};
    @media ${variables.media.sm} {
      font: 900 3em/1.7em ${variables.fonts.Montserrat};
    }
  }
  form {
    min-height: 477px;
    text-align: center;
    margin: 0 2em;
    @media ${variables.media.sm}{
      margin: 0 auto;
    }
    h1 {
      font-size: 1.2em;
      letter-spacing: 0;
      @media ${variables.media.sm} {
        font-size: 1.8em;
      }
    }
    input {
      color: ${variables.colors.primaryColor};
      text-align: center;
      font: 400 2em/2.2em ${variables.fonts.Raleway};
      background: transparent;
      border: none;
      border-bottom: 4px solid ${variables.colors.primaryColor};
      &:focus {
        outline: 0;
      }
    }
  }
  article {
    text-align: center;
    padding: 4rem 2rem;
    @media ${variables.media.sm} {
      text-align: left;
    }
    h1.name {
      font-size: 1.7rem;
      margin: 0;
      letter-spacing: 0;
      @media ${variables.media.sm} {
        font-size: 3em;
      }
    }
    h2.role {
      letter-spacing: 0;
      font: 700 1.5em/1.2em ${variables.fonts.MontserratMedium};
    }
    p.text {
      font: 400 1.1em/1.2em ${variables.fonts.Raleway};
      text-align: justify;
      @media ${variables.media.sm} {
        text-align: inherit;
      }
    }
  }
  .socialLinks {
    span.scroll {
      left: 0;
      right: 0;
      top: 30%;
      font: 900 1.2em/1.4em ${variables.fonts.Montserrat};
      text-decoration: none;
      transform: rotate(90deg);
      color: ${variables.colors.primaryColor};
      z-index: -1;
      opacity: 0.2;
      @media ${variables.media.sm} {
        left: 45%;
        top: initial;
        right: initial;
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        display: inline-block;
        height: ${variables.value.bv3};
        width: 11em;
        margin-left: ${variables.value.bv3};
        background: ${variables.colors.primaryColor};
      }
    }
    ul {
      text-align: center;
      @media ${variables.media.md} {
        text-align: right;
      }
      li {
        display: block;
        margin: 1.5rem 0;
        @media ${variables.media.sm} {
          display: inline-block;
          margin: 0;
        }
        a {
          color: ${variables.colors.primaryColor};
          text-decoration: none;
          @media ${variables.media.sm} {
            margin: 0 2vw;
          }
          @media ${variables.media.lg} {
            margin: 0 3.5vw;
          }
          &:focus {
            outline: 0;
          }
          &:visited {
            color: ${variables.colors.primaryColor};
          }
        }
      }
    }
  }
`;

export default AboutCSS;
