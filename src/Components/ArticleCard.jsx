import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleCard, getArticleComments } from "../Utils/api";
import "../Styles/ArticleCard.css";
import "../Styles/Comments.css";
import Votes from "./Votes";
import AddComment from "./AddComment";

const ArticleCard = (props) => {
  const [article, setArticle] = useState([{}]);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    return getArticleCard(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  useEffect(() => {
    return getArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  return (
    <>
      

      <div className="article_container">
        <h1 className="article_title">{article[0].title}</h1>
        <h4 className="article_topic">{article[0].topic}</h4>
        <p className="article_by">By</p>
        <h4 className="article_author">{article[0].author}</h4>
        <p className="article_by">Comments: {article[0].comment_count}</p>
        <p className="article_body">{article[0].body}</p>
      </div>
      <div className="votes_button_container">
        <Votes votes={article[0].votes} article_id={article_id} />
      </div>

      <div>
        <AddComment article_id={article_id} />
      </div>

      <ul className="comments_list">
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment_list_item">
              <li>
                <h1 className="comment_author">By: {comment.author}</h1>
              </li>
              <li>
                <h6>On: {comment.created_at}</h6>
              </li>
              <li>
                <p>{comment.body}</p>
              </li>
              <li>
                <button className="comment_votes_button">
                  Votes: {comment.votes}
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleCard;
