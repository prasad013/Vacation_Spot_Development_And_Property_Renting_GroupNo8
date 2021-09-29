import React from "react";
import Topbar from "./components/topbar/Topbar";
import { useContext } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import AddProp from "./pages/addProp/AddProp";
import Book from "./pages/book/Book";
import AddSpot from "./pages/addSpot/AddSpot";
import ExploreRural from "./pages/exploreRural/ExploreRural";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Summer from "./pages/summer/Summer";
import Winter from "./pages/winter/Winter";
import Rainy from "./pages/rainy/Rainy";
import SingleS from "./pages/singleS/SingleS";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import { Context } from "../../planit/src/context/Context";
import Footer from "./components/Footer/Footer";
import Users from "./pages/users/Users";
import Books from "./pages/bookings/Books";

function App() {
  const { user, dispatch } = useContext(Context);
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Register /> : <Homepage />}
        </Route>
        <Route path="/login">{currentUser ? <Login /> : <Homepage />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/spot/:id">
          <SingleS />
        </Route>
        <Route path="/book/">
          <Book />
        </Route>

        <Route path="/post/">
          <Post />
        </Route>
        <Route path="/addProp">{currentUser ? <AddProp /> : <Login />}</Route>
        <Route path="/addSpot">
          {user && user.username && user.username == "admin" ? (
            <AddSpot />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/users">
          {user && user.username && user.username == "admin" ? <Users /> : null}
        </Route>
        <Route path="/bookings">
          {user && user.username && user.username == "admin" ? <Books /> : null}
        </Route>
        <Route path="/settings">
          {user && user.username ? <Settings /> : <Login />}
        </Route>
        <Route path="/ExploreRural">
          <ExploreRural />
        </Route>
      </Switch>
      <Route path="/summer" exact component={Summer} />
      <Route path="/Footer" exact component={Footer} />

      <Route path="/winter" exact component={Winter} />
      <Route path="/rainy" exact component={Rainy} />
      <Route path="/review" exact component={Sidebar} />
    </Router>
  );
}

export default App;
