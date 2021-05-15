module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Shadows Into Light`,
        ],
        display: 'swap',
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
  flags: {
    THE_FLAG: false,
    QUERY_ON_DEMAND: false,
  }
}
  /*
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include:  / *assets* /
      }
    }
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include:  /\.svg$/
        }
      }
    }
  }*/
