import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./page-styles.css";
import allCrew from "../assets/allcrew.png";

function Create() {
  const [mate, setMate] = useState({ name: "", speed: "", color: "" });

  const createMate = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from("Crewmates")
      .insert([{ name: mate.name, speed: mate.speed, color: mate.color }])
      .select();

    console.log(mate);
    if (!mate.color) {
      alert("Please select a color.");
      return; // Stop form submission
    }
    window.location = "/";
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="create-master-container">
        <h1>Create a New CrewMate !</h1>
        <img src={allCrew} alt="All CrewMates Image" width={"20%"} />

        <form>
          <div className="form-container">
            <div className="mini-container">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter CrewMates Name"
                onChange={handleChange}
              />
            </div>
            <div className="mini-container">
              <label htmlFor="speed">Speed (mph):</label>
              <br />
              <input
                type="number"
                id="speed"
                name="speed"
                placeholder="Insert Speed in mph"
                onChange={handleChange}
              />
            </div>
            <div className="mini-container">
              <label htmlFor="color">Color:</label>
              <br />
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="red"
                  name="color"
                  value="Red"
                />
                Red
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="green"
                  name="color"
                  value="green"
                  //   checked={true}
                />
                Green
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                />
                Blue
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="purple"
                  name="color"
                  value="purple"
                />
                Purple
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="yellow"
                  name="color"
                  value="yellow"
                />
                Yellow
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="orange"
                  name="color"
                  value="orange"
                />
                Orange
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="pink"
                  name="color"
                  value="pink"
                />
                Pink
              </li>
              <li>
                <input
                  required
                  onChange={handleChange}
                  type="radio"
                  id="rainbow"
                  name="color"
                  value="rainbow"
                />
                Rainbow
              </li>
            </div>
          </div>
          <button type="submit" onClick={createMate}>
            Create a CrewMate!
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
