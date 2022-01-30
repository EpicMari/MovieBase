import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

body {
    background-color: ${({ theme }) => theme.colors.bgc};
}

button {
    cursor: pointer;
}

ul {
    list-style: none;
}

button {
    border: none;
    background: none;
}
`;
