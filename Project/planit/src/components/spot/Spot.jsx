import "./spot.css";
import { Link } from "react-router-dom";

export default function Spot({ spot, name }) {
  const PF = "http://localhost:5000/images/";
  console.log("spotPhoto ::", spot.photo);
  if (spot.name == name) {
    return (
      <div className="spot">
        {spot.photo && <img className="spotImg" src={PF + spot.photo} alt="" />}
        <div className="spotInfo">
          <div className="spotCats">
            {spot.categories.map((c) => (
              <span className="spotCat">{spot.categories}</span>
            ))}
          </div>
          <Link to={`/spot/${spot._id}`} className="link">
            <span className="spotTitle">{spot.title}</span>
          </Link>
          <hr />
          {/* <span className="spotDate">
          {new Date(spot.createdAt).toDateString()}    
        </span> */}
        </div>
        <p className="spotDesc">{spot.desc}</p>
      </div>
    );
  } else {
    return null;
  }
}
