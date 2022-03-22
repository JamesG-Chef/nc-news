import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://james-nc-news.herokuapp.com/api",
});

export const getArticles = (sort_by, topic) => {
  let query = "/articles";
  if (topic !== "All" && sort_by === "sort_by") {
    query += `?topic=${topic}`;
  }
  if (topic !== "All" && sort_by !== "sort_by") {
    query += `?topic=${topic}&sort_by=${sort_by}`;
  }
  if (topic === "All" && sort_by !== "sort_by") {
    query += `?sort_by=${sort_by}`;
  }

  return newsApi.get(query).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`articles/${article_id}`).then(({ data }) => {
    return data.article[0];
  });
};

export const getArticleComments = (article_id, sort_by, order) => {
  return newsApi
    .get(`articles/${article_id}/comments`, { params: { sort_by, order } })
    .then(({ data }) => {
      return data.commentsArray;
    });
};

export const upvoteArticle = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.article;
    });
};

export const downvoteArticle = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, { inc_votes: -1 })
    .then((res) => {
      return res.data.article;
    });
};

export const postComment = (article_id, reqbody) => {
  return newsApi
    .post(`articles/${article_id}/comments`, reqbody)
    .then(({ data }) => {
      return data.insertedComment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`).then((res) => {});
};

export const upvoteComment = (comment_id) => {
  return newsApi
    .patch(`comments/${comment_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.comment;
    });
};

export const downvoteComment = (comment_id) => {
  return newsApi
    .patch(`comments/${comment_id}`, { inc_votes: -1 })
    .then((res) => {
      return res.data.comment;
    });
};

export const getSingleUser = (username) => {
  return newsApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const getAllUsers = () => {
  return newsApi.get("/users").then(({ data }) => {
    return data;
  });
};
