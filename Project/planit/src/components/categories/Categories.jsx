import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";


function Categories() {
//   const [cats, setCats] = useState([]);

//   useEffect(() => {
//     const getCats = async () => {
//       const res = await axios.get("/categories");
//       setCats(res.data);
//     };
//     getCats();
//   }, []);
  return (
    <div className="categories">
      <div className="category">
        <img className="categoryImg" 
                    src='img/summer1.jpg' 
                    alt="summer" 
                />
         <div className="categoryInfo">
          <Link to="/summer" className="link">
            <span className="categoryTitle">SUMMER</span>
          </Link>
          <p>Places in summer</p>
        </div>
      </div>
      <div className="category">
        <img className="categoryImg" src="img/winter.jpg" alt="winter" />
        <div className="categoryInfo">
          <Link to="/winter" className="link">
            <span className="categoryTitle">WINTER</span>
          </Link>
          <p>Places in winter</p>
        </div>
      </div>
      <div className="category">
        <img className="categoryImg" src="img/rainy.jpg" alt="rainy" />
        <div className="categoryInfo">
          <Link to="/rainy" className="link">
            <span className="categoryTitle">RAINY</span>
          </Link>
          <p>visit the waterfall scenery</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
