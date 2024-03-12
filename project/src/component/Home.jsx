// App.js
import React, { useState } from "react";
import PostList from "./PostList";
import Navbar from "./Navbar";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Sports", description: "There are around 8000 types of sports games and indigenous sports in the world  The different types of sports categories are: Individual Sports, Partner Sports, Team Sports, and Extreme Sports12. Here are some examples of sports grouped by manner of play" },
    { id: 2, title: "Planets", description: "Planets beyond the solar system. The solar system has eight planets. Moving outward from the Sun, the planets are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus" },
    // Add more posts as needed
  ]);

  const handleDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleEdit = (postId, editedTitle, editedDescription) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, title: editedTitle, description: editedDescription }
          : post
      )
    );
  };

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: "New Post",
      description: "Description ",
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div>
      <Navbar />
      <div className="mx-5 my-3">
        <h1 className="mx-5">Posts</h1>
        <button
          className="btn btn-success w-15 rounded-0 mx-5 my-2 "
          onClick={handleAddPost}
        >
          Add New Post
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center m-auto ">
        <PostList posts={posts} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;
