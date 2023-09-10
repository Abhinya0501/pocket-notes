import React from "react";
import "../pages/HomePage.css";

import LeftComponent from "../Components/LeftComponent";
import RightComponent from "../Components/RightComponent";
export default function HomePage() {
  return (
    <div className="hMainDiv">
      <div className="leftDiv">
        <LeftComponent />
      </div>
      <div className="rightDiv">
        <RightComponent />
      </div>
    </div>
  );
}
