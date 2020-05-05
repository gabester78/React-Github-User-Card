import React from "react";

const UserCard = (props) => {
  return (
    <div>
      <div className="cardContainer">
        <div className="cardHeader">
          <h1>{props.gabe.name}</h1>
          <img
            src={props.gabe.avatar_url}
            alt="Profile Avatar"
            width="25%"
            height="25%"
          ></img>
        </div>
        <div>
          <p>Location: {props.gabe.location}</p>
          <p>Bio: {props.gabe.bio}</p>
          <a href={props.gabe.html_url}>Full Github Profile</a>
        </div>
        {/* <button>See Followers</button> */}
      </div>
      <h1 className="myFollowers">My Followers</h1>
    </div>
  );
};

export default UserCard;
