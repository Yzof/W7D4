import { REQUEST_ALL_POKEMON, REQUEST_SINGLE_POKEMON } from "./pokemon_reducer";

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default uiReducer;
