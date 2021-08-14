const initialState = {
  isLogged: false,
  user: {},
  cart: [],
  history: [],
  status: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return {
        ...state,
        isLogged: true,
      };
    case 'ADD_DETAILS':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: [...state.cart],
      };
    case 'RESET_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    case 'ADD_TO_STATUS':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
