import React from "react";
import moment from "moment";

import styles from "./Issue.module.scss";

import {Link} from "@reach/router";

class Issue extends React.Component {
  render() {
    const { title, number, user, created_at } = this.props;
    const timeAgo = moment(created_at).fromNow();
    return (
      <div className={styles.Issue}>
        <Link to={`/issues/${number}`}>
        <h3>{title}</h3>
        </Link>

        <small>
          #{number} opened {timeAgo} by {user.login}
        </small>
      </div>
    );
  }
}

export default Issue;
