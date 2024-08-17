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

    let apiUrl = `https://dog.ceo/api/breeds/image/random/10`;

    axios.get(apiUrl).then(handleApiResponse);
  }

  return (
    <div>
      <h1>Meet the pups!</h1>
      <button onClick={updateSearchInformation}>
        <FontAwesomeIcon
          icon={faPaw}
          style={{ color: "#63E6BE" }}
          className="dogSearchSubmitButton"
          type="submit"
        />
      </button>
      <Profile results={dogSearchResult} />
    </div>
  );
}
