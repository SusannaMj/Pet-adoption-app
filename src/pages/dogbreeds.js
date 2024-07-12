import React, { useState } from "react";

export default function Dogbreeds() {
  let [age, setAge] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You are ${age} years old`);
  }

  function updateAge(event) {
    event.preventDefault();
    setAge(event.target.value);
  }
  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="How old are you?"
          onChange={updateAge}
          min={0}
          max={100}
        />
        <input type="submit" value="Search" />
      </form>
      <h1>See an overview of dogbreeds below</h1>
    </div>
  );
}
