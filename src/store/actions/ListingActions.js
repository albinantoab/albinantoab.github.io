import { API_KEY, BASE_API_URL } from '../../config/ApiConfig';
import { searchInArrayObj } from '../../helpers/commonHelper';
import{
  SHOW_INDEX_LOADER,
  HIDE_INDEX_LOADER,
  FETCHED_LIST,
  NO_DATA,
  SET_FAVORITE,
} from '../ActionTypes';

export const showIndexLoading = () => (dispatch) => {
  dispatch({
    type: SHOW_INDEX_LOADER,
  });
};

export const hideIndexLoading = () => (dispatch) => {
  dispatch({
    type: HIDE_INDEX_LOADER,
  });
};

export const fetchList = (type='', page = 1, search = 'captain') => (dispatch) => {
  dispatch({
    type: SHOW_INDEX_LOADER,
  });
  return fetch(`${BASE_API_URL}?apikey=${API_KEY}&s=${search}&page=${page}&type=${type}`)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: HIDE_INDEX_LOADER,
      });
      if(res.Response !== 'True' || res.Search.length === 0){
        dispatch({
          type: NO_DATA,
        });
      } else {
        if(page === 1){
          dispatch({
            type: NO_DATA,
          });
        }
        dispatch({
          type: FETCHED_LIST,
          payload: {
            res: res.Search,
            page,
            type,
            search,
          }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: NO_DATA,
      });
    })
}

export const setFavorite = (favorites, actionObj, action) => (dispatch) => {
  const { imdbID } = actionObj;
  const existInObj = searchInArrayObj('imdbID', imdbID, favorites);
  if(action === 'add') {
    favorites.push(actionObj);
  } else {
    favorites.splice(existInObj, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return dispatch({
    type: SET_FAVORITE,
    payload: {
      favorites,
    }
  });
}