import "./Types.css";
import React from "react";

export default function Types(props) {
  return (
    <div className="dogbreedCard">
      <h2>{props.type.name}</h2>
      <h3> Life-span: {props.type.life_span}</h3>
      <h3>Weight: {props.type.weight.metric} kg</h3>
      <br />
      <h3>{props.type.temperament}</h3>
      <img
        src={props.type.image.url}
        alt={props.type.name}
        className="dogbreedImage"
      />
    </div>
  );
}
