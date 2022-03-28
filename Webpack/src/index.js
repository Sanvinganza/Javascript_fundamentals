import "./style.css";
import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";
import moment from "moment";

function App() {
    const [state, setState] = useState(true);

    return <button onClick={() => setState(!state)}>{state.toString()}</button>;
}

const getUserModule = () => import("./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.table(json));
  });

  console.log(moment().date())
});

render(<App />, document.getElementById("root"));