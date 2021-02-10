import * as CommentsApi from '../api_utils/CommentsApi';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  payload: comments,
});
export const receiveSingleComment = (comment) => ({
  type: RECEIVE_SINGLE_COMMENT,
  payload: comment,
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  payload: comment,
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  payload: id,
});
export const actionFetchComments = () => (dispatch) => {
  return CommentsApi.apiFetchComments().then((res) =>
    dispatch(receiveComments(res))
  );
};

export const actionCreateComment = (comment) => (dispatch) => {
  return CommentsApi.apiCreateComment(comment).then((res) =>
    dispatch(receiveComment(res))
  );
};

export const actionEditComment = (comment) => (dispatch) => {
  return CommentsApi.apiEditComment(comment).then((res) => {
    return dispatch(receiveComment(res));
  });
};

export const actionDeleteComment = (id) => (dispatch) => {
  return CommentsApi.apiDeleteComment(id).then((res) =>
    dispatch(removeComment(id))
  );
};

export const actionFetchCommentsUnderArticle = (id) => (dispatch) => {
  return CommentsApi.apiFetchCommentsUnderArticle(id).then((res) =>
    dispatch(receiveComments(res))
  );
};

export const actionFetchSingleComment = (id) => (dispatch) => {
  return CommentsApi.apiFetchSingleComment(id).then((res) =>
    dispatch(receiveSingleComment(res))
  );
};
