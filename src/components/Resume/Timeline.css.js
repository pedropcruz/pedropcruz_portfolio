import styled from "styled-components";
import variables from "../../styles/variables.css";

const heightYearMarkups = 500;

const TimelineCSS = styled.div`
  .timeline {
    &__image {
      img {
        width: 100%;
      }
    }
    &__desc {
      color: ${variables.colors.primaryColor};
      text-align: center;
      @media ${variables.media.sm}{
        text-align: initial;
      }
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
    &__graph{
      position: relative;
      display: block;
      border-left: 10px solid ${variables.colors.primaryColor};
      margin: ${variables.value.bv11} 0;
      &--year{
        overflow: hidden;
        position: relative;
        color: ${variables.colors.primaryColor};
        position: relative;
        width: 700px;
        h1{
          padding: ${heightYearMarkups/12 + 'px'} 0;
          position: relative;
          display: block;
          width: 500px;
          text-align: right;
          font:900 ${variables.value.bv5}/${heightYearMarkups/12 + 'px'} ${variables.fonts.Montserrat};
          &:after{
            content: "";
            position: absolute;
            left:0;
            bottom:0;
            right: 0;
            width: 100%;
            height: 10px;
            background: ${variables.colors.primaryColor};
          }
        }
        &_month{
          position: relative;
          display: block;
          width: 0;
          height: ${heightYearMarkups/12 + 'px'};
          &:nth-child(3n){
          width: 200px;
            &:after{
              content: "";
              position: absolute;
              display: block;
              bottom: 0;
              left:0;
              width: 100%;
              height: 10px;
              box-shadow: inset 0 0 200px ${variables.colors.primaryColor};
            }
          }
          &[data-present="true"]{
            margin:0;
          }
        }
      }
      &--markups{
        position: absolute;
        right:0;
        bottom: ${(props => props.geth1ElementHeight + (heightYearMarkups/12)*6)}px;
        &__job{
          position: relative;
          border-left: 10px dashed ${variables.colors.primaryColor};
          &:after{
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            transform: translate(-75%, -50%) rotate(45deg);
            background: ${variables.colors.secondaryColor};
            border: 8px solid ${variables.colors.primaryColor};
            top: 50%;
            left:0;
          }
          &:nth-child(3){
            justify-content: normal !important;
          }
          h1{
            font: 900 ${variables.value.bv5}/${variables.value.bv6} ${variables.fonts.Montserrat};
            color: ${variables.colors.primaryColor};
          }
          p{
            font: 900 ${variables.value.bv3}/${variables.value.bv4} ${variables.fonts.Montserrat};
            color: ${variables.colors.primaryColor};
          }
          a{
            text-decoration: none;
            font: 400 ${variables.value.bv3}/${variables.value.bv4} ${variables.fonts.Raleway};
            color: ${variables.colors.primaryColor};
          }
        }
      }
    }
    
    &__mobile{
      border-top: 4px solid ${variables.colors.primaryColor};
      border-bottom: 4px solid ${variables.colors.primaryColor};
      color: ${variables.colors.primaryColor};
      &:first-child{
        border-top: 0;
      }
      &:last-child{
        border-bottom:0;
      }
      > * {
        color: inherit;
      }
      h1{
        font:900 ${variables.value.bv3}/${variables.value.bv6} ${variables.fonts.Montserrat};
      }
      h2 span{
        margin:0 .5em;
      }
      h3{
        font:900 ${variables.value.bv2}/${variables.value.bv8} ${variables.fonts.Montserrat};
        a{
          text-decoration: none;
          color: inherit;
          background: transparent;
          transition: all .3s ease-in-out;
          padding: .5em;
          &:hover{
            background: ${variables.colors.primaryColor};
            color: ${variables.colors.secondaryColor}
          }
        }      
      }
      a.link{
        font: 900 ${variables.value.bv2}/${variables.value.bv4} ${variables.fonts.Raleway};
      }
    }
  }
`;

export default TimelineCSS;
