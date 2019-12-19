import React from "react";
import {Link} from "@reach/router";
import axios from "axios";
import moment from "moment";

class BigIssue extends React.Component {

  state = {
    body: null,
    title: null,
    labels: [],
    user: null,
    loading: true
  };

  componentDidMount() {
    const {number} = this.props;
    
    axios
    .get(`https://api.github.com/repos/rails/rails/issues/${number}`)
    .then(response => {
      const {body, title, labels, user} = response.data
      this.setState({body, title, number, labels, user, loading: false});
      
    });
  }


  render(){
    const {loading} = this.state;

    if (loading) {
      return <div>Loading...</div>
    }

    const {body, title, labels, user, number} = this.state;
    return(
    <div>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <h3>#{number}</h3>
      <p>{user.login} commented ago</p>

      <div>{body}</div>
    </div>
    );
  }
}

export default BigIssue;