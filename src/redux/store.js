import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/books/booksSlice";
import categoryReducer from "../redux/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
