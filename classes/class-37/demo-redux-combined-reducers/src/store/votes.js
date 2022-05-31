let initialState = {
  totalVotes: 0,
};


// basically this is our reducer
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':

      let totalVotes = state.totalVotes + 1; //..
      return { totalVotes };

    case 'RESET':
      console.log(initialState);
      return initialState;

    default:
      return state;
  }
};

// this is the actions we can interact with our reducer function
export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name
  };
};

export const decrement = (name) => {
  return {
    type: 'DECREMENT',
    payload: name
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};
