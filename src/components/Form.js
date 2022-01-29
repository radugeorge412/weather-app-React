import React from "react";
import "../styles/basic.css";
function Form({ setCity, fetchData }) {
  return (
    <form className="input-form" onSubmit={fetchData}>
      <input
        type="text"
        placeholder="Enter your city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="submit-button" type={"submit"}>
        Search
      </button>
    </form>
  );
}

export default Form;
