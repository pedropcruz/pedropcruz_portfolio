import styled from 'styled-components';
import variables from "../../styles/variables.css";

const ProjectItemCSS = styled.article `
    margin-top: 10rem;
    height: 420px;
    border: ${variables.value.bv5} solid ${variables.colors.primaryColor}; 
  .project-item{
    &--number{
      font: 900 2em/2em ${variables.fonts.Montserrat};
      color: ${variables.colors.primaryColor};
      border: ${variables.value.bv3} solid ${variables.colors.primaryColor}
    }
    &--image{
      top: ${variables.value.bv10};
      right: -12rem;
      img{
        max-width: 500px;
      }
    }
    &--details {
      width:100%;
      bottom: 4rem;
      color: ${variables.colors.primaryColor};
      &__name {
        font: 900 1.4em/3em ${variables.fonts.Montserrat};
      }
      &__lead{
        font: 400 1em/1.5em ${variables.fonts.Raleway};
      }
      &__linkProject{
        width: 4rem;
        height: ${variables.value.bv1};
        background: ${variables.colors.primaryColor};
      }
    }
  }
`;

export default ProjectItemCSS;