import React from "react";
import ReactIframe from "react-iframe";

export default function About() {
  return (
    <div>
      <h1>Where to find us</h1>
      <div className="contact-card">
        <ReactIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5079087939444!2d153.24253277636606!3d-27.732476027955343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b916afc30779607%3A0x52c562226a8aada7!2sAWLQ%20Beenleigh%20Animal%20Rehoming%20Centre!5e0!3m2!1sde!2sau!4v1721725618268!5m2!1sde!2sau"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />

        <h2>Contact Us</h2>
        <form>
          <input type="taxt" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
