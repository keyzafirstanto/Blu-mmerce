const initialState = {
  cartList: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, ...action.payload };
    case 'ADD_NEW_DATA':
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default reducers;
