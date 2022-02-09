import React, { useEffect, useState } from "react";
import { postComment } from "../Utils/api";
import "../Styles/AddComment.css";
import CommentForm from "./CommentForm";


const AddComment = ({ article_id }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const showForm = () => {
      setShowCommentForm(true);
  };

  return showCommentForm === false ? (
    <div className="comments_button_container">
      <button onClick={() => showForm()} className="add_comments_button">
        Add a comment
      </button>
    </div>
  ) : (
        <CommentForm />  
  );
};

export default AddComment;
