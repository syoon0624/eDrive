import { createSlice } from '@reduxjs/toolkit';

const OPTION = ['ALL', 'WRITER', 'CONTENT'];

const searchOptionSlice = createSlice({
  name: 'searchOption',
  initialState: {
    option: OPTION[0],
  },
  reducers: {
    setSearchOption: (state, action) => {
      state.option = OPTION[action.payload];
    },
  },
});

export const { setSearchOption } = searchOptionSlice.actions;

export default searchOptionSlice.reducer;
