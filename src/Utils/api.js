import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://james-nc-news.herokuapp.com/api",
});

export const getArticles = (topic) => {
  let query = "/articles";
  if (topic !== "All") {
    query += `?topic=${topic}`;
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

export const getArticleComments = (article_id) => {
  return newsApi.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data.commentsArray;
  })
}

export const patchArticle = (article_id) => {
  return newsApi.patch(`articles/${article_id}`, { inc_votes: 1 }).then((res) => {
    return res.data.article;
  })
}

export const postComment = (article_id) => {
  return newsApi.post(`articles/${article_id}/comments`).then((res) => {

  })
}
