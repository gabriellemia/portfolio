import "./About.css";
import ProfileImage from "./ProfileImage";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="profileImage">
          <ProfileImage />
        </div>
        <div className="text-section">
          <h1 className="intro">Hi there, I'm Gaby!</h1>
          <p className="about-text">
            Greetings from London! I'm a junior full-stack developer with a unique background spanning biomedical
            research and outdoor education. While my academic journey began with a degree in Wildlife Photography, my
            path eventually led me to the world of coding. <br />
            During the "Great Pandemic," I found myself yearning for a new challenge and a chance to make a difference.
            Despite having no prior tech experience, I was drawn to the problem-solving and creative aspects of coding,
            so I decided to take the plunge. <br />
            Fast forward four years, and I'm grateful for the leap I took. Starting with self-guided learning through
            resources like The Odin Project, I recently completed the School of Code's intensive 16-week bootcamp. This
            experience not only enhanced my technical skills but also prepared me for the demands of the industry,
            ensuring I'm ready to contribute effectively to any tech team. <br />
            Beyond coding, I have a passion for literature and outdoor pursuits, including climbing, hiking, and
            canoeing. I thrive on self-improvement and have taught myself various skills, from juggling to solving the
            Rubik's Cube.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
