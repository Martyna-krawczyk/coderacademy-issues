import React from "react";
import moment from "moment";

import styles from "./Issue.module.scss";

class Issue extends React.Component {
  render() {
    const { title, number, user, created_at } = this.props;
    const timeAgo = moment(created_at).fromNow();
    return (
      <div className={styles.Issue}>
        <h3>{title}</h3>

        <small>
          #{number} opened {timeAgo} by {user.login}
        </small>
      </div>
    );
  }
}

export default Issue;
