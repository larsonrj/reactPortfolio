import React from "react";
import "../styles/header.css";

const styles = {
  headerStyle: {
    color: "#fec524",
    backgroundColor: "#232f3e",
    display: "flex",
    justifyContent: "space-between",
    padding: "35px",
    alignItems: "center",
    borderBottomStyle: "solid",
    borderBottomColor: "#8b2131",
    borderBottomWidth: "5px",
    fontFamily: "roboto slab",
  },
  h1Style: {
    fontSize: "200%",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle}>
      <h1 style={styles.h1Style}>Ryan Larson</h1>
      <nav>
        <ul>
          <li>
            <a class="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a class="nav-link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
