import Head from 'next/head'

const DEFAULT_TITLE = 'KASKUS - Berbagi Hobi, Berkomunitas'
const DEFAULT_DESCRIPTION =
  'Forum diskusi hobi, rumah ribuan komunitas dan pusat jual beli barang hobi di Indonesia.'
const DEFAULT_KEYWORDS =
  'kaskus.co.id, kaskus, komunitas, berita, diskusi, cerita, tanya, jawab, jual beli, belanja'
const DEFAULT_IMAGE_WIDTH = 1200
const DEFAULT_IMAGE_HEIGHT = 630
const DEFAULT_IMAGE = 'https://s.kaskus.id/e3.1/images/default-meta-image.jpg'
const DEFAULT_URL = 'https://kaskus.co.id/'
const DEFAULT_AUTHOR = 'KASKUS'
const DEFAULT_OG_TYPE = 'website'

interface Props {
  title?: string
  description?: string
  url?: string
  keywords?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  type?: string
  author?: string
  ampURL?: string
  canonicalURL?: string
  ldJSON?: any
}

const Meta = ({
  title,
  description,
  url,
  keywords,
  image,
  imageWidth,
  imageHeight,
  type,
  author,
  ampURL,
  canonicalURL,
  ldJSON,
}: Props): JSX.Element => {
  const metaTitle = title || DEFAULT_TITLE
  const metaDesc = description || DEFAULT_DESCRIPTION
  const metaKeywords = keywords || DEFAULT_KEYWORDS
  const metaImage = image || DEFAULT_IMAGE
  const metaImageWidth = imageWidth || DEFAULT_IMAGE_WIDTH
  const metaImageHeight = imageHeight || DEFAULT_IMAGE_HEIGHT
  const metaURL = url || DEFAULT_URL
  const metaAuthor = author || DEFAULT_AUTHOR
  const metaOgType = type || DEFAULT_OG_TYPE

  return (
    <Head>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="author" content={metaAuthor} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:type" content={metaOgType} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content={String(metaImageWidth)} />
      <meta property="og:image:height" content={String(metaImageHeight)} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:url" content={metaURL} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@kaskus" />
      <meta property="twitter:creator" content="@kaskus" />
      <title>{metaTitle}</title>
      {ampURL && <link rel="amphtml" href={ampURL} />}
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}
      {ldJSON && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJSON) }}
        />
      )}
    </Head>
  )
}

export default Meta
export * from './ld+json'
