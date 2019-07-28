import {
    MAP_HEIGHT,
    MAP_WIDTH,
    TILE
} from "../../config/constans";
import styled from "styled-components";

export const Tile = styled.div`
width: ${ TILE.width }px;
height: ${ TILE.height }px;
background-image: url(${ props => props.value });
background-repeat: no-repeat;
`;

export const Map = styled.div`
width: ${ MAP_WIDTH }px;
height: ${ MAP_HEIGHT }px;
position: relative;
display: inline-flex;
flex-wrap: wrap;
`;
