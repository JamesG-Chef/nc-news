import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getSingleUser } from "../Utils/api";
import "../Styles/SingleArticle.css";
import "../Styles/Comments.css";
import ArticleVotes from "./ArticleVotes";
import AddComment from "./AddComment";
import UserContext from "./LoggedInUser";

import Comments from "./Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });
  }, [article.author]);

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
            ) : null}
            <h4 className="article_author">{article.author}</h4>
          </div>
        </div>

        <p className="article_by">Comments: ({article.comment_count})</p>
        <p className="article_body">{article.body}</p>
      </div>
      <div className="votes_button_container">
        <ArticleVotes votes={article.votes} article_id={article_id} />
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
      <Comments
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
};

export default SingleArticle;
