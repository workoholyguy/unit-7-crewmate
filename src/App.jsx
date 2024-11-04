import { useState } from "react";
import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import CardDetails from "./pages/CardDetails";
import EditCharacter from "./pages/EditCharacter";

function App() {
  // const [count, setCount] = useState(0);
  // let mates = [{ name: "Name", speed: 10, color: "Red" }];
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/details/:id",
      element: <CardDetails />,
    },
    {
      path: "/edit/:id",
      element: <EditCharacter />,
    },
  ]);

  return (
    <>
      <div className="app-master-container">
        {/* <p>master</p> */}
        <div className="side-nav">
          {/* <p>sidenav</p> */}
          <Link to="/">Home</Link>
          <Link to="/create">Create a CrewMate !</Link>
          <Link to="/gallery">CrewMate Gallery</Link>
        </div>
        <div className="main">{element}</div>
      </div>
    </>
  );
}

export default App;
