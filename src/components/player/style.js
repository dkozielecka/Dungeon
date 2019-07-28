import styled from "styled-components";
import { TILE } from "../../config/constans";
import Character_2 from "../../assets/img/Character_2.png";

export const Character = styled.div`
width: ${ TILE.width }px;
height: ${ TILE.height }px;
position: absolute;
top: ${ props => props.x }px;
left: ${ props => props.y }px;
background-image: url(${ Character_2 });
background-repeat: no-repeat;
`;