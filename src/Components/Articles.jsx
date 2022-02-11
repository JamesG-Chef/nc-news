import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Utils/api";
import "../Styles/Articles.css";


const Articles = (props) => {
  const { topicSelected } = props;
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("sort_by")
  const [orderby, setOrderBy] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles(sortBy, orderby, topicSelected).then((articlesFromApi) => {
      setArticles(articlesFromApi)
         setIsLoading(false)
     
      
    });
  }, [sortBy, orderby, topicSelected]);

  function handleChange(event) {
  setSortBy(event.target.value);
}


  return isLoading ? (
    <div class="loader"></div> ) : (
    <>
      <select defaultValue="sort_by" className="select_sort_by" onChange={handleChange}>
        <option value="sort_by" disabled>Sort by</option>
        {/* <option value="comment_count">Number of comments</option> */}
        <option value="created_at">Date</option>
        <option value="votes">Number of votes</option>
      </select>

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
              <h6 className="article_votes">Votes: ({article.votes})</h6>
            </li>
            <li>
              <h6 className="article_comments">Comments: ({article.comment_count})</h6>
            </li>
            <li>
              <h6 className="article_date">Date: {article.created_at}</h6>
            </li>
          </div>
        );
      })}
    </ul>
    
    </>
    
    
  );
};

export default Articles;
