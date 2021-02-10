import { serialize } from 'object-to-formdata';

export const apiFetchComments = () => {
  const url = '/api/comments';
  return fetch(url).then((res) => res.json());
};

export const apiCreateComment = (comment) => {
  const url = '/api/comments';
  let formdata = serialize({ comment: comment });
  const fetchRequestOptions = {
    method: 'POST',
    header: {
      'Content-Type': 'applicaion/json',
    },
    body: formdata,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

// TODO could be problemetic here
export const apiEditComment = (comment) => {
  const url = `/api/comments/${comment.id}`;
  const formData = serialize({ comment: comment });
  const fetchRequestOptions = {
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiDeleteComment = (commentId) => {
  const url = `/api/comments/${commentId}`;
  return fetch(url, { method: 'DELETE' }).then((res) => res.json());
};
export const apiFetchCommentsUnderArticle = (articleId) => {
  const url = `/api/articles/${articleId}/comments`;
  return fetch(url).then((res) => {
    console.log('res', res);
    return res.json();
  });
};
