import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleCard } from "../Utils/api";
import { FiHome } from "react-icons/fi";
import "../Styles/ArticleCard.css";

const ArticleCard = (props) => {
  const [article, setArticle] = useState([{}]);
  const { article_id } = useParams();

  useEffect(() => {
    return getArticleCard(article_id).then((article) => {
      console.log(article);
      setArticle(article);
    });
  }, [article_id]);

  return (
    <>
      
        <div className="back_to_articles_button">
          <button className="button-78">
            <Link className="home_link" to={"/"}>
              <p className="home-icon">
                <FiHome />
              </p>
            </Link>
          </button>
        </div>
          
        <div className="votes_comments_container">
        
        <button className="button-78" role="button">
          Votes: {article[0].votes}
        </button>
        <button className="button-78" role="button">
          Comments: {article[0].comment_count}
        </button>
      
          </div>  
      

      <div className="article_container">
        <h1 className="article_title">{article[0].title}</h1>
        <h4 className="article_topic">{article[0].topic}</h4>
        <p className="article_by">By</p>
        <h4 className="article_author">{article[0].author}</h4>
        <p className="article_body">{article[0].body}</p>
      </div>
    </>
  );
};

export default ArticleCard;
