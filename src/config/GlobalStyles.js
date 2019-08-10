import { createGlobalStyle } from "styled-components";
import bg from "../assets/img/tileset/t0.png"

export const GlobalStyles = createGlobalStyle`
body {
padding: 0;
margin: 0;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${ bg });
font-size: 10px;
image-rendering: pixelated;
}`;
