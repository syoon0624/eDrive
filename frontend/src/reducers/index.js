import { combineReducers } from 'redux';
import parsedDocumentsReducer from '../features/parsedDocumentsSlice';
import searchOptionReducer from '../features/searchOption';

export default combineReducers({
  parsedDocuments: parsedDocumentsReducer,
  searchOption: searchOptionReducer,
});
