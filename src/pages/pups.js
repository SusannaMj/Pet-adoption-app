import React, { useState } from "react";
import Profile from "../Profile";
import axios from "axios";
import "../Pups.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Pups() {
  let [dogSearchResult, setDogSearchResult] = useState("");

  function handleApiResponse(response) {
    console.log(response.data.message);

    setDogSearchResult(response.data.message);
  }

  function updateSearchInformation(event) {
    event.preventDefault();
    let onButtonClicked = document.querySelector("#searchButton");

    onButtonClicked.classList.add("hide");

    let apiUrl = `https://dog.ceo/api/breeds/image/random/10`;

    axios.get(apiUrl).then(handleApiResponse);
  }

  return (
    <div className="pupsPageBody">
      <h1>
        <span className="orange">Meet</span>
        <span className="pink"> the</span> pu<span className="green">p</span>s
      </h1>
      <button
        onClick={updateSearchInformation}
        className="dogSearchSubmitButton"
        id="searchButton"
      >
        <FontAwesomeIcon
          icon={faPaw}
          style={{ color: "#63E6BE" }}
          type="submit"
        />
        <div className="dogSearchButtonName">Let´s woof</div>
      </button>
      <Profile results={dogSearchResult} />
    </div>
  );
}
