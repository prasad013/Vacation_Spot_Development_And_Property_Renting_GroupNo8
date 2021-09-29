import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./viewUsers.css";

function ViewUsers() {
  const [users, setUsers] = useState([]);
  //  const location = useLocation();
  //  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/users/");
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <>
      {users.map((person) => {
        const { username, email, password } = person;
        // if (
        //   path ==
        //   window.location.href.split("/")[
        //     window.location.href.split("/").length - 1
        //   ]
        // ) {
        return (
          <article key={username} className="singlePostWrapper">
            <div>
              <div className="username">
                <span>Username : </span>
                <h4 className="author">{username}</h4>
              </div>
              <span>Email Id : </span>
              <h4 className="author">{email}</h4>
              {/* <p className="info">{password}</p> */}
            </div>
          </article>
        );
        // } else {
        //   return null;
        // }
      })}
    </>
  );
}

export default ViewUsers;
