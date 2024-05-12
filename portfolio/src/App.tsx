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
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <ProjectBtn />
        <Projects />
      </main>
    </>
  );
}

export default App;
