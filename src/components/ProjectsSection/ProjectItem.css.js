import styled from 'styled-components';
import variables from "../../styles/variables.css";

const ProjectItemCSS = styled.article `
    margin: 8rem 2rem;
    height: 22em;
    border: ${variables.value.bv3} solid ${variables.colors.primaryColor};
    @media ${variables.media.sm}{
      height: 420px;
      margin-top: 10rem;
      border: ${variables.value.bv5} solid ${variables.colors.primaryColor};
    } 
  .project-item{
    &--number{
      font: 900 2em/2em ${variables.fonts.Montserrat};
      color: ${variables.colors.primaryColor};
      border: ${variables.value.bv3} solid ${variables.colors.primaryColor};
      position: absolute;
      left: 50%;
      transform: translate(-50%,0);
      @media ${variables.media.sm}{
        position: relative;
        left: unset;
        transform: translate(0);
      }
    }
    &--image{
      text-align: center;
      top: -6rem;
      right: 0;
      left:0;
      @media ${variables.media.sm}{
        left: unset;
        top: ${variables.value.bv10};
        right: -10%;
      }
      @media ${variables.media.md}{
        right: -5%;
      }
      @media ${variables.media.lg}{
        right: -10%;
      }
      img{
        width: 100%;
        max-width: 250px;
        @media ${variables.media.sm}{
          max-width:350px;
        }
        @media ${variables.media.lg}{
          max-width:500px;
        }
      }
    }
    &--details {
      width:100%;
      left:0;
      bottom: 1rem;
      color: ${variables.colors.primaryColor};
      text-align: center;
      @media ${variables.media.sm}{
        bottom: 4rem;
        left: unset;
        text-align: left;
      }
      &__name {
        font: 900 .8em/2em ${variables.fonts.Montserrat};
        @media ${variables.media.sm}{
          font: 900 1.4em/3em ${variables.fonts.Montserrat};        
        }
      }
      &__lead{
        width: 100%;
        font: 400 1em/1.5em ${variables.fonts.Raleway};
        @media ${variables.media.sm}{
          width: 58.33333%;
        }
      }
      &__linkProject{
        width: 4rem;
        margin: 3em auto;
        height: ${variables.value.bv1};
        background: ${variables.colors.primaryColor};
        @media ${variables.media.sm}{
          margin:2rem 0 0 0;
        }
      }
      &__stack{
        li{
          display: block;
          text-transform: uppercase;
          margin:0;
          @media ${variables.media.md}{
            display: inline-block;
            margin:0 1em;
          }
          &:first-child{
            margin-left:0;
          }
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
  }
`;

export default ProjectItemCSS;