import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleComments } from '../Utils/api';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { params } = useParams();
    console.log(params)

    useEffect(() => {
        return getArticleComments().then((commentsFromApi) => {
            console.log(commentsFromApi)
        })
    })
        
    return (
        <div>
            You have reached the comments!
        </div>
    );
};

export default Comments;