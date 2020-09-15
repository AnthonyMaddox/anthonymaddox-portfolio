import React from "react";
import Card from "../Card/Card.js";
import ContactCard from "../Card/ContactCard.js";
import "./App.css";
import resume from "./Anthony_Maddox_Resume.pdf";
import headshot from "./images/amaddox-headshot1-small.jpg";
import indianCitiesFrontEnd from "./images/indianCitiesFrontEnd.png";
import indianCitiesCode from "./images/indianCitiesCode.png";
import storybookPic from "./images/storybookPic.png";
import storybookCode from "./images/storybookCode.png";
import plantsPic from "./images/plantsPic.png";
import plantsCode from "./images/plantsCode.png";
import marsPic from "./images/marsPic.png";
import marsCode from "./images/marsCode.png";
import warPic from "./images/warPic.png";
import warCode from "./images/warCode.png";
import cookAPI from "./images/cookAPI.png";
import cookAPICode from "./images/cookAPICode.png";
import indianAPI from "./images/indianAPI.png";
import indianAPICode from "./images/indianAPICode.png";
import swbAPI from "./images/swbAPI.png";
import swbAPICode from "./images/swbAPICode.png";
import swbFront from "./images/swbFront.png";
import swbFrontCode from "./images/swbFrontCode.png";
import contactPic from "./images/contactPic.png";
import contactCode from "./images/contactCode.png";


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
          <a href={resume} target="_blank">
            Download My Resume.pdf
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
          Maryland with a career in software development. I most recently
          graduated from the full-time, 3-month, software engineering course at
          General Assembly (GA). At GA, I completed over 500 hours of expert led
          instruction and hands on learning of computer science fundamentals and
          the industry's most in demand technologies. I am adaptable, patient,
          compassionate and enduring. Flip over the cards to experience my
          journey into software engineering!
        </div>
      </div>
      <div className="projectsDiv">
        <div className="pythonDiv">
          <div className="categoryDiv">Python:</div>
          <div>
            <ContactCard
              title="Statistics Without Borders Team Project Back-End"
              github="https://github.com/statisticswithoutborders/swb-app/tree/develop/api"
              tech1="Python"
              tech2="PostgreSQL"
              tech3="Django"
              tech4="Pipenv"
              tech5="Psycopg2-binary"
              deployedPic={swbAPI}
              codePic={swbAPICode}
            />
          </div>
          <div>
            <ContactCard
              title="CLI Contact Book"
              github="https://github.com/AnthonyMaddox/contact-book"
              tech1="Python"
              tech2="PostgreSQL"
              tech3="Peewee"
              tech4="Pipenv"
              deployedPic={contactPic}
              codePic={contactCode}
            />
          </div>
        </div>
        <div className="reactDiv">
          <div className="categoryDiv">React:</div>
          <div>
            <Card
              title="Statistics Without Borders Team Project Front-End"
              github="https://github.com/AnthonyMaddox/indian-cities-MERN"
              deployed="https://anthony-maddox-indian-cities.netlify.app/"
              tech1="Javascript"
              tech2="React"
              tech2="Node.js"
              tech3="MongoDB"
              tech4="Mongoose"
              tech5="Express"
              deployedPic={swbFront}
              codePic={swbFrontCode}
            />
          </div>
          <div>
            <Card
              title="Indian Cities State of Manipur Front-End"
              github="https://github.com/AnthonyMaddox/indian-cities-MERN"
              deployed="https://anthony-maddox-indian-cities.netlify.app/"
              tech1="Javascript"
              tech2="React"
              tech2="Node.js"
              tech3="MongoDB"
              tech4="Mongoose"
              tech5="Express"
              deployedPic={indianCitiesFrontEnd}
              codePic={indianCitiesCode}
            />
          </div>
          <div>
            <Card
              title="React Storybook mock-up"
              github="https://github.com/AnthonyMaddox/my-component-library"
              deployed="https://anthonymaddox.github.io/my-component-library/story-build/index.html"
              tech1="Javascript"
              tech2="React"
              tech3="Storybook"
              deployedPic={storybookPic}
              codePic={storybookCode}
            />
          </div>
        </div>
        <div className="vanillaJSDiv">
          <div className="categoryDiv">Javascript:</div>
          <div>
            <Card
              title="Poisonous Plants Flash-Card Game"
              github="https://github.com/AnthonyMaddox/sei38-project4"
              deployed="https://anthonymaddox.github.io/sei38-project4/"
              tech1="Javascript"
              tech2="CSS"
              tech3="HTML"
              deployedPic={plantsPic}
              codePic={plantsCode}
            />
          </div>
          <div>
            <Card
              title="Mars Rover Camera Application"
              github="https://github.com/AnthonyMaddox/sei38-project3"
              deployed="https://anthonymaddox.github.io/sei38-project3/"
              tech1="Javascript"
              tech2="CSS"
              tech3="HTML"
              tech4="NASA's API"
              deployedPic={marsPic}
              codePic={marsCode}
            />
          </div>
          <div>
            <Card
              title="The Card Game War"
              github="https://github.com/AnthonyMaddox/sei38-project2"
              deployed="https://anthonymaddox.github.io/sei38-project2/"
              tech1="Javascript"
              tech2="CSS"
              tech3="HTML"
              deployedPic={warPic}
              codePic={warCode}
            />
          </div>
        </div>
        
        <div className="apiDiv">
          <div className="categoryDiv">APIs:</div>
          <div>
            <Card
              title="Coders-Cookoff Team Project API"
              github="https://github.com/AnthonyMaddox/recipes-group-project-backend"
              deployed="https://coders-cookout.herokuapp.com/recipes"
              tech2="Node.js"
              tech3="MongoDB"
              tech4="Mongoose"
              tech5="Express"
              deployedPic={cookAPI}
              codePic={cookAPICode}
            />
          </div>
          <div>
            <Card
              title="Indian Cities API"
              github="https://github.com/AnthonyMaddox/sei38-project6"
              deployed="https://indian-cities-api.herokuapp.com/cities"
              tech2="Node.js"
              tech3="MongoDB"
              tech4="Mongoose"
              tech5="Express"
              deployedPic={indianAPI}
              codePic={indianAPICode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
