import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./rainy.css";
import Spots from "../../components/spots/Spots";

function Rainy() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      const res = await axios.get("/spots/?cat=rainy" );
      setSpots(res.data);
    };
    fetchSpots();
  }, []);
  return (
    <div className="rainy">
      <Spots spots={spots} />
    </div>
  );
}

export default Rainy;
