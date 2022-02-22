import { createGlobalStyle } from 'styled-components'
import { sizes } from '../helpers/sizes'

const GlobalStyle = createGlobalStyle`
#__next {
  @media(max-width: ${sizes.tb}) {
    width: 200%;
  }
}
@font-face {
  font-family: "Adelia";
  src: url("/fonts/Adelia.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  p {
    font-family: 'Chelsea Market', cursive;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
