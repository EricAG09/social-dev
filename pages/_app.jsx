import { useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import moment from "moment"
import 'moment/locale/pt-br'
import 'react-toastify/dist/ReactToastify.css';

import theme from "../src/theme"

const GlobalStyle = createGlobalStyle`  * {
  padding: 0px;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.background};
}

a{
  color: ${props => props.theme.primary};
  font-weight: bold;
  text-decoration: none;
  transistion: 0.5s;
}

a:hover{
  color: ${props => props.theme.primaryHover};
}
`



function App ({ Component, pageProps }) {

  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    moment.locale('pt-br')
  }, [])

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
    </ThemeProvider>
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
    </>
  )
}

export default App