import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts, spotName}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} spotName={spotName}/>
      ))}
    </div>
  );
}
