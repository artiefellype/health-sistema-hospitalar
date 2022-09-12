import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Dashboard from './Home'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  )
}

export default MyApp
