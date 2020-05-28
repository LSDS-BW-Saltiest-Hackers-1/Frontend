import { TOGGLE_MENU } from '../actions/navbarActions.js';

const initState = {
  isOpen: false
};

export const navbarReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  };
};
