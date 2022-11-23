import "./App.css";
import Hero from "./pages/Hero";
import NavSmall from "./routes/NavSmall";
import About from "./pages/About";
import Github from "./pages/Github";
import NavbarS from "./routes/Navbar";
import SGithub from "./pages/smallGithub";
import Project from "./pages/Project";
import SocialHandle from "./pages/socialHandle";

import { useState } from "react";
import Contact from "./pages/Contact";

import GithubComp from "./pages/GithubComp";
import Skills from "./pages/Skills";

function App() {
  let [condition, setcondition] = useState(true);

  return (
    <div className="App">
      <Hero />
      <About />

      <Project />
      <Skills />

      <Contact />

      <NavSmall />
      <NavbarS />
      <SocialHandle />
    </div>
  );
}

export default App;

// npm install react-scroll

// npm i aos --save

// npm i react-simple-typewriter
// react-parallax-tilt
// react-github-calendar
// npm install -g gh-pages

// git push origin master
