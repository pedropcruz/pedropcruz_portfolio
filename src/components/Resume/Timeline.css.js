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
    &__graph{
      display: inline-block;
      height: 100%;
      width: 10px;
      background: ${variables.colors.primaryColor};
      margin: ${variables.value.bv11} 0;
      &--year{
        overflow: hidden;
        position: relative;
        color: ${variables.colors.primaryColor};
        position: relative;
        width: 700px;
        h1{
          margin: calc(${300 / 12 * 4 + 'px'} - 30px) 0 0 0;
          padding-bottom: 20px;
          position: relative;
          display: block;
          width: 500px;
          text-align: right;
          font:900 ${variables.value.bv5}/${variables.value.bv4} ${variables.fonts.Montserrat};
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
          display: block;
          width: 0;
          height: 0;
          background: ${variables.colors.primaryColor};
          &:nth-child(3n),
          &:first-of-type{
            margin-top: calc(${300 / 12 * 4 + 'px'} - 10px); 
            width: 200px;
            height: 10px;
          }
          &[data-present="true"]{
            margin:0;
          }
        }
      }
      &--markup{
        
      }
    }
  }
`;

export default TimelineCSS;
