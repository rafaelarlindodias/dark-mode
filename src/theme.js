import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#000",
};

export const darkTheme = {
  body: "#000",
  text: "#fff",
};

export const GlobalTheme = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: all 0.25s linear;
  }
`;