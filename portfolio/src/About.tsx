import "./About.css";
import ProfileImage from "./ProfileImage";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="profileImage">
          <ProfileImage />
        </div>
        <h1 className="intro">Hi there, I'm Gaby!</h1>
        <p className="about-text">
          A bit about me...
          <br />
          I'm a junior full stack developer with a background in biomedical research and, prior to that, outdoor
          education. I did my degree in Wildlife Photography, but that's going way back now. During the "Great Pandemic"
          I realised I wasn't fulfilled in what I was doing and I needed a challenge. I also wanted to make a difference
          in some way. I was pushed to look into coding and though I had no tech experience whatsoever, I really enjoy
          solving problems and creating things, so thought I give it a go. Here I am 4 years later and I'm so grateful I
          took the plunge! I started off teaching myself using online resources and courses like The Odin Project. I
          have now recently completed the School of Code's 16 week skills bootcamp which has taken me that extra step,
          not just in my technical skills but also giving me invaluable professional skills ensuring I am industry
          ready. <br /> Aside from career progression though, I'm an avid reader, I love outdoor activities like
          climbing, long hikes, and a bit of canoeing when I can. I also love to teach myself new things. Some things I
          have taught myself in the past include: juggling, unicycling, and solving the Rubik's Cube!
        </p>
      </div>
    </>
  );
}

export default About;
