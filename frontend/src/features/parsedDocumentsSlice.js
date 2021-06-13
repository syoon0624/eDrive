import { createSlice } from '@reduxjs/toolkit';

const parsedDocumentsSlice = createSlice({
  name: 'parsedDocuments',
  initialState: {
    documents: [],
  },
  reducers: {
    setParsedDocuments: (state, action) => {
      state.documents = action.payload;
    },
  },
});

export const { setParsedDocuments } = parsedDocumentsSlice.actions;

export default parsedDocumentsSlice.reducer;
