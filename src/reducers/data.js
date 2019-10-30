const dataReducerDefault = {
  data: [],
  error: undefined
};

export default (state = dataReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
};
