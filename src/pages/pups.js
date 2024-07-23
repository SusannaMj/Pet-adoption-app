import React, { useState } from "react";
import Profile from "../Profile";
import axios from "axios";

export default function Pups() {
  let [age, setAge] = useState("");
  let [breed, setBreed] = useState("");

  function handleApiResponse(event) {
    alert("hello");
  }

  function updateBreed(event) {
    event.preventDefault();
    setBreed(event.target.value);
  }

  function updateAge(event) {
    event.preventDefault();
    setAge(event.target.value);
  }

  function updateSearchInformation(event) {
    let apiKey = "";
    let apiUrl = "";

    axios.get(apiUrl).then(handleApiResponse);
  }

  return (
    <div>
      <h1>Meet the pups!</h1>
      <form onSubmit={updateSearchInformation}>
        <input type="number" onChange={updateAge} min="1" />
        <input type="text" onChange={updateBreed} />
        <input type="submit" value="search" />
      </form>
      <Profile />
    </div>
  );
}
