import React from "react";
import Card from "./Card";
import Pic from "./Pic";

const cardList = props => {
  return (
    <div>
      {props.profileCard.map(profile => (
        <Card key={profile.id} {...profile} />
      ))}

      {props.profileCard.map(profile => (
        <Pic key={profile.id} loc={profile.location} cityPic={props.cityPic} />
      ))}
    </div>
  );
};

export default cardList;
