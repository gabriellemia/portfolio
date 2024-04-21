import "./About.css";
import ProfileImage from "./ProfileImage";

function About() {
  return (
    <>
      <div className="profileImage">
        <ProfileImage />
      </div>
      <h1 className="intro">Hi there, I'm Gaby!</h1>
      <p className="about-section">A bit about me...</p>
    </>
  );
}

export default About;
