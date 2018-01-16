import styled from 'styled-components';
import Square from '../../resources/square.svg';
import Hexagon from '../../resources/hexagon.svg';
import Cross from '../../resources/cross.svg';
import Triangle from '../../resources/triangle.svg';

const BackgroundAnimatedCSS = styled.div`
    opacity: .2;
    z-index: 0;
    div{
        position: absolute;
        width: 30px;
        height: 30px;
        &.hexagon{
            background-image: url(${Hexagon});
            background-size: 100% 100%;
        }
        &.square{
            background-image: url(${Square});
            background-size: 100% 100%;
        }
        &.cross{
            background-image: url(${Cross});
            background-size: 100% 100%;
        }
        &.triangle{
            background-image: url(${Triangle});
            background-size: 100% 100%;
        }
        &.outer{
            transition: 5s ease-in-out;
        }
    }
`;



export default BackgroundAnimatedCSS;
