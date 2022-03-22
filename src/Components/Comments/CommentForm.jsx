import React, { useContext, useState } from "react";
import { postComment } from "../../Utils/api";
import UserContext from "../User/LoggedInUser"
import "../../Styles/CommentForm.css";

const CommentForm = ({
  article_id,
  comments,
  setComments,
  setShowCommentForm,
}) => {
  const [form, setForm] = useState();
  const { loggedInUser } = useContext(UserContext);
  const [err, setErr] = useState(false);
  const username = loggedInUser.username;

  function handleSubmit(event) {
    event.preventDefault();
    postComment(article_id, { username: username, body: form })
      .then((data) => {
        setShowCommentForm(false);
        setComments([data, ...comments]);
      })
      .catch((err) => {
        alert("Oops, something went wrong, please try again.");
      });

    setForm("");
  }

  function handleChange(event) {
    setForm(event.target.value);
  }
  if (err) return <p>{err}</p>;
  return (
    <div>
      <form onSubmit={handleSubmit} className="comment_form">
        <h1>Add a comment:</h1>
        <textarea
          value={form}
          rows="6"
          cols="70"
          className="comment_body"
          wrap="hard"
          placeholder="Add your comment here....."
          required
          onChange={handleChange}
        ></textarea>
        <div className="flex-buttons-container">
          <button className="form_submit_button" type="submit">
            Add
          </button>
          <button
            onClick={() => setShowCommentForm(false)}
            className="cancel_form_submit_button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
