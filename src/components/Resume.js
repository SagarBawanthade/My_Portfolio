import React from 'react';

const Resume = ({ resumeData }) => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item, index) => (
              <div key={index} className="row item">

                <div className="twelve columns">
                  <h3>{item.UniversityName}</h3>
                  <p className="info">
                    {item.specialization}<br />
                    <span>&bull;</span>{' '}
                    <em className="date">
                      {item.MonthOfPassing} {item.YearOfPassing}<br />
                      {item.Grade}
                    </em>

                  </p>

                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item, index) => (
              <div key={index} className="row item">
                <div className="twelve columns">
                  <h3>{item.CompanyName}</h3>
                  <p className="info">
                    {item.Role}<br />
                    {item.Duration}{'  - '}{item.type}<br />
                    <span>&bull;</span>{' '}
                    <em className="date">
                      {item.JoiningDate} to{' '}
                    </em>
                    <em className="date">
                      {item.LeavingDate}<br />
                    </em>
                    {item.Description}<br />
                    {item.skills}

                  </p>

                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>
          <div className="bars">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item, index) => (
                  <li key={index}>
                    <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
                    <em>{item.skillname}</em>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
