import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const [review, setReview] = useState("");
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const newReview = {
      username: user.username,
      review,
      path,
    };

    console.log(path);
    try {
      await axios.post("/review", newReview);
    } catch (err) {}
  };
  return (
    <>
      {user && user.username ? (
        <div className="sidebar">
          <form onSubmit={handleSubmit}>
            <label>Review :{""}</label>
            <textarea
              type="text"
              className="rev"
              onChange={(e) => setReview(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : null}
    </>
  );
}
