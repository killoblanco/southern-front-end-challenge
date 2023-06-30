import { MuiProvider } from '@/mui'
import createEmotionCache from '@/mui/cache'
import { type EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReduxProvider } from '@/redux/provider'

const clientSideEmotionCache = createEmotionCache()

export interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: React.FC<CustomAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Mars Rover</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ReduxProvider>
      <MuiProvider>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </MuiProvider>
    </ReduxProvider>
  </CacheProvider>
)

export default App
