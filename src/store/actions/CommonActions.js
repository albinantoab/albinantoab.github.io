import { HIDE_LOADER, SHOW_LOADER } from "../ActionTypes";

export const showLoading = () => (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });
};

export const hideLoading = () => (dispatch) => {
  dispatch({
    type: HIDE_LOADER,
  });
};