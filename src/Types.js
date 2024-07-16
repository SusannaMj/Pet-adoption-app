import React from "react";

export default function Types(props) {
  return (
    <div>
      <h2>{props.type.name}</h2>
      <h3>{props.type.life_span}</h3>
      <h3>{props.type.temperament}</h3>
      <img src={props.type.image.url} />
    </div>
  );
}
