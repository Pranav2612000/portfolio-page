import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../App.css';
import Layout from '../Components/Layout.jsx';
import Projects from '../Components/Projects';

const ProjectsPage = () => {
  return (
    <Layout>
        {(mode) => (
          <>
            <Projects type="all"/>
          </>
        )}
    </Layout>
  );
};
export default ProjectsPage;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
