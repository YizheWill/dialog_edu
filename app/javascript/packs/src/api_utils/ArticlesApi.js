import { serialize } from 'object-to-formdata';

export const apiFetchArticles = (pageNumber) => {
  const url = `/api/articles`;
  return fetch(url).then((res) => {
    console.log('res', res);
    return res.json();
  });
};

export const apiFetchArticle = (articleId) => {
  const url = `/api/articles/${articleId}`;
  return fetch(url).then((res) => res.json());
};

export const apiCreateArticle = (article) => {
  const url = '/api/articles';
  let formdata = serialize({ article: article });
  const fetchRequestOptions = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: formdata,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiDeleteArticle = (articleId) => {
  const url = `/api/articles/${articleId}`;
  return fetch(url, { method: 'DELETE' }).then((res) => res.json());
};

// TODO could be problemetic here
export const apiEditArticle = (article) => {
  const url = `/api/articles/${article.id}`;
  const formData = serialize({ article: article });
  const fetchRequestOptions = {
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiSearchArticles = (keyword) => {
  const url = `/api/articles?key_word=${keyword}`;
  const fetchRequestOptions = {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};
