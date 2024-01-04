import { useState } from "react";
import { Modal } from "./Modal";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList({isModalOpen, onCancelPost}) {
  const [postsData, setPostsData] = useState([]);

  const postComponents = postsData.map(function (postData, index) {
    return <Post key={index} author={postData.author} body={postData.body}/>
  });

  return (
    <>
      {
        isModalOpen && 
          <Modal isModalOpen={isModalOpen} onCancelPost={onCancelPost}>
            <NewPost setPostsData={setPostsData} onCancelPost={onCancelPost}/>
          </Modal>
      }

      <ul className={classes.posts}>
        {postComponents}
      </ul>
    </>
  );
}
