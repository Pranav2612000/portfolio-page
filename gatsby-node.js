const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
      const value = createFilePath({ node, getNode })

      createNodeField({
          name: `slug`,
          node,
          value: `/blogs/posts${value}`,
      })
  }
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        'react-devicon': path.resolve(__dirname, '../src/components'),
      },
    },
  })

  if (
    ['develop', 'develop-html', 'build-html', 'build-javascript'].includes(
      stage
    )
  ) {
    // Remove svg from url-loader config
    config.loader(`url-loader`, {
      test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: `url`,
      query: {
        limit: 10000,
        name: `static/[name].[hash:8].[ext]`,
      },
    })
    config.loader('raw-loader', {
      test: /\.svg$/,
      loader: 'raw-loader',
    })
  }
  return config
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql
  (`
      query {
          allMdx {
              edges {
                  node {
                      id
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)

  if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
      createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/Components/postPageTemplate.jsx`),
          context: { id: node.id },
      })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      description: String!
      desktop_img: File
    }
  `
  createTypes(typeDefs)
}