import React from "react";

//documentation: https://dog.ceo/dog-api/documentation/breed

export default function Profile(props) {
  console.log(props.results.data);
  if (props.results) {
    return (
      <div>
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <img src={result} alt="profile-picture" className="dogImage" />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
