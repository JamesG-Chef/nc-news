import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../Utils/api";
import "../../Styles/Articles.css"
import moment from "moment";
import GetUserAvatar from "../User/GetUserAvatar";
import ErrorPage from "../Errors/ErrorComponent";

const Articles = (props) => {
  const { topicSelected } = props;
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("sort_by");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getArticles(sortBy, topicSelected)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err)
        if (err.response) setError(err.response);
      });
  }, [sortBy, topicSelected]);

  function handleChange(event) {
    setSortBy(event.target.value);
  }

  return error ? (
    <ErrorPage error={error} /> 
    ) : isLoading ? (
    <div className="loader_background">
      <div className="loader"></div>
    </div>
  ) : (
    <>
      <select
        defaultValue="sort_by"
        className="select_sort_by"
        onChange={handleChange}
      >
        <option value="sort_by" disabled>
          Sort by
        </option>
        <option value="comment_count">Number of comments</option>
        <option value="created_at">Date</option>
        <option value="votes">Number of votes</option>
      </select>

      <ul className="article_list">
        {articles.map((article) => {
          const date = article.created_at;

          return (
            <div key={article.article_id} className="list_item">
              <li className="article_avatar_container_box">
                <GetUserAvatar article={article} />
                <h6>{moment(date).format("dddd, MMMM Do YYYY")}</h6>
              </li>
              <Link className="links" to={`/articles/${article.article_id}`}>
                <li>
                  <h4 className="article_title">{article.title}</h4>
                </li>
              </Link>
              <li className="article_info_box">
                <h6>
                  <span className="article_info">Topic: {article.topic}</span>
                </h6>
                <h6>
                  <span className="article_info">Votes: ({article.votes})</span>
                </h6>
                <h6>
                  <span className="article_info">
                    Comments: ({article.comment_count})
                  </span>
                </h6>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
