import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="module"
          src="https://c-staging.kaskus.id/dist/v1.2.7/eternals.es.js"
          async
        />
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
