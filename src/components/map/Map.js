import {
    MAP_HEIGHT,
    MAP_WIDTH,
} from "../../config/constans";

import styled from 'styled-components'

export const Map = styled.div`
  width: ${ MAP_WIDTH }px;
  height: ${ MAP_HEIGHT }px;
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
`;


