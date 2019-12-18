import React from "react";
import "./App.css";

import Issues from "./Issues";

import axios from "axios";
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
axios.defaults.auth = {
  username: "radar",
  password: githubToken
};

function App() {
  return (
    <div>
      <h1>Rails issues</h1>
      <Issues />
    </div>
  );
}

export default App;
