import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const compare = (a,b) => {
    if( new Date(a.date) > new Date(b.date) ) {
        return -1;
    }
    if( Date(a.date) < Date(b.date) ) {
        return +1;
    }
    return 0;
};

const Blogs = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
      const getBlogs = async () => {
        const res = await fetch("https://elegant-morse-8c8a2f.netlify.app/.netlify/functions/server/getBlogs", {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resData = await res.json(); 
        setBlogs(resData.success.sort(compare));
      };

      getBlogs();
  },[])
  return (
    <div id="blogs" className="blog-page-wrapper">
        <div className="blogs-wrapper">

            <h1 className="section-title">Blogs</h1>

            {blogs.length === 0 && props.data.allMdx.nodes.sort(compare).slice(0,3).map(({ excerpt, frontmatter, fields }) => (
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
            {blogs.length !== 0 && blogs.map((blog) => (
                <>
                        <article className="blog-card">
                                    <div className={`blog-card__background ${props.mode ? 'blog-card__dark-background': ''}`}>
                                        <div className="card__background--wrapper">
                                            <div className="card__background--main">
                                                <GatsbyImage className="blog-card-img" image={getImage(blog.desktop_img)} alt={blog.alt_img}/>
                                            </div>
                                            <div className="card__background--layer">
                                            </div>
                                        </div>
                                    </div>
                                <div className="blog-card__head">
                                    <span className="date__box">
                                        <span className="date__day">{new Date(blog.date).getDate()}</span>
                                        <span className="date__month">{monthNames[new Date(blog.date).getMonth()]}</span>
                                    </span>
                                </div>
                                <div className={`blog-card__info ${props.mode? 'blog-card__dark-info' : ''}`}>
                                    <h3><Link to={blog.slug} className="blog-card__title">{blog.title}</Link></h3>
                                    <p>{blog.description}</p>
                                    <Link to={blog.slug} className={`btn btn--with-icon ${props.mode ? "dark-btn" : ""}`}>
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
