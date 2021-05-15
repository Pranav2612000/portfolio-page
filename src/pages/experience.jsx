import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../App.css';
import Life from '../Components/Life';
import Layout from '../Components/Layout.jsx';

const ExperiencePage = () => {
  return (
    <Layout>
        {(mode) => (
          <>
            <Life mode={mode}/>
          </>
        )}
    </Layout>
  );
};
export default ExperiencePage;
