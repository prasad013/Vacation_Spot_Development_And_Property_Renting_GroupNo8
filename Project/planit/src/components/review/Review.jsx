import React from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import "./review.css";

function Review() {
  const [people, setPeople] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // const [current_id, set_id] = useState(
  //   // window.location.href.split("/")[window.location.href.split("/").length - 1]
  // );

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get("/review/");
      setPeople(res.data);
    };
    getReview();
  }, [path]);

  return (
    <>
      {people.map((person) => {
        const { id, review, username, path } = person;
        if (
          path ==
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ]
        ) {
          return (
            <article key={id} className="singlePostWrapper">
              <div>
                <h4 className="author">{username}</h4>
                <p className="info">{review}</p>
              </div>
            </article>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default Review;
