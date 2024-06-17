import "./Projects.css";
import gabyGPT from "./assets/gabyGPT-record.mov";
import BBVid from "./assets/BB-record.mov";
import Button from "./Button.tsx";
import githubImage from "./assets/icons8-github-128.png";
import { useEffect, useRef } from "react";
// import strapi from "./assets/strapi-icon.png";
// import cloudinary from "./assets/cloudinary-icon.png";

function Projects() {
  const collabRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const currentCollabRef = collabRef.current;
    const currentPersonalRef = personalRef.current;

    if (currentCollabRef) {
      observer.observe(currentCollabRef);
    }
    if (currentPersonalRef) {
      observer.observe(currentPersonalRef);
    }

    return () => {
      if (currentCollabRef) {
        observer.unobserve(currentCollabRef);
      }
      if (currentPersonalRef) {
        observer.unobserve(currentPersonalRef);
      }
    };
  }, []);

  return (
    <div id="project-section">
      <h1 className="project-title">My Projects</h1>
      <div className="collab burst-element" ref={collabRef}>
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
      <div className="personal burst-element" ref={personalRef}>
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
        <a className="github-link" href="https://github.com/gabriellemia?tab=repositories" target="_blank">
          <img className="github-image" src={githubImage} alt="github logo" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
