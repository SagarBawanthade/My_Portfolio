import React from 'react';
import ReactVideoPlayer from './ReactVideoPlayer';

const Porfolio = ({ resumeData }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <a href='https://github.com/SagarBawanthade?tab=repositories'>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => (
                  <div key={index} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-01">
                        <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </a>



        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "2rem 3rem" }}>See my Recent Project...</h1>
      <div>
        <ReactVideoPlayer />
      </div>


    </section >
  );
};

export default Porfolio;
