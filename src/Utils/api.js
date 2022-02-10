import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://james-nc-news.herokuapp.com/api",
});

export const getArticles = (sort_by, order, topic) => {
  let query = "/articles";
  if (topic !== "All") {
    query += `?topic=${topic}`;
  }
  if (sort_by !== "defaultValue") {
    query += `?sort_by=${sort_by}`
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

export const getArticleCard = (article_id) => {
    return newsApi.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (article_id, sort_by, order) => {
  return newsApi.get(`articles/${article_id}/comments`, { params: {sort_by, order} }).then(({ data }) => {
    return data.commentsArray;
  })
}

export const patchArticle = (article_id) => {
  return newsApi.patch(`articles/${article_id}`, { inc_votes: 1 }).then((res) => {
    return res.data.article;
  })
}

export const postComment = (article_id, reqbody) => {
  return newsApi.post(`articles/${article_id}/comments`, reqbody).then(({ data }) => {
    return data.insertedComment;
  })
}

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`).then((res) => {
    console.log(res)
  })
}
