import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, fetching } = useContext(PostListData);
  //console.log(postList);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((list) => <Post key={list.id} post={list} />)}
    </>
  );
};

export default PostList;
