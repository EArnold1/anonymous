import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
