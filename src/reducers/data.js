const dataReducerDefault = {
  data: []
};

export default (state = dataReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      // return [...state, action.data];
      return {
        ...state,
        data: [...state.data, action.data]
      };
    default:
      return state;
  }
};
