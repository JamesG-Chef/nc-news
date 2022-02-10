import React, { useState } from 'react';
import { deleteComment, getArticleComments } from '../Utils/api';
import "../Styles/Comments.css"

const DeleteComment = ({ article_id, SetComments, comment_id }) => {
    
    const removeComment = () => {
        deleteComment(comment_id)

       
    }
    
    
    return (
        <div>
             <button onClick={() => removeComment()} className="delete_comment_button">Delete comment</button>
        </div>
    );
};

export default DeleteComment;