module.exports = {
  pathPrefix: '/slides-kubernetes',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: ''
      }
    }
  ]
}
