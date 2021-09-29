import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Review from "../../components/review/Review";

export default function Single(props) {
  console.log("props ::", props);
  return (
    <>
      <section className="wrapper">
        <SinglePost />
        <Sidebar />
        {/* <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div> */}

        <div className="head">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>

        {/* <div className="singlePostImg"> */}
        <Review />
        {/* </div> */}
      </section>
    </>
  );
}
