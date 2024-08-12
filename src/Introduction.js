import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Introduction.css";

export default function Introduction(props) {
  let [introduction, setIntroduction] = useState("");
  function createIntroduction(response) {
    console.log(response.data.answer);

    setIntroduction(response.data.answer);
  }

  useEffect(
    function () {
      //documentation: https://www.shecodes.io/learn/apis/ai
      let imageUrl = props.imageUrl;

      let apiKey = "49t1f4o8a06a34d2d2bcfda963fe315f";
      let prompt =
        "Please write a short, funny and cute introduction about yourself. mention your breed as stated as part of the imageUrl, your name (pleae choose a cute dog name), what dog things you like to do and if you like kids, other dog etc.";
      let context = "You are the dog presented in the picture.";
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      axios.get(apiUrl).then(createIntroduction);
    },
    [props.imageUrl]
  );

  return <div className="introductionText">{introduction}</div>;
}
