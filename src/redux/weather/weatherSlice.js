import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const API_KEY = process.env.REACT_APP_WEATHER_API;

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    }
);

const initialState  = {
    data: null,
    status: 'idle',
    error: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,

reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchWeather.pending, (state) => {
        state.status ='loading';
    })
    .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status ='sucess';
        state.data = action.payload;
    })
     .addCase(fetchWeather.rejected, (state, action) => {
        state.status ='failed';
        state.error = action.error.message;
    });
},
});

export default weatherSlice.reducer;