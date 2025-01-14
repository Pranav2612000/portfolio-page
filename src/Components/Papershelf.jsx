import React from "react";

const papers = [
  {
    name: "MapReduce: Simplified Data Processing on Large Clusters",
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf",
    description: "Making it easy to run MapReduce on large cluster of distributed machines",
  },
  {
    name: "Near-duplicate Question Detection",
    url: "https://assets.amazon.science/05/0e/7da5195f4976a9ebcd4a81266464/near-duplicate-question-detection.pdf",
    description: "An algorithm which uses LLMs for near-duplicate question detection"
  },
  {
    name: "SIEVE is Simpler than LRU",
    url: "https://junchengyang.com/publication/nsdi24-SIEVE.pdf",
    description: "A new, simple & primitive caching strategy to improve Cache performance",
    resources: [
      {
        name: "home",
        url: "https://cachemon.github.io/SIEVE-website/"
      }
    ]
  }
];

const Papershelf = () => {
  return (
    <div id="papershelf" className="section-wrapper">
      <div>
        <h1 className="section-title">Papershelf</h1>
        <section>
          A list of research papers, articles & blogs I've enjoyed reading
        </section>
        <section className="papershelf-papers">
          <ul>
            {papers.map((paper, index) => {
              return (
                <li key={index} className="papershelf-paper">
                  <a href={paper.url} target="_blank" rel="noreferrer">{paper.name}</a>
                  <span className="papershelf-paper-description">
                    {paper.description}
                  </span>
                  {paper.resources && (
                    <span className="papershelf-paper-resources">
                      <i>Supporting Resources</i>: {
                        paper.resources.map((resource) => {
                          return <>
                            <a href={resource.url}>{resource.name}</a>
                          </>
                        })
                      }
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  )
};

export default Papershelf;