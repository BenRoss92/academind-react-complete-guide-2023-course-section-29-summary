import { useState } from 'react';
import classes from './NewPost.module.css';

export function NewPost(props) {

  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  /**
   * 
   * Track the author field
   * - Store whatever value it is currently in React's local state
   * Use React's useState hook to be able to update the state of the author and get the current state of the author and set the beginning state (empty value)
   */
  function createPost(e) {
    e.preventDefault();

    props.setPostsData(prevPostsData => [...prevPostsData, {author: author, body: body}]);
  }

  return (
    <form className={classes.form} onSubmit={createPost}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} value={body} onChange={handleBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required value={author} onChange={handleAuthorChange}/>
      </p>
      <input type="submit" value="Create post"/>
    </form>
  );
}
