import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import ContactCard from ContactCard.js

storiesOf("Card", module)
  //primary (blue)
  .add("Honeymoon Website mock-up", () => (
    <Card
      title="Honeymoon Website mock-up"
      github="https://github.com/AnthonyMaddox/sei38-project1"
      deployed="https://anthonymaddox.github.io/sei38-project1/"
    />
  ))
  .add("The Card Game War", () => (
    <Card
      title="The Card Game War"
      github="https://github.com/AnthonyMaddox/sei38-project2"
      deployed="https://anthonymaddox.github.io/sei38-project2/"
    />
  ))
  .add("Mars Rover Camera Application", () => (
    <Card
      title="Mars Rover Camera Application"
      github="https://github.com/AnthonyMaddox/sei38-project3"
      deployed="https://anthonymaddox.github.io/sei38-project3/"
    />
  ))
  .add("Poisonous Plants", () => (
    <Card
      title="Poisonous Plants"
      github="https://github.com/AnthonyMaddox/sei38-project4"
      deployed="https://anthonymaddox.github.io/sei38-project4/"
    />
  ))
  .add("React Storybook", () => (
    <Card
      title="React Storybook"
      github="https://github.com/AnthonyMaddox/my-component-library"
      deployed="https://anthonymaddox.github.io/my-component-library/story-build/index.html"
    />
  ))
  .add("Indian Cities API", () => (
    <Card
      title="Indian Cities API"
      github="https://github.com/AnthonyMaddox/sei38-project6"
      deployed="https://indian-cities-api.herokuapp.com/cities"
    />
  ))
  .add("Indian Cities State of Manipur Front-End", () => (
    <Card
      title="Indian Cities State of Manipur Front-End"
      github="https://github.com/AnthonyMaddox/indian-cities-MERN"
      deployed="https://anthony-maddox-indian-cities.netlify.app/"
    />
  ))
  .add("Contact Book", () => (
    <ContactCard
      title="Contact Book"
      github="https://github.com/AnthonyMaddox/contact-book"
    />
  ))
  .add("Coders-Cookout api", () => (
      <Card 
      title="Coders-Cookout api"
      github="https://github.com/AnthonyMaddox/recipes-group-project-backend"
      deployed="https://coders-cookout.herokuapp.com/recipes" />
  ));
