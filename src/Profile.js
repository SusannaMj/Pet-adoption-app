import React from "react";
import Introduction from "./Introduction";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//documentation: https://dog.ceo/dog-api/documentation/breed

export default function Profile(props) {
  console.log(props.results.data);
  if (props.results) {
    return (
      <Carousel useKeyboardArrows={true}>
        {props.results.map(function (result, index) {
          return (
            <div className="profileCard">
              <div key={index} className="profilePicture">
                <img src={result} alt="profile-picture" className="dogImage" />{" "}
              </div>{" "}
              <Introduction imageUrl={result} />
            </div>
          );
        })}
      </Carousel>
    );
  } else {
    return null;
  }
}
