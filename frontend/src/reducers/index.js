import { combineReducers } from 'redux';
import parsedDocumentsReducer from '../features/parsedDocumentsSlice';

export default combineReducers({
  parsedDocuments: parsedDocumentsReducer,
});
