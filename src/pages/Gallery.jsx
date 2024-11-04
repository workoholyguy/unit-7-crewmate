import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./page-styles.css";
import CharacterCard from "../components/CharacterCard";

function Gallery(props) {
  const [mates, setMates] = useState([]);

  useEffect(() => {
    // setMates(props.data);

    const fetchMate = async () => {
      //   const { data } = await supabase
      //     .from("Crewmates")
      //     .select()
      //     .order("created_at", { ascending: true });

      let { data: Crewmates, error } = await supabase
        .from("Crewmates")
        .select("*");

      //   setMates(data);
      setMates(Crewmates);
    };

    fetchMate();
  }, [props]);

  //   console.log(mates);
  /**
    (3) [{…}, {…}, {…}]
    0:{id: 1, created_at: '2024-11-03T22:43:07.263303+00:00', name: 'Pik', speed: 10, color: 'Pink'}
    ...
   */

  return (
    <>
      <div className="gallery-master-container">
        {/* <div className="main"> */}
        <h1>Your CrewMate Gallery !</h1>
        <div className="crewmate-container">
          {/* <CharacterCard
            name={"Dummy Name"}
            speed={100}
            color={"Dummy Color"}
          /> */}

          {mates && mates.length > 0 ? (
            mates.map((mate, index) => (
              <CharacterCard
                key={index}
                id={mate.id}
                name={mate.name}
                speed={mate.speed}
                color={mate.color}
              />
            ))
          ) : (
            <h2>{"No CrewMates Yet !🥲"}</h2>
          )}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Gallery;
