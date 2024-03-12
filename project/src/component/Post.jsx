// Post.js
import React, { useState } from 'react';

const Post = ({ post, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedDescription, setEditedDescription] = useState(post.description);

  const handleEdit = () => {
    onEdit(post.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div >          
            <input
            className='p-2 mx-3'
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            className='p-2 '
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button  className="btn btn-secondary p-2 px-3 mx-3" onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className='border border-2 m-3 p-5'>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <button className='btn btn-outline-secondary px-5 ' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='btn btn-outline-success px-5 mx-3' onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Post;
