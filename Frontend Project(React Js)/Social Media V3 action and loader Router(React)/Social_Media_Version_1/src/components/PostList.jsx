import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  //const { postList } = useContext(PostListData);
  // useLoaderData => it can be used to get the fetched data
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((list) => (
        <Post key={list.id} post={list} />
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts") // use API
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
