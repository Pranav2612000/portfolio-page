import React from 'react';
import '../index.css';
import '../App.css';
import Layout from '../Components/Layout.jsx';
import Helmet from 'react-helmet'
import Papershelf from '../Components/PaperShelf.jsx';

const PapershelfPage = () => {
  return (
    <>
      <Layout>
          {(mode) => (
            <>
              <Papershelf />
            </>
          )}
      </Layout>
      <Helmet>
          <title>Papershelf | Pranav Joglekar</title>
          <meta name="description" content="Pranav Joglekar's Shelf. This contains papers read by Pranav"/>
          <meta name="keywords" content="Pranav Joglekar Portfolio Projects Blog Experience Papershelf"/>
          <link rel="canonical" href="https://pranavjoglekarcodes.web.app/papershelf"/>

          <meta property="og:title" content="Pranav Joglekar | Papershelf"/>
          <meta property="og:description" content="Pranav Joglekar's portfolio and blog website. Blogs written by Pranav hosted here.
          Contains Pranav's work and projects. Visit this if page if you want to hire a rockstar developer"/>
          <meta property="og:url" content="https://pranavjoglekarcodes.web.app/papershelf"/>

          <meta name="twitter:description" content="Pranav Joglekar's list of papers read"/>
          <meta name="twitter:title" content="Pranav Joglekar | Papershelf"/>

          <meta property="og:site_name" content="Pranav Joglekar | Papershelf"/>
      </Helmet>
    </>
  );
};
export default PapershelfPage;
