import React from "react";
import { deleteComment} from "../Utils/api";
import "../Styles/Comments.css";

const DeleteComment = ({ setComments, comments, comment_id }) => {
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
        Delete
      </button>
    </div>
  );
};

export default DeleteComment;
