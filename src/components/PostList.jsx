import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList({isModalOpen, onCancelPost}) {
  const [postsData, setPostsData] = useState([]);
  
  /**
   * Fetch posts from backend to be displayed the first time the component renders
   * Only do one fetch the first time the component renders - we don't want to fetch on re-renders
   * If the fetching succeeds (doesn't fail), update the local react posts state with the fetched posts
   * After fetching the backend posts and updating the local react state, display whatever posts are in the local react state
   * 
   * Use a useEffect hook to fetch the posts in the background
   * Pass an empty array as a second argument to useEffect to only make the fetching happen once on the first render and not on re-renders
   * 
   * Inside of the useEffect hook, set the postsData state with the updated posts using setPostsData
   * Outside of the useEffect hook, in the return statement (i.e. the render function), reference the new postsData state variable to display the updated posts
   */
  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => {
        // Update the local react posts state with the updated posts from the backend
        setPostsData(data.posts);
      });
  }, []);

  return (
    <>
      {
        isModalOpen && 
          <Modal isModalOpen={isModalOpen} onCancelPost={onCancelPost}>
            <NewPost setPostsData={setPostsData} onCancelPost={onCancelPost}/>
          </Modal>
      }

      {postsData.length === 0 && 
        <h2>No posts</h2>
      }

      {postsData.length > 0 &&
        <ul className={classes.posts}>
          {postsData.map((postData) => 
            // Am using body as a crude way of making each React `key` for each Post unique
            // (and hopefully each body is unique).
            // React warns you if you are rendering a list of items by mapping over them 
            // without specifying a truly unique key for each item.
            // This is because React suggests creating a unique ID yourself for each item
            // to avoid items being displayed in the wrong order if 
            // e.g. your array gets accidentally reordered.
            // If you don't specify a key, React will by default use the index of each item as a key
            // (as a best guess).
            <Post key={postData.body} author={postData.author} body={postData.body}/> )}
        </ul>
      }
    </>
  );
}
