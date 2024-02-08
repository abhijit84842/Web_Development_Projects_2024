import { useContext, useEffect } from "react";
import Post from "../components/Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  // useEffect => we pass 2 parameter 1 ) anonymous function  ,
  useEffect(() => {
    fetch("https://dummyjson.com/posts") // use API
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((list) => (
        <Post key={list.id} post={list} />
      ))}
    </>
  );
};

export default PostList;
