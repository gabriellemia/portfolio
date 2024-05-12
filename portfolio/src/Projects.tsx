import "./Projects.css";
import gabyGPT from "./assets/gabyGPT-record.mov";

function Projects() {
  return (
    <div className="project-section">
      <h1 className="project-title">My Projects</h1>
      <div className="collab">
        <h2>Collaboration</h2>
      </div>
      <div className="personal">
        <h2>Personal</h2>

        <div className="chat-section">
          <p>
            <span className="chat-title">Chatbot</span>
            <br />
            During our data and AI experience week at the School of Code, I did a bit of research on how I could
            implement LLM's into my current projects. I decided to create a basic chatbot as a stand alone app so I
            could understand how everything works and what is needed in it's simplest form. I used next.js, vercel SDK
            and the OpenAI api.
          </p>
          <video className="chat-video" controls autoPlay>
            <source src={gabyGPT} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default Projects;
