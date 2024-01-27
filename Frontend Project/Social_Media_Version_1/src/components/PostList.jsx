import { useContext } from "react";
import Post from "../components/Post";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.map((list) => (
        <Post key={list.id} post={list} />
      ))}
    </>
  );
};

export default PostList;
