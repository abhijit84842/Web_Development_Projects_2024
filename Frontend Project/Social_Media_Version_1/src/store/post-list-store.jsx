import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// create Reducer Function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

// it is a simple react component
const PostListProvider = ({ children }) => {
  // USE useReducer Hoocks...
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_list
  ); // []  initial value so, keep it blank

  // declear the add method
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(
      `${userId}  , ${postTitle} , ${postBody}, ${reactions}, ${tags}`
    );

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    // create actionm object..
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        // use this value as a object
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_list = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hi friends i am going to mumbai",
    reaction: 50,
    userId: "user-9",
    tags: ["vacation", "enjoy"],
  },

  {
    id: "56",
    title: "Pass College",
    body: "hi i am passed from Techno",
    reaction: 20,
    userId: "user-12",
    tags: ["enjoy"],
  },
];
export default PostListProvider;
