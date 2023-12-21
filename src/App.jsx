import { PostList } from './components/PostList';
/**
 * 
 * Aim: Create a new post by typing in a author and a body into the form. When you click 'Create post', a new post is displayed.
 * 
 * Keep an array of post data at the top level (inside the App component). Have a callback that is defined in the App component, which adds a new post to the array of posts. And then pass that into the NewPost component to pass new data and create new data in the array living higher up. i.e. Define the post array as React state in the App component, then pass the updater function for the posts into the NewPost component and call when clicking the 'create post' button. The array of post data is then passed into the PostList component, then mapped over and each array item could be passed into a Post component to create a Post component for each array item. When the list of posts data changes, the PostList will be automatically re-rendered with the newer list, as the posts data props value will have changed since the last render of the PostList component.
 * 
 */
function App() {

  return (
    <main>
      <PostList/>
    </main>
  );
}

export default App;
