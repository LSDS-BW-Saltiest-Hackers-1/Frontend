// export const OPEN_MENU = 'OPEN_MENU';
// export const openMenu = () => {
//   return dispatch
// };
//
// export const CLOSE_MENU = 'CLOSE_MENU';
// export const closeMenu = () => {
//
// };

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_MENU });
  };
};
