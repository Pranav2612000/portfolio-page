module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KHW3X7J",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
          extensions: [`.mdx`, `.md`],
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/src/posts`,
        },
    },
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
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
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
