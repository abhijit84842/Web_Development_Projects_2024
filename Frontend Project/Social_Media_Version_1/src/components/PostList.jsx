import { useContext } from "react";
import Post from "../components/Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList } = useContext(PostListData);

  // to get the data from fetch button
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts") // use API
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((list) => (
        <Post key={list.id} post={list} />
      ))}
    </>
  );
};

export default PostList;
