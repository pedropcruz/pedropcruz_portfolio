import styled from 'styled-components';

const PlayerCSS = styled.div`
  position:relative;
  padding-bottom: 56.25%;
  .react-player{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height: 100% !important;
    width: 100% !important;
  }
`;

export default PlayerCSS;