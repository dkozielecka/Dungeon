import { createGlobalStyle } from "styled-components";
import bg from "../assets/img/tileset/t0.png"

export const GlobalStyles = createGlobalStyle`
body {
padding: 0;
margin: 0;
height: 100vh;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
transform: scale(2);
background-image: url(${ bg });
}`;
