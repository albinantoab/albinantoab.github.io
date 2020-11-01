import { API_KEY, BASE_API_URL } from '../../config/ApiConfig';
import {
  SHOW_DETAILS_LOADER,
  HIDE_DETAILS_LOADER,
  FETCH_DETAILS,
} from '../ActionTypes';

export const showIndexLoading = () => (dispatch) => {
  dispatch({
    type: SHOW_DETAILS_LOADER,
  });
};

export const hideIndexLoading = () => (dispatch) => {
  dispatch({
    type: HIDE_DETAILS_LOADER,
  });
};

export const fetchDetails = (imdbID) => (dispatch) => {
  dispatch({
    type: SHOW_DETAILS_LOADER,
  });
  return fetch(`${BASE_API_URL}?apikey=${API_KEY}&i=${imdbID}`)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_DETAILS,
        payload: res
      });
      dispatch({
        type: HIDE_DETAILS_LOADER,
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_DETAILS,
        payload: {},
      });
    })
}
