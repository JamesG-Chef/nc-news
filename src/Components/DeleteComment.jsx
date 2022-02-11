import React, { useState } from "react";
import { deleteComment, getArticleComments } from "../Utils/api";
import "../Styles/Comments.css";

const DeleteComment = ({ article_id, setComments, comments, comment_id }) => {
  const removeComment = () => {
    deleteComment(comment_id).then(() => {
      let editedComments = comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      setComments(editedComments);
    });
  };

  return (
    <div className="delete_comment_button_container">
      <button onClick={() => removeComment()} className="delete_comment_button">
        Delete comment
      </button>
    </div>
  );
};

export default DeleteComment;
