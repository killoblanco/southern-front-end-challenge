import createEmotionCache from '@/mui/cache'
import { type CustomAppProps } from '@/pages/_app'
import createEmotionServer from '@emotion/server/create-instance'
import { type AppType } from 'next/app'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentProps,
  type DocumentContext
} from 'next/document'

interface CustomDocumentProps extends DocumentProps {
  emotionStyleTags: React.JSX.Element[]
}

export default function CustomDocument ({
  emotionStyleTags
}: CustomDocumentProps): React.JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.svg"/>
        <meta name="mui-emotion"/>
        {emotionStyleTags}
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = async () => await originalRenderPage({
    enhanceApp: (
      App: React.ComponentType<React.ComponentProps<AppType> & CustomAppProps>
    ) => (props) => (
      <App emotionCache={cache} {...props} />
    )
  })

  const initialProps = await Document.getInitialProps(ctx)

  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return { ...initialProps, emotionStyleTags }
}
