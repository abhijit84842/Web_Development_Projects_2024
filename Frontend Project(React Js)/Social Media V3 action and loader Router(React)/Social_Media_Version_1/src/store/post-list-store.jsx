import { createContext, useEffect, useReducer, useState } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  //addInitialPosts: () => {},
  fetching: false,
  deletePost: () => {},
});

// create Reducer Function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

// it is a simple react component
const PostListProvider = ({ children }) => {
  // USE useReducer Hoocks...
  const [postList, dispatchPostList] = useReducer(postListReducer, []); // []  initial value so, keep it blank

  // declear the add method
  const addPost = (postData) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        postData,
        /*userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,*/
      },
    });
  };

  // add post method for API Data
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
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
  /*
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
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleanup ..");
      controller.abort();
    };
  }, []);*/

  return (
    <PostList.Provider
      value={{
        // use this value as a object
        postList,
        //fetching,
        addPost,
        //addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
