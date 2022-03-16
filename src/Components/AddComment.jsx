import React, { useEffect, useState } from "react";
import "../Styles/AddComment.css";
import CommentForm from "./CommentForm";

const AddComment = ({ article_id, comments, setComments }) => {
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
    <CommentForm
      article_id={article_id}
      comments={comments}
      setComments={setComments}
      setShowCommentForm={setShowCommentForm}
    />
  );
};

export default AddComment;
