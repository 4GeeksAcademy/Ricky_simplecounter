import React from "react";
import { SimpleCounter } from "./simplecounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container text-center">
      <SimpleCounter />
    </div>
  );
};

export default Home;
