import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // using for loading Spinner..
  const [fetching, setFetching] = useState(false);

  // useEffect => we pass 2 parameter 1 ) anonymous function  ,
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts") // use API
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {postList.map((list) => (
        <Post key={list.id} post={list} />
      ))}
    </>
  );
};

export default PostList;
