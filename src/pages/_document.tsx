import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  const year = new Date().getFullYear()

  return (
    <Html>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="content-language" content="id, en" />
        <meta name="spiders" content="all" />
        <meta name="robots" content="NOODP" />
        <meta name="rating" content="general" />
        <meta name="webcrawlers" content="all" />
        <meta
          name="copyright"
          content={`&copy; 1999-${year} Kaskus Networks All Right Reserved`}
        />
        <meta property="og:site_name" content="KASKUS" />
        <meta property="fb:pages" content="169377853224026" />
        <link rel="shortcut icon" href="//s.kaskus.id/favicon.ico?v=1.1" />
        <script src="https://www.googletagservices.com/tag/js/gpt.js" async />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* polyfill IntersectionObserver */}
        <script
          src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
          async
        />
      </body>
    </Html>
  )
}

export default Document
