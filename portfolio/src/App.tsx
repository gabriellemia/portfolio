// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar.tsx";
import About from "./About.tsx";
import ProjectBtn from "./ProjectBtn.tsx";
import Projects from "./Projects.tsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <ProjectBtn />
      <Projects />
    </>
  );
}

export default App;
