import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../axios";

export const fetchWeather = createAsyncThunk("weather/fetchWeather",async () =>{
    const {data} = await axios.get("/forcast")
    return data
})

const initialState = {
    forcast: {
        weather: [],
        status: "loading",
    }
}

const weatherSlice = createSlice({
    name: "forcast",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchWeather.pending] : (state) =>{
            state.forcast.weather = []
            state.forcast.status = 'loading';
        },
        [fetchWeather.fulfilled] : (state,action) =>{
            state.forcast.weather = action.payload
            state.forcast.status = 'loaded';
        },
        [fetchWeather.rejected] : (state,action) =>{
            state.forcast.weather = []
            state.forcast.status = 'error';
        }
    }
})

export const weatherReducer = weatherSlice.reducer;