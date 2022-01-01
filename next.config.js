const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  async redirects () {
    return [
      {
        source: '/docs',
        destination: '/docs/quick-start',
        permanent: true
      }
    ]
  }
})
