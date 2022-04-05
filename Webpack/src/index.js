import "./style.css";
import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";
import moment from "moment";
import Image from "./assets/pt.png";

const getUserModule = () => import("./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.table(json));
  });

  console.log("today: " + moment().date())
});

function App() {
  const [state, setState] = useState(true);
  return <>
    <img src={Image} alt="torchlight in the sky" />
    <h1>IMAGES</h1>
    <button onClick={() => setState(!state)}>{state.toString()}</button>
  </>
}

render(<App />, document.getElementById("root"));