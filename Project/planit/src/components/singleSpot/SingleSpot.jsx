import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singleSpot.css";

export default function SingleSpot({ getSpotName }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];      //[2] is 2nd item after / split

  const [spot, setSpot] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const [City, setCity] = useState("");

  useEffect(() => {
    const getSpot = async () => {
      const res = await axios.get("/spots/" + path);
      getSpotName(res.data.title)
      setSpot(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCity(res.data.City);
        // console.log(res);
    };
    getSpot();
  }, [path]);         //whenever this path changes fire this useEffect

  const handleDelete = async () => {
    try {
      await axios.delete(`/spots/${spot._id}`, {
        // data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/spots/${spot._id}`, {
        // username: user.username,
        title,
        desc,
        City,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {spot.photo && (
          <img  src={PF+spot.photo} 
                alt="" 
                className="singlePostImg" 
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {spot.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={City}
            onChange={(e) => setCity(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{City}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
