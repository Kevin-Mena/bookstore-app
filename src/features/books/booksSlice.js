import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const initialState = {
  bookItems: [],
  isLoading: true,
  bookAdded: true,
  bookDeleted: true,
};

const BOOK_ID = 'IDVWqORBUvdJWqz3wMbN';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${BOOK_ID}/books`;

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('An Error occurred...!');
    }
  },
);

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    console.log(response);
    return book;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (bookId) => {
    try {
      await axios.delete(`${API_URL}/${bookId}`);
      return bookId;
    } catch (error) {
      return error;
    }
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookList = action.payload;
        const newBook = [];
        Object.keys(bookList).forEach((book) => newBook.push({
          item_id: book,
          title: bookList[book][0].title,
          author: bookList[book][0].author,
        }));
        return {
          ...state,
          bookItems: newBook,
          isLoading: false,
        };
      })

      .addCase(fetchBooks.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(createBook.pending, (state) => ({
        ...state,
        isLoading: false,
        bookAdded: false,
      }))
      .addCase(createBook.fulfilled, (state, action) => {
        const newBook = action.payload;
        return {
          ...state,
          isLoading: false,
          bookItems: [...state.bookItems, newBook],
          bookAdded: true,
        };
      })
      .addCase(createBook.rejected, (state) => ({
        ...state,
        isLoading: false,
        bookAdded: false,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: false,
        bookDeleted: false,
      }))
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        return {
          ...state,
          isLoading: false,
          bookItems: state.bookItems.filter((book) => book.item_id !== bookId),
          bookDeleted: true,
        };
      })
      .addCase(deleteBook.rejected, (state) => ({
        ...state,
        isLoading: false,
        bookDeleted: false,
      }));
  },
});

export const { handleSubmit, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
