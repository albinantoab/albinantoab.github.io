import {
  SHOW_INDEX_LOADER,
  HIDE_INDEX_LOADER,
  FETCHED_LIST,
  NO_DATA,
  SET_FAVORITE,
} from '../ActionTypes';

const initialState = {
  showIndexLoader: true,
  data: null,
  page: 1,
  search: 'captain',
  type: '',
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
}

const ListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case SHOW_INDEX_LOADER:
      return { ...state, showIndexLoader: true };
    case HIDE_INDEX_LOADER:
      return { ...state, showIndexLoader: false };
    case FETCHED_LIST:
      return {
        ...state,
        data: Array.isArray(state.data) ? [...state.data, ...payload.res] : payload.res,
        page: payload.page,
        search: payload.search,
        type: payload.type,
      };
    case NO_DATA:
      return { ...state, data: [] };
    case SET_FAVORITE:
      return { ...state, favorites: [...payload.favorites] }
    default:
      return state;
  }
}

export default ListReducer;
