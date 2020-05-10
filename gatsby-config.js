const products = require('./src/products')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    products: [...products],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '1cfd40cdb33bb320d9d752de491285'
      }
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: 'NmVhOTNkNjctN2UzOC00ZTFhLWEyMzgtNDU2YzkwOWM5MDNjNjM3MjQ2NjQ2NzQ4NTUyNjI4',
        autopop: true,
        js: 'https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js',
        jquery: false,
        styles: 'https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
