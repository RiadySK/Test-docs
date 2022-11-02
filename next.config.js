const isProd =
  process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== ''

const headers = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'referrer-policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'self';`,
          },
          {
            key: 'X-Frame-Options',
            value: 'sameorigin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

const webpack = {
  webpack: (config) => {
    /* 
      Fix tailwind :dark on css.modules
      ref: 
      - https://github.com/tailwindlabs/tailwindcss/issues/3258
      - https://github.com/tailwindlabs/tailwindcss/discussions/3109#discussioncomment-1632726
    */
    const rules = config.module.rules.find((r) => !!r.oneOf)

    rules.oneOf.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((l) => {
          if (
            typeof l !== 'string' &&
            typeof l.loader === 'string' &&
            /(?<!post)css-loader/.test(l.loader)
          ) {
            if (!l.options.modules) return
            const { getLocalIdent, ...others } = l.options.modules

            l.options = {
              ...l.options,
              modules: {
                ...others,
                getLocalIdent: (ctx, localIdentName, localName) => {
                  if (localName === 'dark') return localName
                  return getLocalIdent(ctx, localIdentName, localName)
                },
              },
            }
          }
        })
      }
    })

    return config
  },
}

const nextConfig = {
  ...headers,
  ...webpack,
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: isProd,
  // experimental: {
  //   forceSwcTransforms: true,
  // },
}

module.exports = nextConfig
