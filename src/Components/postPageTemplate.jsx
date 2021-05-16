import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../Components/Layout.jsx';
import Helmet from 'react-helmet'

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`

export default ({ data }) => {
    const { frontmatter, body } = data.mdx
    return (
        <>
            <Layout>
                {(mode) => (
                    <>
                        <div className="">
                            <h1>{frontmatter.title}</h1>
                            <p>{frontmatter.date}</p>
                            <MDXRenderer>{body}</MDXRenderer>
                        </div>
                    </>
                )}
            </Layout>
            <Helmet>
                <title>{frontmatter.title} | Pranav Joglekar</title>
                <meta name="description" content="Pranav Joglekar's Experience Page. See Pranav's work experience"/>
                <meta name="keywords" content="Pranav Joglekar Portfolio Projects Blog Experience"/>

                <meta property="og:title" content="Pranav Joglekar | Experience"/>
                <meta property="og:description" content="Pranav Joglekar's portfolio and blog website. Blogs written by Pranav hosted here.
                Contains Pranav's work and projects. Visit this if page if you want to hire a rockstar developer"/>

                <meta name="twitter:description" content="Pranav Joglekar's work experience"/>
                <meta name="twitter:title" content="Pranav Joglekar | Experience"/>

                <meta property="og:site_name" content="Pranav Joglekar | Experience"/>
            </Helmet>
        </>
    )
}