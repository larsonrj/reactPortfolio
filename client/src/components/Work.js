import React from "react";
import "../styles/about.css";

function Work() {
  return (
    <div class="sectionDiv">
      <section class="section-style">
        <h2 id="work" class="section-title">
          Work
        </h2>
        <div class="work-examples">
          <a
            class="wide"
            href="https://github.com/larsonrj/module1-challenge"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Coding on screen"
            ></img>
            <div class="title">Code Refactor</div>
          </a>
          <a
            href="https://larsonrj.github.io/prework-study-guide/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN0dWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Desktop with laptops and notebook"
            ></img>
            <div class="title">Study Guide</div>
          </a>
          <a
            href="https://darin1027.github.io/Travel-Guide-App/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.unsplash.com/photo-1542652694-40abf526446e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="Black and white basketball"
            ></img>
            <div class="title">Project 1</div>
          </a>
          <a
            href="https://guardian-guide-1222.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhc2tldGJhbGx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Concrete basketball court"
            ></img>
            <div class="title">Project 2</div>
          </a>
          <a>
            <img
              src="https://images.unsplash.com/photo-1508206661992-0a79b553e6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGJhc2tldGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="Basketball hoop sunset"
            ></img>
            <div class="title">Project 3</div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Work;
