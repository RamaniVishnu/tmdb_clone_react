import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from './favouriteSlice';
import SearchSlice from "./SearchSlice";
import todo from './TodoList'

const myStore = configureStore({
    reducer:{ favouriteSlice,SearchSlice,todo}
})

export default myStore;