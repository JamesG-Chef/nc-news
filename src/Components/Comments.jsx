import React, { useEffect, useState, useContext } from "react";
import { getArticleComments } from "../Utils/api";
import "../Styles/Comments.css";
import SingleComment from "./SingleComment";

const Comments = ({ article_id, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      <ul className="comments_list">
        {comments.map((comment) => {
          const date = comment.created_at;

          return (
            <SingleComment
              date={date}
              comment={comment}
              comments={comments}
              setComments={setComments}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
