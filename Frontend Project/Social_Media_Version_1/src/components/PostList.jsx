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
    // AbortController() => it is use to cancel the api call
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal }) // use API
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleanup ..");
      controller.abort();
    };
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
