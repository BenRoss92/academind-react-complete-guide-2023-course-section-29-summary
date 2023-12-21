import { useState } from "react";
import { Modal } from "./Modal";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList() {
  const [postsData, setPostsData] = useState([
    { author: 'Ben', body: 'I liked this course' },
    { author: 'Sammy', body: 'I loved this course' },
    { author: 'Matty', body: 'I disliked this course' },
    { author: 'Pip', body: 'I hated this course' }
  ]);

  const [ isModalOpen, setIsModalOpen ] = useState(true);

  const postComponents = postsData.map(function (postData, index) {
    return <Post key={index} author={postData.author} body={postData.body}/>
  });

  return (
    <>
      {
        isModalOpen && 
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <NewPost setPostsData={setPostsData}/>
          </Modal>
      }

      <ul className={classes.posts}>
        {postComponents}
      </ul>
    </>
  );
}
