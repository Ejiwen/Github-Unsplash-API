import React from "react";

import classes from "./comstyle.module.css";

const card = props => {
  const profile = props;
  return (
    <div className={classes.Card}>
      <img src={profile.avatar_url} />
      <div className={classes.Info}>
        <h3> {profile.name} </h3>
        <p> {profile.location}</p>
        <p> {profile.public_repos} </p>
        <p> {profile.followers} </p>
        <p> {profile.following} </p>
      </div>
    </div>
  );
};

export default card;
