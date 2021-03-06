import * as ArticlesApi from '../api_utils/ArticlesApi';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

export const receiveArticles = (articles) => ({
  type: RECEIVE_ARTICLES,
  payload: articles,
});

export const receiveArticle = (article) => ({
  type: RECEIVE_ARTICLE,
  payload: article,
});

export const removeArticle = (id) => ({
  type: REMOVE_ARTICLE,
  payload: id,
});

export const actionFetchArticles = () => (dispatch) => {
  return ArticlesApi.apiFetchArticles().then((res) => {
    dispatch(receiveArticles(res));
  });
};

export const actionFetchArticle = (id) => (dispatch) => {
  return ArticlesApi.apiFetchArticle(id).then(({ article }) =>
    dispatch(receiveArticle(article))
  );
};

export const actionDeleteArticle = (id) => (dispatch) => {
  return ArticlesApi.apiDeleteArticle(id).then((res) =>
    dispatch(removeArticle(id))
  );
};

export const actionEditArticle = (article) => (dispatch) => {
  return ArticlesApi.apiEditArticle(article).then((res) =>
    dispatch(receiveArticles(res))
  );
};

export const actionCreateArticle = (article) => (dispatch) => {
  return ArticlesApi.apiCreateArticle(article).then((res) =>
    dispatch(receiveArticle(res))
  );
};
export const actionFetchArticlesKeyword = (keyword) => (dispatch) =>
  ArticlesApi.apiSearchArticles(keyword).then((res) => {
    return dispatch(receiveArticles(res));
  });
