const initialState = {};
export default (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    default:
      return oldState;
  }
};
