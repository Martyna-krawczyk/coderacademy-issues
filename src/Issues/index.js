import React from "react";

import axios from "axios";

import Issue from "./Issue";

class Issues extends React.Component {
  state = {
    issues: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/rails/rails/issues")
      .then(response => {
        this.setState({ issues: response.data });
      });
  }

  renderIssues() {
    return this.state.issues.map(issue => (
      <Issue key={issue.number} {...issue} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Open issues</h2>
        {this.renderIssues()}
      </div>
    );
  }
}

export default Issues;
