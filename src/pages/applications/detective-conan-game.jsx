import React from 'react';
import Layout from '../../Components/Layout';
import Game from '../../projects/epic-game/src/App.js'

const ExperiencePage = () => {
  return (
    <>
      <Layout>
          {(mode) => (
            <>
              <div className="padding-top-70px">
                <Game/>
              </div>
            </>
          )}
      </Layout>
    </>
  );
};
export default ExperiencePage;
