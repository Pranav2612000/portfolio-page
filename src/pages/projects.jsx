import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../App.css';
import Layout from '../Components/Layout.jsx';
import Projects from '../Components/Projects';
import Helmet from 'react-helmet'

const ProjectsPage = () => {
  return (
    <>
      <Layout>
          {(mode) => (
            <>
              <Projects type="all"/>
            </>
          )}
      </Layout>
      <Helmet>
          <title>Projects | Pranav Joglekar</title>
          <meta name="description" content="Pranav Joglekar's Work Page. See Pranav's work and projects"/>
          <meta name="keywords" content="Pranav Joglekar Portfolio Projects Blog"/>

          <meta property="og:title" content="Pranav Joglekar | Projects"/>
          <meta property="og:description" content="Pranav Joglekar's portfolio and blog website. Blogs written by Pranav hosted here.
          Contains Pranav's work and projects. Visit this if page if you want to hire a rockstar developer"/>

          <meta name="twitter:description" content="Pranav Joglekar's portfolio and blog"/>
          <meta name="twitter:title" content="Pranav Joglekar | Projects"/>

          <meta property="og:site_name" content="Pranav Joglekar | Projects"/>
      </Helmet>
    </>
  );
};
export default ProjectsPage;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
