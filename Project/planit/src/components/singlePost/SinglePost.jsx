import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //[2] is 2nd item after / split
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [address, setAddress] = useState("");
  const [charges, setCharges] = useState("");
  const [name, setName] = useState("");
  const [book, setBook] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [adhar, setAdhar] = useState("");
  const [amount, setAmount] = useState("");
  const [city, setCity] = useState("");

  const one_day = 1000 * 60 * 60 * 24;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setAddress(res.data.address);
      setCharges(res.data.charges);
      setCity(res.data.city);
    };
    console.log("user ::", user);
    getPost();
  }, [path]); //whenever this path changes fire this useEffect

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        address,
        charges,
        city,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //submitting but not refreshing the page

    const newPost = {
      name,
      adhar,
      to,
      from,
      amount,
      book,
    };
    // console.log(newPost);
    // const total = book * charges;

    // window.confirm("Delete the item?", amount)
    // setAmount(total);

    try {
      if (window.confirm('THANK YOU ENJOY THE VACCATIONS'))
        await axios.post("/book", newPost);
    } catch (err) {}
  };

  const setToDate = (val) => {
    setTo(val);
    if (from && to && book) {
      var Result =
        Math.round(new Date(from).getTime() - new Date(val).getTime()) /
        one_day;
      var Final_Result = Result.toFixed(0);
      setAmount(Math.abs(Final_Result * charges * Number(book)));
    }
  };

  const calCharge = (val) => {
    setBook(val);
    if (from && to && book) {
      var Result =
        Math.round(new Date(from).getTime() - new Date(to).getTime()) / one_day;
      var Final_Result = Result.toFixed(0);
      setAmount(Math.abs(Final_Result * charges * Number(val)));
    }
  };

  const setFromDate = (val) => {
    setFrom(val);
    if (from && to && book) {
      var Result =
        Math.round(new Date(val).getTime() - new Date(to).getTime()) / one_day;
      var Final_Result = Result.toFixed(0);
      setAmount(Math.abs(Final_Result * charges * Number(book)));
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
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
            {post.username === user?.username && (
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
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Owner:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <div className="postDesc">
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          <div className="addCity">
            <div className="add">
              {updateMode ? (
                <>
                  <span className="postDate">Address</span>

                  <input
                    className="singlePostDescInput"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <span className="postDate">Address</span>

                  <p className="postDesc">{address}</p>
                </>
              )}
            </div>
            <div className="add">
              {updateMode ? (
                <>
                  <span className="postDate">City</span>

                  <textarea
                    className="singlePostDescInput"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <span className="postDate">City</span>

                  <p className="postDesc">{city}</p>
                </>
              )}
            </div>
          </div>
          <div className="chargePhone">
            <div className="add">
              {updateMode ? (
                <>
                  <span className="postDate">Charges per day</span>

                  <input
                    className="singlePostDescInput"
                    value={charges}
                    onChange={(e) => setCharges(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <span className="postDate">Charges per day</span>
                  <p className="postDesc">{charges}</p>
                </>
              )}
            </div>

            <div className="add">
              <span className="postDate">Phone Number</span>
              <span className="postDesc">{post.phone}</span>
            </div>
            {/* <div className="add">
              <span className="postDate">Phone Number</span>
              <span className="postDesc">{post.phone}</span>
            </div> */}
          </div>
        </div>

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
        {user && user.username ? (
          <form onSubmit={handleSubmit}>
            <span className="add">
              Enter Name :{" "}
              <input type="text" required="true" maxLength={12} onChange={(e) => setName(e.target.value)} />
            </span>
            <span className="add">
              Enter Adhar Number :{" "}
              
              
              <input type="text" required="true" onChange={(e) => setAdhar(e.target.value)} />
            </span>
            <span className="add">
              from :{" "}
              <input
                type="date"
                required="true"
                onChange={(e) => setFromDate(e.target.value)}
              />
              To :
              <input type="date" required="true" onChange={(e) => setToDate(e.target.value)} />
            </span>

            <span className="add">
              People (eg. 01,02,03):{" "}
              <input type="text" required="true"onChange={(e) => calCharge(e.target.value)} />
            </span>
            <span className="add">Total Amount :{amount}</span>
            <button type="submit">Book</button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
