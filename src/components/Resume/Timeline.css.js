import styled from "styled-components";
import variables from "../../styles/variables.css";

const TimelineCSS = styled.div`
  .timeline {
    &__image {
      img {
        width: 100%;
      }
    }
    &__desc {
      color: ${variables.colors.primaryColor};
      h2 {
        font: 900 2.25em/normal ${variables.fonts.Montserrat};
      }
      h1 {
          font:900 3.7em/normal ${variables.fonts.Montserrat};
      }
      p {
          font:400 .875em/1em ${variables.fonts.Raleway};
      }
      a.btn {
          color: inherit;
          font:900 0.75em/1em ${variables.fonts.Montserrat};
          border:${variables.value.bv0} solid ${variables.colors.primaryColor};
          text-decoration: none;
          transition: opacity .3s;
          opacity:1;
          &:hover{
              cursor: pointer;
              opacity: .7;
          }
      }
    }
    &__grid{
      height: 800px;
    }
  }
`;

export default TimelineCSS;
