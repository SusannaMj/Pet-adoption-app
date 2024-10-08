import React from "react";
import Types from "./Types";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <Types type={result} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
