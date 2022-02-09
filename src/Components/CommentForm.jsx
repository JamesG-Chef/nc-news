import React, { useContext, useState } from "react";
import { postComment } from "../Utils/api";
import UserContext from "./LoggedInUser";
import "../Styles/CommentForm.css";

const CommentForm = () => {
  const [form, setForm] = useState();
  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser.username;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    //   postComment(username);
      setForm("")
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
          className="comment_body"
          type="text"
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
