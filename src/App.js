import React from "react";

import {animals} from './animal'
import './App.css';

function displayFact(e) {
  const name = e.target.alt;
  const number = Math.floor(Math.random() * 3);
  const fact = animals[name].facts[number];
  return (document.getElementById("fact").innerHTML=fact);
}

const number=Math.floor(Math.random()*(2))
const showBackground=(number>0 ? true : false);

const title = "";
const background = (
  <img className="background" alt="ocean" src={("/images/ocean.png")} />
);
const images = [];
for (const item in animals) {
  images.push(
    <img
      src={animals[item].image}
      key={item}
      className="animal"
      alt={item}
      ariaLabel={item}
      role="button"
      onClick={displayFact}
    />
  );
}

function App() {
  return (
    <div>
    {showBackground && background}
    <div className="animals">{images.map((image) => image)}</div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title} </h1>
    <p id="fact"></p>
  </div>
  );
}

export default App;
