import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
import { SessionProvider } from "next-auth/react"
import Navbar8 from '../components/navbar8'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextIntlProvider messages={pageProps?.messages}>
        <GlobalProvider>
          <Navbar8 
            link1Url="/"
            link2Url="/runners"
            logoSrc="/path/to/your/logo.png"
            logoAlt="Alpha Run Logo"
          />
          <Component {...pageProps} />
        </GlobalProvider>
      </NextIntlProvider>
    </SessionProvider>
  )
}
