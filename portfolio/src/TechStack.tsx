import "./TechStack.css";
import StackIcon from "tech-stack-icons";

function TechStack() {
  return (
    <div id="tech-section">
      <h1 className="tech-title">Tech Stack</h1>
      <div className="tech-icons">
        <StackIcon name="html5" />
        <StackIcon name="css3" />
        <StackIcon name="js" />
        <StackIcon name="nodejs" />
        <StackIcon name="typescript" />
        <StackIcon name="reactjs" />
        <StackIcon className="next" name="nextjs2" />
        <StackIcon name="git" />
        <StackIcon className="github" name="github" />
        <StackIcon name="postgresql" />
        <StackIcon name="jest" />
        <StackIcon name="vitest" />
        <StackIcon name="playwright" />
        <StackIcon name="figma" />
        <StackIcon name="postman" />
      </div>
    </div>
  );
}

export default TechStack;
