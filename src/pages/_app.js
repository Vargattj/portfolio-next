import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    img{
      display: block;
      max-width: 100%;
    }
  }
`;

const theme = {
  colors: {
    primary: "#16213e",
    second: "#e94560",
    cornFlower: "#1a1a2e",
    greenBlue: "#BBBAC6",
    textPrimary: "#eee",
    textSecond: "#ddd",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
