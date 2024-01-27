import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "18rem;" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((taglist) => (
          <span key={taglist} className="badge text-bg-primary hashtag">
            {taglist}
          </span>
        ))}
        <div className="alert alert-success reactions " role="alert">
          This post has been reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Post;
