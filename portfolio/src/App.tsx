// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import TechStack from "./TechStack.tsx";
import Social from "./Social.tsx";

function App() {
  return (
    <div className="main-container">
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Projects />
        <TechStack />
        <Social />
      </main>
    </div>
  );
}

export default App;
