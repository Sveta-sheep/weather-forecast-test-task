import { debounce } from 'ts-debounce';
import { Dispatch } from "react";
import { weatherApi } from "../api/api";
import { Action, ActionCreator, WeatherDataType } from "./types";

const SET_WEATHER_DATA = "weatherReducer/SET_WEATHER_DATA";

type SET_WEATHER_DATA_ACTION = Action<typeof SET_WEATHER_DATA, WeatherDataType>

type WeatherActionsTypes = SET_WEATHER_DATA_ACTION


export type WeatherState = {
    weatherData: Partial<WeatherDataType>
}

const initialState: WeatherState = {
    weatherData: {}
}

export const weatherReducer = (state: WeatherState = initialState, action: WeatherActionsTypes): WeatherState => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload || {}
            }
        default:
            return state
    }
}

export const setWeatherData: ActionCreator<typeof SET_WEATHER_DATA, WeatherDataType> = weatherData => ({
    type: SET_WEATHER_DATA,
    payload: weatherData
})

export const getCurrentWeather = (city: string) => debounce(async (dispatch: Dispatch<SET_WEATHER_DATA_ACTION>) => {
        const response = await weatherApi.getWeatherForecast(city)
        dispatch(setWeatherData(response))
})