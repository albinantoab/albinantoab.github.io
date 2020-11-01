import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './reducers/CommonReducer';
import ListReducer from './reducers/ListingReducer';
import DetailsReducer from './reducers/DetailsReducer';

const combinedReducer = combineReducers({
  common: commonReducer,
  list: ListReducer,
  details: DetailsReducer,
});

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;