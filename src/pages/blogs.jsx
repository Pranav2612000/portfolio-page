import * as React from 'react'
import Layout from '../Components/Layout.jsx';
import Helmet from 'react-helmet'
import Blogs from '../Components/Blogs';
import { graphql } from 'gatsby'

export const query = graphql
`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                    description
                    alt_img
                    desktop_img {
                        childImageSharp {
                            gatsbyImageData(
                                height:400,
                                width:1000,
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`

const BlogsPage = ({data}) => {
    return (
        <>
            <Layout>
                {(mode) => (
                    <>
                       <Blogs data={data} mode={mode}/>
                    </>
                )}
            </Layout>
            <Helmet>
                <title>Blogs | Pranav Joglekar</title>
                <meta name="description" content="Pranav Joglekar's Blogs Page. Read Articles written by Pranav Joglekar here"/>
                <meta name="keywords" content="Pranav Joglekar Portfolio Projects Blog Experience Articles"/>

                <meta property="og:title" content="Pranav Joglekar | Blogs"/>
                <meta property="og:description" content="Pranav Joglekar's blog and portfolio website. Blogs written by Pranav hosted here.
                Contains Pranav's work and projects. Visit this if page if you want to hire a rockstar developer"/>

                <meta name="twitter:description" content="Pranav Joglekar's blogs"/>
                <meta name="twitter:title" content="Pranav Joglekar | Blogs"/>

                <meta property="og:site_name" content="Pranav Joglekar | Blogs"/>
            </Helmet>
        </>
    )
};

export default BlogsPage;