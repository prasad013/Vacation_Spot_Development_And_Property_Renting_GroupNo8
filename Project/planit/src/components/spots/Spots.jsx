import React from "react";
import "./spots.css";
import Spot from "../spot/Spot";
import Categories from "../categories/Categories";

function Spots({ spots }) {
  return (
    <div className="spots">
      {spots.map((p) => (
        <Spot name={p.name} spot={p} />
      ))}
    </div>
  );
}

export default Spots;
