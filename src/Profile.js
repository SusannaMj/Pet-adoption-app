import React from "react";
import Introduction from "./Introduction";

//documentation: https://dog.ceo/dog-api/documentation/breed

export default function Profile(props) {
  console.log(props.results.data && props.results.length > 0);

  return (
    <div className="profileCard">
      <div className="profilePicture">
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <img src={result} alt="profile-picture" className="dogImage" />{" "}
              <Introduction imageUrl={result} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
