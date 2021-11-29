import { Dispatch } from "react";
import { weatherApi } from "../service/api";
import { WeatherDataType } from "./types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WeatherActionsTypes = string | WeatherDataType

export interface WeatherState {
    weatherData: WeatherDataType,
    errorMessage: string
}

export const weatherSlice = createSlice({
    name: 'weather forecast',
    initialState: {
        weatherData: {},
        errorMessage: ''
    } as WeatherState,
    reducers: {
        setWeatherData: (state, action: PayloadAction<WeatherDataType>) => {
            return {
                ...state,
                weatherData: action.payload
            }
        },
        setErrorMessage: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
    }
})

export const { setWeatherData, setErrorMessage } = weatherSlice.actions;

export const selectWeatherData = (state: WeatherState) => state.weatherData;
export const selectErrorMessage = (state: WeatherState) => state.errorMessage;

export const getCurrentWeather = (city: string) => (dispatch: Dispatch<PayloadAction<WeatherActionsTypes>>) => {
    weatherApi.getWeatherForecast(city)
        .then( (res) => dispatch(setWeatherData(res)))
        .catch( (err) => dispatch(setErrorMessage(err.response.data.message))) 
}

export default weatherSlice.reducer;

