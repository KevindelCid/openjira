import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { store } from '../store'
import { Provider } from 'react-redux'



export default function App({ Component, pageProps }: AppProps) {



  return (
    <Provider store={store}>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
  <Component {...pageProps} />
  </ThemeProvider>
  </Provider>
  )

}
