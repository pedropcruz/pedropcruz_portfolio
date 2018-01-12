import styled from 'styled-components';
import variables from "../styles/variables.css";
import {lighten} from 'polished';

export const HeaderCSS = styled.nav`
  img{
    width: 60px;
  }
  .xs-hide{
    img{
      width: 200px;
    }
  }
  ul.list-reset{
    li{
      a{
        position: relative;
        text-decoration: none;
        font:900 1.7em/2em ${variables.fonts.Montserrat};
        color: ${lighten(.4,variables.colors.primaryColor)};
        &:before{
          position: absolute;
          top: -.35em;
          left: 0;
          overflow: hidden;
          max-width: 0;
          border-bottom: .3em solid ${variables.colors.primaryColor};
          color: ${variables.colors.primaryColor};
          content: attr(data-hover);
          transition: max-width .7s;
        }
        &:hover{
          &:before{
            max-width: 100%;
          }
        }
      }
    }
  }
  button{
    background: transparent;
    border: 0;
    width: 30px;
    &:hover{
      cursor: pointer;
    }
    span{
      height: ${variables.value.bv0};
      background: ${variables.colors.primaryColor};
    }
  }
`;