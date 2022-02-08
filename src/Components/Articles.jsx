import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Utils/api";
import "../Styles/Articles.css";

const Articles = (props) => {
  const { topicSelected } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topicSelected).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topicSelected]);
  return (
    <ul className="article_list">
      {articles.map((article) => {
        return (
          <div key={article.article_id} className="list_item">
            <Link className="links" to={`/articles/${article.article_id}`}>
              <li>
                <h4 className="article_title">{article.title}</h4>
              </li>
            </Link>
            <li>
              <h6 className="article_topic">Topic: {article.topic}</h6>
            </li>
            <li>
              <h6 className="article_by">Author: {article.author}</h6>
            </li>
            <li>
              <h6 className="article_votes">Votes: {article.votes}</h6>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Articles;
