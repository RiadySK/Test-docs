const removeImports = require("next-remove-imports")();

const nextConfig = {
  reactStrictMode: true,
  esmExternals: true,
}

module.exports = removeImports(nextConfig)
