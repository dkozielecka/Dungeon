import styled from "styled-components";
import { TILE } from "../../config/constans";

export const Arrow = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height * 2 }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
`;