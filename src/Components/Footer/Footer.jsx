import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/salemebasumata58"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Made with <span style={{color:"red"}}>❤ </span>By Salem-Basumata</h3>
        </a>
      </div>
    </>
  );
};
