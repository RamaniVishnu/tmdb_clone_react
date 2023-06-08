import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    'getProduct',
    async () => {
          const response = await axios.post(
            "https://api.themoviedb.org/3/tv/popular?api_key=23b2395d981664980812d2c0a1ebd44e&language=en-US&page=1"
          );
          return response.data.results;
    }
)