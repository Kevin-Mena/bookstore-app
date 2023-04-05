import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import axios from "axios";

const initialState = {
  bookItems: [],
  isLoading: true,
  bookAdded: true,
  bookDeleted: true,
};

const BOOK_ID = "IDVWqORBUvdJWqz3wMbN";
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${BOOK_ID}/books`;

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const createBook = createAsyncThunk("books/createBook", async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (bookId) => {
    try {
      const response = await axios.delete(`${API_URL / bookId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const booksSlice = createSlice({
  name: "book",
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
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchBooks.fulfilled, (state,action) => {
        state.isLoading = true;
        state.bookItems= action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
        state.bookAdded = false;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookItems.push(action.payload);
        state.bookAdded = true;
      })
      .addCase(createBook.rejected, (state) => {
        state.isLoading = false;
        state.bookAdded = false;
      });
      .addCase(bookDeleted.pending, (state) => {
        state.isLoading = true;
        state.bookAdded = false;
      });
      .addCase(bookDeleted.pending, (state,action) => {
        state.isLoading = false;
        state.bookItems = state.bookItems.filter(
        (book) => book.id !== action.payload
      );
        state.bookAdded = true;
      });
      .addCase(bookDeleted.rejected, (state) => {
        state.isLoading = false;
        state.bookAdded = false;
      });
  },
});

export const { handleSubmit, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
