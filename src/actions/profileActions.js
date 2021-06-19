export const changeStatus = (data) => {
  return {
    type: 'CHANGE_STATUS',
    payload: data,
  };
};

export const userDetails = (data) => {
  return {
    type: 'ADD_DETAILS',
    payload: data,
  };
};

export const addToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};

export const changeQuantity = (data) => {
  return {
    type: 'CHANGE_QUANTITY',
    payload: data,
  };
};

export const resetCart = (data) => {
  return {
    type: 'RESET_CART',
    payload: data,
  };
};

export const addToHistory = (data) => {
  return {
    type: 'ADD_TO_HISTORY',
    payload: data,
  };
};

export const addToStatus = (data) => {
  return {
    type: 'ADD_TO_STATUS',
    payload: data,
  };
};
