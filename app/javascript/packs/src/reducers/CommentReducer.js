import { RECEIVE_SINGLE_COMMENT } from '../actions/CommentsAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SINGLE_COMMENT:
      return action.payload.comment;
    default:
      return oldState;
  }
};
