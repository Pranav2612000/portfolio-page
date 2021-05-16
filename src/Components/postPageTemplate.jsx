import { graphql, navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../Components/Layout.jsx';
import Helmet from 'react-helmet'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                description
                date(formatString: "YYYY MMMM Do")
                alt_img
                desktop_img {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
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
                        <div className="blog-page-wrapper">
                            <button onClick={()=>navigate(-1)} className="btn-link"><p>Back to Blogs</p></button>
                            <GatsbyImage className="blog-card-img" image={getImage(frontmatter.desktop_img)} alt={frontmatter.alt_img}/>
                            <h1 className="blog-title">{frontmatter.title}</h1>
                            <p className="blog-title-date"> by Pranav Joglekar | {frontmatter.date}</p>
                            <div className={`blog-render ${mode? 'blog-render-dark':'' }`}>
                                <MDXRenderer>{body}</MDXRenderer>
                            </div>
                        </div>
                    </>
                )}
            </Layout>
            <Helmet>
                <title>{frontmatter.title} | Pranav Joglekar</title>
                <meta name="description" content={frontmatter.description}/>
                <meta name="keywords" content={frontmatter.keywords}/>

                <meta property="og:title" content={`${frontmatter.title} | Pranav Joglekar`}/>
                <meta property="og:description" content={frontmatter.description}/>
                <meta name="twitter:description" content={frontmatter.description}/>
                <meta name="twitter:title" content={`${frontmatter.title} | Pranav Joglekar`}/>

                <meta property="og:site_name" content={`${frontmatter.title} | Pranav Joglekar`}/>
            </Helmet>
        </>
    )
}