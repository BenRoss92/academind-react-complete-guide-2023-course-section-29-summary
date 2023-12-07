import { Post } from "./Post";
import classes from "./PostList.module.css";

export function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author={"Ben Ross"} body={"This course changed my freakin' life! 50 million stars!!!"}/>
      <Post author={"Ren Boss"} body={"I hated this course. It was roobish. Money back please?!?!"}/>
    </ul>
  );
}
