import { RECEIVE_ARTICLES, REMOVE_ARTICLE } from '../actions/ArticlesAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.payload;
    case REMOVE_ARTICLE:
      const newState = { ...oldState };
      delete newState[action.payload];
      return newState;
    default:
      return oldState;
  }
};
