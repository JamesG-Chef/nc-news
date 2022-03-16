import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./LoggedInUser";
import DeleteComment from "./DeleteComment";
import CommentVotes from "./CommentVotes";
import { getSingleUser } from "../Utils/api";
import "../Styles/Comments.css";
import moment from "moment";

const SingleComment = ({ comment, date, comments, setComments }) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser.username;

  useEffect(() => {
    return getSingleUser(comment.author).then((data) => {
      setUser(data);
    });
  }, [comment.author]);

  return (
    <div key={comment.comment_id} className="comment_list_item">
      <li key={comment.comment_id}>
        <div className="comment_author_details_box">
          <div className="avatar_box">
            {user ? (
              <img
                src={user.avatar_url}
                className="comment_author_avatar"
                alt={user.username}
              />
            ) : null}
          </div>

          <div className="comment_author_box">
            <h1 className="comment_author_name">{comment.author}</h1>
          </div>
        </div>
      </li>
      <li>
        <h6>{moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6>
      </li>
      <li>
        <p>{comment.body}</p>
      </li>
      <li>
        <button className="comment_votes_button">
          <CommentVotes votes={comment.votes} />
        </button>
        {username === comment.author ? (
          <DeleteComment
            article_id={article_id}
            setComments={setComments}
            comment_id={comment.comment_id}
            comments={comments}
          />
        ) : null}
      </li>
    </div>
  );
};

export default SingleComment;
