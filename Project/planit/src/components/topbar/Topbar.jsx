import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import Homepage from "../../pages/homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
    
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a target="_blank" href="https://en-gb.facebook.com/">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a target="_blank" href="https://twitter.com/?lang=en">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/accounts/login/">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Footer">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {user && user.username && user.username == "admin" ? (
              <Link className="link" to="/addSpot">
                ADD SPOT
              </Link>
            ) : null}
          </li>
          <li className="topListItem">
            {user ? (
              <Link className="link" to="/addProp">
                ADD PROPERTY
              </Link>
            ) : null}
          </li>

          <li className="topListItem">
            {user && user.username && user.username == "admin" ? (
              <Link className="link" to="/users">
                VIEW USERS
              </Link>
            ) : null}
          </li>
          <li className="topListItem">
            {user && user.username && user.username == "admin" ? (
              <Link className="link" to="/bookings">
                VIEW BOOKINGS
              </Link>
            ) : null}
          </li>

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
