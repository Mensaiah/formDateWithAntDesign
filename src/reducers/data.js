const dataReducerDefault = [];

export default (state = dataReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, action.data];

    default:
      return state;
  }
};
