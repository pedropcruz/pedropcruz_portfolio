import styled from 'styled-components';
import variables from "../../styles/variables.css";

const SkillsCSS = styled.div`
  position: relative;
  margin: 0 0 0 ${variables.value.bv6};
  border-left: 5px solid ${variables.colors.primaryColor};
  padding-left: ${variables.value.bv9};
  margin-bottom: ${variables.value.bv4};
  color: ${variables.colors.primaryColor};
  h1{
    font:700 ${variables.value.bv6}/${variables.value.bv8} ${variables.fonts.MontserratMedium};
  }
  .skills__{
    &education{
    padding: ${variables.value.bv4} 0;
     h2{
      margin-top: ${variables.value.bv2};
      font:700 ${variables.value.bv4}/${variables.value.bv6} ${variables.fonts.Montserrat}; 
     } 
     h4{
      font: 400 ${variables.value.bv3}/${variables.value.bv3} ${variables.fonts.MontserratMedium};
      margin-bottom: ${variables.value.bv2};
     }
     p{
      font: 400 ${variables.value.bv3}/${variables.value.bv5} ${variables.fonts.RalewayItalic};
     }
    }
    &profficiency{
      margin: ${variables.value.bv4} 0;
      padding: ${variables.value.bv4} 0;
      h4{
        position: relative;
        font:700 ${variables.value.bv3}/${variables.value.bv4} ${variables.fonts.Montserrat};
        &:after{
          content: "";
          position: absolute;
          bottom:-${variables.value.bv0};
          left:0;
          right: 0;
          height: 4px;
          width: 100%;
          background: ${variables.colors.primaryColor};
        }
      }
      div{
      margin: ${variables.value.bv3} 0;
        h2{
          font: 900 ${variables.value.bv4}/${variables.value.bv6} ${variables.fonts.Montserrat};
        }
        p{
          font: 900 ${variables.value.bv8}/${variables.value.bv6} ${variables.fonts.Montserrat};
        }
      }
    }
    &technical{
      margin: ${variables.value.bv4} 0;    
      padding: ${variables.value.bv4} 0;
      p{
        font: 400 ${variables.value.bv3}/${variables.value.bv4} ${variables.fonts.RalewayItalic};
      }   
    }
    &interests{
      margin: ${variables.value.bv4} 0;    
      padding: ${variables.value.bv4} 0;   
      p{                                                                                         
        font: 400 ${variables.value.bv3}/${variables.value.bv4} ${variables.fonts.RalewayItalic};
      }                                                                                          
    }
  }
`;

export default SkillsCSS;