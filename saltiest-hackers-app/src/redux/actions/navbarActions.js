export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_MENU });
  };
};
