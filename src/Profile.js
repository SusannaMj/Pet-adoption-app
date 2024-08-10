import React from "react";

//documentation: https://dog.ceo/dog-api/documentation/breed

export default function Profile(props) {
  console.log(props.results);
  return (
    <div className="profile-card">
      <img src={props.results} alt="dogPicture" />
    </div>
  );
}
