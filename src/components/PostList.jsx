import { useState } from "react";
import { Modal } from "./Modal";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList({isModalOpen, onCancelPost}) {
  const [postsData, setPostsData] = useState([]);

  return (
    <>
      {
        isModalOpen && 
          <Modal isModalOpen={isModalOpen} onCancelPost={onCancelPost}>
            <NewPost setPostsData={setPostsData} onCancelPost={onCancelPost}/>
          </Modal>
      }

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
    </>
  );
}
