import React from "react";
import ResumePNG from "../../../assets/Resume.pdf"



function Resume() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+9103081328" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="email:mattflanagan40@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="my-app\public\Resume.pdf"><h1 className="text-center mt-2">Download  Here</h1></a>

        </div>
      </div>
    </div >
  );
}
export default Resume;