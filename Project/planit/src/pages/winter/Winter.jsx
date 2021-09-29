import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import './winter.css'
import Spots from "../../components/spots/Spots";


function Winter() {
  const [spots, setSpots] = useState([]);
  

  useEffect(() => {
    const fetchSpots = async () => {
      const res = await axios.get("/spots/?cat=winter" );
      setSpots(res.data);
    };
    fetchSpots();
  }, []);
  return (
    <div className="winter">
      <Spots spots={spots} />
    </div>
  );
}

export default Winter;
