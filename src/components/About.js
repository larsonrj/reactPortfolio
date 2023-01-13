import React from "react";
import "../styles/about.css";
import portfolioPic from "../images/Profile Picture.PNG";

function About() {
  return (
    <div class="sectionDiv">
      <section class="section-style">
        <h2 id="about" class="section-title">
          About Me
        </h2>
        <div class="about">
          <p>
            My name is Ryan Larson and I am currently a student in the DU
            Computer Programming Bootcamp. Previously I worked for United Launch
            Alliance for 7 years working as a Mechanical Engineer, primarily on
            the Vulcan Development program. I graduated from the Colorado School
            of Mines with a B.S. in Physics in 2013 and also graduated from
            Mines with a M.S. in Mechanical Engineering in 2014. I recently got
            married to my wife Kayla in June, and also became a stepfather to
            her son Jonah! We have fun spending time with our new family
            together. My other hobbies include following all of the Colorado
            sports teams, playing video games, and playing basketball.
            Basketball is my favorite sport to play which is why I have included
            those as placeholder images that will get replaced as I complete
            more projects from the bootcamp to add to my portfolio!
          </p>
          <img src={portfolioPic} alt="Profile Ryan Larson"></img>
        </div>
      </section>
    </div>
  );
}

export default About;
