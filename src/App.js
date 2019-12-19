import React from "react";
import "./App.css";

import Issues from "./Issues";

import { Router } from "@reach/router";

import axios from "axios";
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
axios.defaults.auth = {
  username: "radar",
  password: githubToken
};

function App() {
  return (
    <div>
      <Router>
        <Issues path="/" />
      </Router>
    </div>
  );
}

export default App;
