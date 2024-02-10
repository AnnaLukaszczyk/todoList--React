import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
}

*,
::after,
::before {
	box-sizing: inherit;
}

body {
	margin: 0 auto;
	height: 100vh;
	font-family: "Lato", sans-serif;
	background-color: #ddd;
}
`