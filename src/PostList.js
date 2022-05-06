import React from "react";
import Post from "./Post"

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, deletePost}) {

  const deleteHandler = (id) => {
    deletePost(id);
  }

  // TODO: Diplay the list of posts.
  const postList = posts.map((post)=>{
    return <Post
    key = {post.id}
    deleteHandler={deleteHandler}
    post = {post}
    />
  })
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
  <div className="post-list">
      {postList}
    </div>
    );
}

export default PostList;
