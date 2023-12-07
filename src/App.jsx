import { NewPost } from './components/NewPost';
import { PostList } from './components/PostList';
import { useState } from 'react';

function App() {

  const [postsData, setPostsData] = useState([
    { author: 'Ben', body: 'I liked this course' },
    { author: 'Sammy', body: 'I loved this course' },
    { author: 'Matty', body: 'I disliked this course' },
    { author: 'Pip', body: 'I hated this course' }
  ]);

  return (
    <main>
      <NewPost/>
      <PostList postsData={postsData}/>
    </main>
  );
}

export default App;
