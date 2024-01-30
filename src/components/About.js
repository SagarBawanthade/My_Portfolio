import React from 'react';

const About = (props) => {
   const resumeData = props.resumeData;
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src="https://avatars.githubusercontent.com/u/137410094?v=4" alt="erger" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
                  {resumeData.aboutme}
               </p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{resumeData.name}</span>
                        <br />
                        <span>{resumeData.address}</span>
                        <br />
                        <span>{resumeData.website}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;
