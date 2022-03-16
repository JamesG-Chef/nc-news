import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleArticle,
  getArticleComments,
  getSingleUser,
} from "../Utils/api";
import "../Styles/SingleArticle.css";
import "../Styles/Comments.css";
import ArticleVotes from "./ArticleVotes";
import AddComment from "./AddComment";
import UserContext from "./LoggedInUser";
import DeleteComment from "./DeleteComment";
import CommentVotes from "./CommentVotes";
import moment from "moment";
import GetUserAvatar from "../Components/GetUserAvatar";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showVoteButton, setShowVoteButton] = useState(true);
  const [user, setUser] = useState();

  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser.username;

  useEffect(() => {
    return getSingleArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  useEffect(() => {
    return getSingleUser(article.author).then((userData) => {
      setUser(userData);
    });
  }, [article.author]);

  useEffect(() => {
    return getArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <div className="loader_background">
      <div className="loader"></div>
    </div>
  ) : (
    <>
      <div className="article_container">
        <h1 className="article_title">{article.title}</h1>
        <h4 className="article_topic">{article.topic}</h4>
          <p className="article_by">By</p>
          <div className="author_box">

          
        <div className="article_avatar_container">
          {user ? (
            <img
              src={user.avatar_url}
              alt={user.username}
              className="article_author_avatar"
            />
          ) : (
            null
            )}
            <h4 className="article_author">{article.author}</h4>
            </div>
            </div>
        
        <p className="article_by">Comments: ({article.comment_count})</p>
        <p className="article_body">{article.body}</p>
      </div>
      <div className="votes_button_container">
        {showVoteButton ? (
          <ArticleVotes
            votes={article.votes}
            article_id={article_id}
            showVoteButton={showVoteButton}
            setShowVoteButton={setShowVoteButton}
          />
        ) : null}
      </div>

      <div>
        {username ? (
          <AddComment
            article_id={article_id}
            comments={comments}
            setComments={setComments}
          />
        ) : null}
      </div>

      <ul className="comments_list">
        {comments.map((comment) => {
          const date = comment.created_at;
          return (
            <div key={comment.comment_id} className="comment_list_item">
              <li>
                
                <h1 className="comment_author">{comment.author}</h1>
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
              <li></li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default SingleArticle;
