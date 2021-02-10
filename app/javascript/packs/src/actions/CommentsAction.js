import * as CommentsApi from '../api_utils/CommentsApi';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  payload: comments,
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  payload: dcomment,
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  payload: id,
});

export const actionCreateComment = (comment) => (dispatch) => {
  return CommentsApi.apiCreateComment(comment).then(() =>
    dispatch(receiveComment(res))
  );
};

export const actionEditComment = (comment) => (dispatch) => {
  return CommentsApi.apiEditComment(comment).then((res) =>
    dispatch(receiveComment(res))
  );
};

export const actionDeleteComment = (id) => (dispatch) => {
  return CommentsApi.apiDeleteComment(id).then((res) =>
    dispatch(removeComment(id))
  );
};

export const actionFetchCommentsUnderArticle = (id) => (dispatch) => {
  return CommentsApi.apiFetchCommentsUnderArticle(id).then((res) => dispatch(receiveComments(res)));
};
