import "./Projects.css";
import gabyGPT from "./assets/gabyGPT-record.mov";
import BBVid from "./assets/BB-record.mov";
import Button from "./Button.tsx";
import githubImage from "./assets/icons8-github-128.png";
// import strapi from "./assets/strapi-icon.png";
// import cloudinary from "./assets/cloudinary-icon.png";

function Projects() {
  return (
    <div id="project-section">
      <h1 className="project-title">My Projects</h1>
      <div className="collab">
        <h2>Collaboration</h2>
        <div className="chat-section">
          <div className="textAndButtons">
            <p>
              <span className="box-title">Birmingham Business Website</span>
              <br />
              Final project at School of Code with real stakeholders. <br />
              In our team of six, we were partnered with Birmingham Business Magazine to help them optimise their online
              presence. <br /> Over 4 weeks we built a modernised, responsive website with improved SEO and
              accessibility and a simple to use content management system.
              {/* <br />
            <strong>Problem</strong>
            <br />
            Birmingham Business magazines website is outdated and not engaging, posing significant challenges for both
            readers and editors alike. The lack of engagement tools and optimisation hinders the magazine's ability to
            fully capitalise on its digital presence.
            <br />
            <strong>Solution</strong>
            <br />A revamped platform that prioritises user engagement, accessibility, and content management efficiency
            while also optimising SEO to drive more traffic, transforming the digital experience. */}
              {/* <br />
            <strong>Tech stack</strong>
            <br />
            <br />
            <i className="devicon-nextjs-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-railway-original black"></i>
            <i className="devicon-jest-plain colored"></i>
            <i className="devicon-vercel-original colored"></i>
            <img className="strapi" src={strapi} alt="strapi-icon" />
            <img src={cloudinary} alt="cloudinary-icon" /> */}
            </p>
            <div className="buttons-container">
              <Button url="https://birmingham-biz-kappa.vercel.app/" label="Live site" />
              <Button url="https://github.com/gabriellemia/birmingham-biz" label="GitHub Repo" />
            </div>
          </div>
          <video className="chat-video" controls autoPlay>
            <source src={BBVid} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="personal">
        <h2>Personal</h2>

        <div className="chat-section">
          <div className="textAndButtons">
            <p>
              <span className="box-title">Chatbot</span>
              <br />
              During our data and AI experience week at the School of Code, I did a bit of research on how I could
              implement LLM's into my current projects. <br />I decided to create a basic chatbot as a stand alone app
              so I could understand how everything works and what is needed in it's simplest form. I used next.js,
              vercel SDK and the OpenAI api.
              <br />
            </p>
            <div className="buttons-container">
              <Button url="https://github.com/gabriellemia/my-chatbot" label="GitHub Repo" />
            </div>
          </div>
          <video className="chat-video" controls autoPlay>
            <source src={gabyGPT} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="more-section">
        <p className="other-work">
          I have a few more projects waiting in my GitHub, these are just a couple I plucked out of the mix. <br />
          Please feel free to check out my other work.
        </p>
        <a href="https://github.com/gabriellemia?tab=repositories" target="_blank">
          <img className="github-image" src={githubImage} alt="github logo" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
