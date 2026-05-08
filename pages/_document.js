import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx.locale || ctx.defaultLocale || 'th' }
  }

  render() {
    const { locale } = this.props
    return (
      <Html lang={locale}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/photos/logo.jpg" />
          {/* TODO: Replace content value with the FULL string from GSC.
              Currently truncated — go to GSC → Verify ownership → HTML tag → click COPY → replace the content value below. */}
          <meta name="google-site-verification" content="_Gfqs2nCfpXXHAOC..." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
