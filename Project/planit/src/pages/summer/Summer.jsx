import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Spots from "../../components/spots/Spots";
import './summer.css';

function Summer() {
  const [spots, setSpots] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchSpots = async () => {
      const res = await axios.get("/spots/?cat=summer" );
      setSpots(res.data);
      // console.log(res);
    };
    fetchSpots();
  }, []);
  return (
    <div className="summer">
      <Spots spots={spots} />
    </div>
  );
}

export default Summer;
