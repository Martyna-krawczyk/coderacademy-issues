import React from "react";

class Repo extends React.Component {
render() {
  const {org, repo, children} = this.props;
  return (
    <div>
      <h1>
        {org} / {repo}
      </h1>
      {children}
    </div>
  )
}

}
export default Repo;