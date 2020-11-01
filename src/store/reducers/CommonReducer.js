import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../ActionTypes';

const initialState = {
  showLoader: true,
}

const commonReducer = (state = initialState, action) => {
  const { type } = action;
  switch(type){
    case SHOW_LOADER:
      return { ...state, showLoader: true };
    case HIDE_LOADER:
      return { ...state, showLoader: false };
    default:
      return state;
  }
}

export default commonReducer;
