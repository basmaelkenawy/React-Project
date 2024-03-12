// PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts, onDelete, onEdit }) => {
  return (
    <div >
      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PostList;
