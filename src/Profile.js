import React from "react";
import Introduction from "./Introduction";

//documentation: https://dog.ceo/dog-api/documentation/breed

export default function Profile(props) {
  console.log(props.results.data);
  if (props.results) {
    return (
      <div className="profileCard">
        <div className="profilePicture">
          {props.results.map(function (result, index) {
            return (
              <div key={index}>
                <img src={result} alt="profile-picture" className="dogImage" />{" "}
                <Introduction />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
