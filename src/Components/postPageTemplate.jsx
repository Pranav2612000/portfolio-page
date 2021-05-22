import { graphql, navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../Components/Layout.jsx';
import Helmet from 'react-helmet'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/postPageTemplate.css";

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            slug
            frontmatter {
                meta_title
                title
                description
                keywords
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
                            <button onClick={()=>navigate(-1)} className="btn-link"><p>Back to Blogs</p></button><br/>
                            <GatsbyImage className="blog-title-img" image={getImage(frontmatter.desktop_img)} alt={frontmatter.alt_img}/>
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
                <link rel="canonical" href={`https://pranavjoglekarcodes.web.app/blogs/posts/${data.mdx.slug}`}/>

                <meta property="og:title" content={`${frontmatter.meta_title} | Pranav`}/>
                <meta property="og:description" content={frontmatter.description}/>
                <meta property="og:url" content={`https://pranavjoglekarcodes.web.app/blogs/posts/${data.mdx.slug}`}/>
                <meta name="twitter:description" content={frontmatter.description}/>
                <meta name="twitter:title" content={`${frontmatter.meta_title} | Pranav`}/>

                <meta property="og:site_name" content={`${frontmatter.title} | Pranav Joglekar`}/>
            </Helmet>
        </>
    )
}