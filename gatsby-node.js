const path = require('path')
require('dotenv').config();
const { createFilePath } = require(`gatsby-source-filesystem`);

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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

  let db;
  console.log("connecting to MongoDB");
  await client.connect();
  db = client.db("personalSite");
  console.log("Uploading blog data");

  const blogs = db.collection('blogs');

  try {
  } catch(err) {
    console.log("Unable to add to mongodb");
    console.log(err);
  }

  const result = await graphql
  (`
      query {
          allMdx {
              edges {
                  node {
                      id
                      frontmatter {
                        id
                        title
                        date
                        description
                        alt_img
                        desktop_img {
                          id
                          name
                          extension
                        }
                      }
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

  await posts.forEach(async ({node}) => {
      try {
        await blogs.findOneAndUpdate({"id": node.frontmatter.id}, {$set: node.frontmatter}, {upsert: true});
      } catch(err) {
        console.log("Error uploading blog data to db");
        console.log(err);
      }
  }); 

  posts.forEach(async ({ node }, index) => {
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