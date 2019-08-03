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
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: relative;
`;

export const ItemTile = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: 150px
`;

export const Map = styled.div`
  width: ${ MAP_WIDTH }px;
  height: ${ MAP_HEIGHT }px;
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
`;
