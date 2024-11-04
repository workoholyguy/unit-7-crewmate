import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./page-styles.css";
import deadFound from "../assets/deadfound.png";

function CardDetails(props) {
  const { id } = useParams();
  const [mate, setMate] = useState(null);

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

  //   setMate(fetchData(id));
  console.log(mate);
  return (
    <>
      <div className="master-details-container">
        <h1>This is Deatails Page !</h1>
        <h2>Character ID: {id}</h2>
        {mate && mate.length > 0 ? (
          <>
            <h2>CrewMate: {mate[0].name}</h2>
            <h2>Stats:</h2>
            <h3>Color: {mate[0].color}</h3>
            <h3>Speed: {mate[0].speed} mph</h3>
          </>
        ) : (
          <p>Loading...</p> // Display loading message or placeholder
        )}
        <h3>Comment</h3>
        <Link to={"/edit/" + id}>
          <button type="button">Wanna Edit This CrewMate?</button>
        </Link>
        <img src={deadFound} alt="Dead Found" width={"20%"} />
      </div>
    </>
  );
}

export default CardDetails;
