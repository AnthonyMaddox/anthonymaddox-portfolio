import React from "react";
import Card from "../Card/Card.js";
import ContactCard from "../Card/ContactCard.js";
import "./App.css";
import resume from "./Anthony_Maddox_Resume.pdf";
import headshot from "./amaddox-headshot1-small.jpg";

function App() {
  return (
    <div className="App">
      <div className="headerDiv">
        <div className="picAndNameDiv">
          <div
            className="headshotDiv"
            style={{ backgroundImage: `url(${headshot})` }}
          >
            <div className="picShadow"></div>
          </div>
          <p className="myName">Anthony Maddox</p>
        </div>
        <p className="myTitle">
          Full Stack<br></br> Software Engineer
        </p>
        <div className="linksDiv">
          <a href={resume} download="Anthony Maddox's Resume">
            Download my resume pdf
          </a>
          <a href="https://www.linkedin.com/in/anthony-maddox" target="_blank">
            My LinkedIn
          </a>
          <a
            href="https://github.com/AnthonyMaddox?tab=repositories"
            target="_blank"
          >
            My Github
          </a>
          <a href="https://soundcloud.com/anthony-j-maddox" target="_blank">
            My SoundCloud
          </a>
        </div>
        <div className="aboutDiv">
          <b style={{ fontSize: "16px" }}>About:</b> I am a full-stack software
          engineer with a background in fisheries biology and music. I have
          worked for the last 8 years on the commercial fishing boats in Alaska,
          collecting confidential, biological data for quota management by The
          National Marine Fisheries Service. I now want to establish myself in
          Maryland with a career in software development. My first
          accomplishment has been graduating from the DC based, full-time, 3
          month software engineering course at General Assembly (GA). At GA, I
          completed over 500 hours of expert led instruction and hands on
          learning of computer science fundamentals and the industry's most in
          demand technologies. I am adaptable, patient, compassionate and
          enduring. Flip over the cards to experience my journey into software
          engineering!
        </div>
      </div>
      <div className="projectsDiv">
        <div className="cssDiv">
          <div className="categoryDiv">CSS & HTML:</div>
          <Card
            title="Honeymoon Website mock-up"
            github="https://github.com/AnthonyMaddox/sei38-project1"
            deployed="https://anthonymaddox.github.io/sei38-project1/"
          />
        </div>
        <div className="vanillaJSDiv">
          <div className="categoryDiv">Javascript:</div>
          <div>
            <Card
              title="The Card Game War"
              github="https://github.com/AnthonyMaddox/sei38-project2"
              deployed="https://anthonymaddox.github.io/sei38-project2/"
            />
          </div>
          <div>
            <Card
              title="Mars Rover Camera Application"
              github="https://github.com/AnthonyMaddox/sei38-project3"
              deployed="https://anthonymaddox.github.io/sei38-project3/"
            />
          </div>
          <div>
            <Card
              title="Poisonous Plants Flash-Card Game"
              github="https://github.com/AnthonyMaddox/sei38-project4"
              deployed="https://anthonymaddox.github.io/sei38-project4/"
            />
          </div>
        </div>
        <div className="apiDiv">
          <div className="categoryDiv">APIs:</div>
          <div>
            <Card
              title="Indian Cities API"
              github="https://github.com/AnthonyMaddox/sei38-project6"
              deployed="https://indian-cities-api.herokuapp.com/cities"
            />
          </div>
          <div>
            <Card
              title="Coders-Cookoff API"
              github="https://github.com/AnthonyMaddox/recipes-group-project-backend"
              deployed="https://coders-cookout.herokuapp.com/recipes"
            />
          </div>
        </div>
        <div className="reactDiv">
          <div className="categoryDiv">React:</div>
          <div>
            <Card
              title="React Storybook mock-up"
              github="https://github.com/AnthonyMaddox/my-component-library"
              deployed="https://anthonymaddox.github.io/my-component-library/story-build/index.html"
            />
          </div>
          <div>
            <Card
              title="Indian Cities State of Manipur Front-End"
              github="https://github.com/AnthonyMaddox/indian-cities-MERN"
              deployed="https://anthony-maddox-indian-cities.netlify.app/"
            />
          </div>
        </div>

        <div className="pythonDiv">
          <div className="categoryDiv">Python:</div>
          <div>
            <ContactCard
              title="CLI Contact Book"
              github="https://github.com/AnthonyMaddox/contact-book"
            />
          </div>
          <div>
            <Card
              title="Statistics Without Borders Django Back-End"
              github="https://github.com/statisticswithoutborders/swb-app/tree/develop/api"
              deployed="https://swbapp.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
