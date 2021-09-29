import SingleSpot from "../../components/singleSpot/SingleSpot";
import "../single/single.css";
import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "../../components/sidebar/sidebar.css";
import { Link } from "react-router-dom";
import "./singleS.css";

export default function SingleS() {
  const [posts, setPosts] = useState([]);
  const [spotName, setSpotName] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/posts");
      setCats(res.data);
    };
    getCats();
  }, []);

  const filterSpots = (c) => {
    if (c.categories == spotName) {
      return (
        <Link to={`?cat=${c.categories}`} className="link">
          <li className="sidebarListItem">{c.categories}</li>
          {/* <li className="sidebarListItem">{spotName}</li> */}
        </Link>
      );
    }
  };

  return (
    <>
      <div className="single">
        <SingleSpot
          getSpotName={(name) => {
            setSpotName(name);
          }}
        />
      </div>
      <div className="singleP">
        <div className="prop">
          <span>Nearby Properties</span>
        </div>
        <Posts posts={posts} spotName={spotName} />
      </div>
    </>
  );
}
