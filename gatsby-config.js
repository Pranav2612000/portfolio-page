module.exports = {
  siteMetadata: {
    siteUrl: `https://pranavjoglekarcodes.web.app`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KHW3X7J",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: 
        `{
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
              }
            }
          }`,
        resolvePages: ({ site, allSitePage }) => {
          const temp= allSitePage.nodes
            .map((node) => {
              return {
                path: site.siteMetadata.siteUrl + node.path,
                changefreq: 'daily',
                priority: 0.7,
              };
            });
           return temp;
        },
        serialize: ({path}) => {
          return {
            url: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date(),
          }
        },
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-code-buttons',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
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
