import React, { useContext, useState } from "react";
import { postComment } from "../Utils/api";
import UserContext from "./LoggedInUser";
import "../Styles/CommentForm.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";

const CommentForm = ({ article_id, comments, setComments, setShowCommentForm }) => {
    
  const [form, setForm] = useState();
  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser.username;

  function handleSubmit(event) {
    alert("Your comment has been submitted");
    event.preventDefault();
      postComment(article_id, { username: username, body: form }).then((data) => {
          setComments([...comments, data])
          setShowCommentForm(false)
    });

    setForm("");
  }

  function handleChange(event) {
    console.log(event.target.value);
    setForm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="comment_form">
        <h1>Add your comment</h1>
        <textarea
          value={form}
          rows="4"
          cols="50"
          className="comment_body"
          wrap="hard"
          placeholder="Add your comment here....."
          onChange={handleChange}
        ></textarea>
        <button className="form_submit_button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
