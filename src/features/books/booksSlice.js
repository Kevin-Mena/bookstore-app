import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import bookItems from '../../bookItems';

const initialState = {
  bookItems,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    handleSubmit: (state, action) => {
      const { author, title } = action.payload;
      if (!author || !title) {
        return state;
      }

      const uniqueID = uuid();
      const id = uniqueID.slice(0, 4);
      const newBook = { id, author, title };
      return { ...state, bookItems: [...state.bookItems, newBook] };
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookItems: state.bookItems.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { handleSubmit, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
