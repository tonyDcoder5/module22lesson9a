import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {

  let [posts, setPosts] = useState([]);

  // TODO: Add the ability for the <PostCreate /> component to create new posts.

  const submitPost = (object) => setPosts([...posts, object]);

  // TODO: Add the ability for the <PostList /> component to delete an existing post.
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className="App">
      <PostCreate submitPost={submitPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
