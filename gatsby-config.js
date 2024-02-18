/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FirstTry`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-provide-react`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
