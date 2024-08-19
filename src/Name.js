import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Name(props) {
  let [name, setName] = useState("");
  function createName(response) {
    setName(response.data.answer);
  }

  useEffect(
    function () {
      let apiKey = "49t1f4o8a06a34d2d2bcfda963fe315f";
      let prompt =
        "Please sign with a  dog name, made up of a maximum of two words";
      let context =
        "You are someone very creative in making up cute dog names.";
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      axios.get(apiUrl).then(createName);
    },
    [props.imageUrl]
  );

  return <div>{name}</div>;
}
