import React from "react";
import "../styles/landing.css";
import Form from "./Form";

function Landing({ setCity, fetchData }) {
  return (
    <>
      <div className="wrapper">
        <div className="title-wrap">
          <h1 className="title">Weather App</h1>
          <img src="landingIcon.svg" alt="poza" />
        </div>

        <div className="form-wrapper">
          <Form setCity={setCity} fetchData={fetchData} />
        </div>
      </div>
    </>
  );
}

export default Landing;
