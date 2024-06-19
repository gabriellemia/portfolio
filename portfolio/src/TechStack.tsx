import "./TechStack.css";
import StackIcon from "tech-stack-icons";

function TechStack() {
  return (
    <div id="tech-section">
      <h1 className="tech-title">Tech Stack</h1>
      <p className="tech-text">
        A few of the technologies I have used during my discovery into software development. I have touched on many
        other technologies along the way such as AWS and Python for example, my plan is to improve my knowledge in other
        areas as I progress but the ones listed below I feel I am reasonably confident in at this point. The list is by
        no means exhaustive. I continue to learn new things daily and discover new tools to add to my stack as well as
        improve on existing ones.
      </p>
      <div className="tech-icons">
        <StackIcon className="icon" name="html5" />
        <StackIcon className="icon" name="css3" />
        <StackIcon className="icon" name="js" />
        <StackIcon className="icon" name="nodejs" />
        <StackIcon className="icon" name="typescript" />
        <StackIcon className="icon" name="reactjs" />
        <StackIcon className="next icon" name="nextjs2" />
        <StackIcon className="icon" name="git" />
        <StackIcon className="github icon" name="github" />
        <StackIcon className="icon" name="postgresql" />
        <StackIcon className="icon" name="jest" />
        <StackIcon className="icon" name="vitest" />
        <StackIcon className="icon" name="playwright" />
        <StackIcon className="icon" name="figma" />
        <StackIcon className="icon" name="postman" />
      </div>
      <div>
        <a className="tech-arrow" href="#contact-section"></a>
      </div>
    </div>
  );
}

export default TechStack;
