import React from 'react';
import '../index.css';
import '../App.css';
import Life from '../Components/Life';
import Layout from '../Components/Layout.jsx';
import Helmet from 'react-helmet'

const ExperiencePage = () => {
  return (
    <>
      <Layout>
          {(mode) => (
            <>
              <Life mode={mode}/>
            </>
          )}
      </Layout>
      <Helmet>
          <title>Experience | Pranav Joglekar</title>
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
  );
};
export default ExperiencePage;
