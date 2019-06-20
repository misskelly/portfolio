import { combineReducers } from 'redux';
import * as ur from './uxReducers';

export const rootReducer = combineReducers({
  loading: ur.isLoading,
  error: ur.hasErrored
});

export default rootReducer;
