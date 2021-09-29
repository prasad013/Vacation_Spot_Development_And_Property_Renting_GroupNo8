import "./AddSpot.css";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import Dropdown from "react-dropdown"

export default function AddSpot() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [city, setCity] = useState("");
  const [categories, setCategories] = useState("");
  const [options, setoptions] = useState("");
  const season = [
    'summer', 'winter', 'rainy'
  ];
  const defaultOption = season[0];

  useEffect(() => {
    const fetchSpots = async () => {
      const res = await axios.get("/spots/");
      let cat = []
      for (let i = 0; i < res.data.length; i++) {
        cat.push(res.data[i].title)
      }
      setoptions(cat);
      console.log("rescat ::", res);
    };
    fetchSpots();
  }, []);




  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      city,
      categories
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/spots", newPost);
      window.location.replace("/");
    } catch (err) { }
  };
  return (
    <div className="addprop">
      {file && (
        <img className="addpropImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="addpropForm" onSubmit={handleSubmit}>
        <div className="addpropFormGroup">
          <label htmlFor="fileInput">
            <i className="addpropIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}

          />
          <input
            className="addpropInput"
            placeholder="SpotName"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}

          />
        </div>
        <div className="addpropFormGroup">

          <textarea
            placeholder="Spot Details"
            type="text"
            className="addpropInput addpropText"

            onChange={e => setDesc(e.target.value)}
          />

        </div>
        <div className="addpropFormGroup1">
        <Dropdown className="dropdown addpropInput addpropText1 " menuClassName="dropdown-content"
         options={season} onChange={e=>setCategories(e.value)} placeholder="Select Season" />
        </div>
        <div className="addpropFormGroup1">
          <input type="text" className="addpropInput addpropText1 " placeholder="City" 
          onChange={e => setCity(e.target.value)} /><br />
        </div>

        <button className="addpropSubmit" type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
}
