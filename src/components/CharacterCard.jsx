import React from "react";
import { useState } from "react";
import "./card-style.css";
import { Link } from "react-router-dom";
import mate from "../assets/mate-outline.png";

function CharacterCard(props) {
  return (
    <>
      <div className="character-card-master-container">
        <div className={`crewmate-card ${props.color.toLowerCase()}`}>
          <Link to={"../details/" + props.id}>
            <img src={mate} alt="mate otline" height={"150px"} width={"auto"} />
            <h3>Name: {props.name}</h3>
            <h3>Speed: {props.speed} mph</h3>
            <h3>Color: {props.color}</h3>
          </Link>
          <Link to={"/edit/" + props.id}>
            <button>Edit CrewMate</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
