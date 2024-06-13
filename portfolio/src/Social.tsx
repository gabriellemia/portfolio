import "./Social.css";
import linkedin from "./assets/icons8-linked-in-96.png";
import github from "./assets/icons8-github-96.png";
import twitter from "./assets/icons8-twitterx-96.png";
import email from "./assets/icons8-post-96.png";

function Social() {
  return (
    <>
      <section id="contact-section">
        <h1 className="contact-title">Contact Me</h1>
        <p>
          I'm looking for new and exciting opportunities in tech, an environment that encourages growth and learning so
          I can continue to improve in order to bring value to any team!
          <br />
          If you think I'd be the right fit for your role, I'd love to hear from you!
        </p>
        <div className="social-logos">
          <a href="https://www.linkedin.com/in/gabriellemia/" target="_blank">
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="https://github.com/gabriellemia" target="_blank">
            <img src={github} alt="github icon" />
          </a>
          <a href="https://x.com/gabriellemia88" target="_blank">
            <img src={twitter} alt="twitter icon" />
          </a>
          <a href="mailto:gabriellemia88@gmail.com" target="_blank">
            <img src={email} alt="email icon" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Social;
