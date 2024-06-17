import "./TechStack.css";
import StackIcon from "tech-stack-icons";

function TechStack() {
  return (
    <div id="tech-section">
      <h1 className="tech-title">Tech Stack</h1>
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
    </div>
  );
}

export default TechStack;
