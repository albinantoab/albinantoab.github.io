import {
  SHOW_DETAILS_LOADER,
  HIDE_DETAILS_LOADER,
  FETCH_DETAILS,
} from '../ActionTypes';

const initialState = {
  showDetailsLoader: true,
  data: null,
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
}

const DetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case SHOW_DETAILS_LOADER:
      return { ...state, showDetailsLoader: true };
    case HIDE_DETAILS_LOADER:
      return { ...state, showDetailsLoader: false };
    case FETCH_DETAILS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

export default DetailsReducer;
