import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList(props) {
  const postComponents = props.postsData.map(function (postData, index) {
    return <Post key={index} author={postData.author} body={postData.body}/>
  });

  return (
    <ul className={classes.posts}>
      {postComponents}
    </ul>
  );
}
