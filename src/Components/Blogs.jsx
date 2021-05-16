import React from 'react';
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const Blogs = (props) => {
  return (
    <div id="blogs" className="section-wrapper">
        <div className="blogs-wrapper">

            <h1 className="section-title">Blogs</h1>

            {props.data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                <>
                        <article className="blog-card">
                                    <div className={`blog-card__background ${props.mode ? 'blog-card__dark-background': ''}`}>
                                        <div className="card__background--wrapper">
                                            <div className="card__background--main">
                                                <GatsbyImage className="blog-card-img" image={getImage(frontmatter.desktop_img)} alt={frontmatter.alt_img}/>
                                            </div>
                                            <div className="card__background--layer">
                                            </div>
                                        </div>
                                    </div>
                                <div className="blog-card__head">
                                    <span className="date__box">
                                        <span className="date__day">{new Date(frontmatter.date).getDate()}</span>
                                        <span className="date__month">{monthNames[new Date(frontmatter.date).getMonth()]}</span>
                                    </span>
                                </div>
                                <div className={`blog-card__info ${props.mode? 'blog-card__dark-info' : ''}`}>
                                    <h3><Link to={fields.slug} className="blog-card__title">{frontmatter.title}</Link></h3>
                                    <p>{frontmatter.description}</p>
                                    <Link to={fields.slug} className={`btn btn--with-icon ${props.mode ? "dark-btn" : ""}`}>
                                        <i className="btn-icon fa fa-long-arrow-right"></i>
                                        Read More
                                    </Link>
                                </div>
                        </article>
                </>
            ))}
        </div>
    </div>
  )
}

export default Blogs; 
