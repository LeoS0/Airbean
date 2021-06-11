const initialState = {};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RESULT':
      return {
        ...(state = action.payload),
      };
    default:
      return state;
  }
};

export default resultReducer;
