import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";
import "./page-styles.css";
import allCrew from "../assets/allcrew.png";
import { useEffect } from "react";

function EditCharacter(props) {
  const { id } = useParams();
  const [mate, setMate] = useState({
    name: "",
    speed: "",
    color: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Retrieve the Data for the submission
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Crewmates")
        .select()
        .eq("id", id);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setMate(data); // Set fetched data to mate
      }
    };
    fetchData();
  }, [id]);

  const deleteCharacter = async (event) => {
    event.preventDefault();
    await supabase.from("Crewmates").delete().eq("id", id);
    window.location = "/gallery";
  };

  const updateCharacter = async (event) => {
    event.preventDefault();
    await supabase
      .from("Crewmates")
      .update({
        name: mate.name,
        speed: mate.speed,
        color: mate.color,
      })
      .eq("id", id)
      .select();

    window.location = "/gallery/";
  };

  return (
    <>
      <div className="master-edit-character-container">
        <h1>Update the Char-r with id: {id}</h1>
        <img src={allCrew} alt="All Crew" width={"30%"} />
        <h2>Current Crewmate Info:</h2>
        <div className="info-container">
          {mate && mate.length > 0 ? (
            <>
              <h4>Id: {mate[0].id}</h4>
              <h4>Name: {mate[0].name}</h4>
              <h4>Speed: {mate[0].speed}</h4>
              <h4>Color: {mate[0].color}</h4>
            </>
          ) : (
            <p>Loading...</p> // Display loading message or placeholder)
          )}
        </div>

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
          <div className="button-container">
            <button type="submit" onClick={updateCharacter}>
              Update Current CrewMate!
            </button>
            <button
              type="submit"
              className="delete-button"
              onClick={deleteCharacter}
            >
              Delete this CrewMate!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditCharacter;
