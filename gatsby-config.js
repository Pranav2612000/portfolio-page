module.exports = {
  siteMetadata: {
    siteUrl: `https://pranavjoglekarcodes.web.app`,
  },
  plugins: [
    /*
    {
      resolve: "gatsby-plugin-google-tagmanager-delayed",
      options: {
        id: "G-8T9TBP554C",
        includeInDevelopment: true,
      },
    },
    */
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
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
        excludes: ["/dev-404-page","/dev-404-page/", "https://pranavjoglekarcodes.web.app/dev-404-page/", "/offline-plugin-app-shell-fallback/","https://pranavjoglekarcodes.web.app/offline-plugin-app-shell-fallback/"],
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
          const lastmodDate = new Date().toISOString().split('T')[0];
          return {
            url: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: `${lastmodDate}`
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
          `Montserrat\:400`,
          `Poppins\:400`,
          `Roboto\:400`
        ],
        display: 'swap',
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
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
