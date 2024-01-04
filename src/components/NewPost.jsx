import { useState } from 'react';
import classes from './NewPost.module.css';

export function NewPost({setPostsData, onCancelPost}) {

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
    // Stops the form from automatically trying to send an HTTP request to the same domain/origin/server where our React app is being served. 
    // If this happened, it would cause a whole page re-render. We don't want the server to try to handle this form submission.
    // Instead we want the client (our React code) to handle this form submission. 
    e.preventDefault();

    // We pass a function to setState to determine the new state, instead of just passing setState a new array.
    // This is because as a rule in React, if we're updating a state, 
    // and that state happens to need to know the previous state's value in order to work out 
    // what the new state value should be, then we need to pass a function to ensure that the new state. 
    // This is because React sometimes might decide to batch multiple calls to setState together in one call
    // (one single update) to improve performance. This means that the state variable being updated might be 
    // updated asynchronously, so we can't rely on the previous state value always 
    // being what we think it will be. The new state otherwise might be calculated based on 
    // some older more stale state value, so we may end up with an incorrect value for the new state
    // if we try to calculate it ourselves in this way.
    setPostsData(prevPostsData => [...prevPostsData, {author: author, body: body}]);
    onCancelPost();
  }

  return (
    // onSubmit is automatically triggered under the hood when the submit button is clicked
    <form className={classes.form} onSubmit={createPost}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} value={body} onChange={handleBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required value={author} onChange={handleAuthorChange}/>
      </p>
      <p className={classes.actions}>
        {/* N.B. Gotcha: Don't call your function when passing it to an event listener (e.g. `onClick`). 
          * The value assigned to an event listener needs to be a function, not the result of a function 
          * Otherwise your event handler function will be called immediately ever time the component renders, 
          * instead of only being called after a certain event happens on a DOM element (e.g. a DOM element being clicked).
        */}
        {/* Default type for button element is 'submit'. To stop the cancel button from being treated as a form submission, use type="button" */}
        <button type="button" onClick={onCancelPost}>Cancel</button>
        {/* Button is automatically treated as a submit button as default type for button element is 'submit'. */}
        <button>Submit</button>
      </p>
    </form>
  );
}
