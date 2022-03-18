import React, { useEffect, useState } from 'react';
import { getSingleUser } from '../Utils/api';

const GetUserAvatar = ({article}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        return getSingleUser(article.author).then((userData) => {
          setUser(userData);
        });
    }, [article.author]);
    
    return (
      <div className="article_author_details_box">
      <div className="avatar_box">
        {user ? (
          <img
            src={user.avatar_url}
            className="comment_author_avatar"
            alt={user.username}
          />
        ) : null}
      </div>

      <div className="article_author_box">
        <h1 className="article_author_name">{article.author}</h1>
      </div>
    </div>
    );
};

export default GetUserAvatar;