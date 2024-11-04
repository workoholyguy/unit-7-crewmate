import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./page-styles.css";
import allCrew from "../assets/allcrew.png";
import saucer from "../assets/flyingsaucer.png";
// import { supabase } from "../client";

function Home() {
  return (
    <>
      <div className="home-master-container">
        {/* <p>main</p> */}
        <div className="main">
          <h1>Welcome to the Crewmate Creator!</h1>
          <h3>
            Here is where you can create your very own set of crewmates before
            sending them off into space!
          </h3>
          <div className="images">
            <img src={allCrew} alt="all crew image" width={"30%"} />
            <img src={saucer} alt="flying saucer image" width={"30%"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
