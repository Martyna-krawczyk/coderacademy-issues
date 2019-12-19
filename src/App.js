import React from "react";
import "./App.css";

import Issues from "./Issues";
import BigIssue from "./Issues/BigIssue";
import Repo from "./Repos/Repo";

import {Router} from "@reach/router";

import axios from "axios";
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
axios.defaults.auth = {
  username: "Martyna-Krawczyk",
  password: githubToken
};



function App() {
  return (
    <div>
      <h1>Rails issues</h1>
      <Router>
        <Repo path="/repos/:org/:repo">
          <Issues path="/"/>
          <BigIssue path="/issues/:number"/>
        </Repo>
      </Router>
    </div>
  );
}

export default App;
