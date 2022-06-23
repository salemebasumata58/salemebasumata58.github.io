import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
// import {images} from "../../Assets/images/"
const img1= require("../../Assets/images/naukri.png")
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/max/1400/1*VBW9qLf7M24IG9b69SnWkg.png"
                  alt="Licious.in"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Naukri.com </h2>
              <p>
              A web application to search for various jobs in India A collaborative project which is built by a team of 5 executed in 7 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://naukri-clone-f36472.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/salemebasumata58/Naukri-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/97448777/165456898-d7dcb9fa-01c3-4a67-9270-59c488e24e4b.png"
                  alt="Zee5 Clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>ZEE5 Clone</h2>
              <p>
              A web application which used to watch online shows.A collaborative project built by a team of 6 executed in 6 days.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://zee5-clone-23cc72.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/mayank8887/Construct_Zee5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://raw.githubusercontent.com/AmbujKrAK/mytheresa.com/ScreenShots/Homepage.png"
                  alt="Mytheresa Clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mytheresa Clone</h2>
              <p>
              This is a clone of "mytheresa.com". "mytheresa.com" is a E-Commerce website for Clothes and Accessories.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://cloneofmytheresa-com.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/AmbujKrAK/mytheresa.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
