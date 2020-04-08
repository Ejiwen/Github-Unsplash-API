import React from "react";
import Card from "./Card";

const cardList = props => {
  return (
    <div>
      {props.profileCard.map(profile => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default cardList;
