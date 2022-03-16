import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./LoggedInUser";
import { getArticleComments } from "../Utils/api";
import "../Styles/Comments.css";
import SingleComment from "./SingleComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);

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
