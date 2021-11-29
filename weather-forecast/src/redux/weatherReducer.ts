import { Dispatch } from "react";
import { weatherApi } from "../service/api";
import { Action, ActionCreator, WeatherDataType } from "./types";


const SET_WEATHER_DATA = "weatherReducer/SET_WEATHER_DATA";
const SET_ERROR_MESSAGE = "weatherReducer/SET_ERROR_MESSAGE";

type SET_WEATHER_DATA_ACTION = Action<typeof SET_WEATHER_DATA, WeatherDataType>
type SET_ERROR_MESSAGE_ACTION = Action<typeof SET_ERROR_MESSAGE, string>

type WeatherActionsTypes = SET_WEATHER_DATA_ACTION | SET_ERROR_MESSAGE_ACTION


export type WeatherState = {
    weatherData: WeatherDataType,
    errorMessage: string
}

const initialState: WeatherState = {
    weatherData: {},
    errorMessage: ''
}

export const weatherReducer = (state: WeatherState = initialState, action: WeatherActionsTypes): WeatherState => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload || {}
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload || ''
            }
        default:
            return state
    }
}

export const setWeatherData: ActionCreator<typeof SET_WEATHER_DATA, WeatherDataType> = weatherData => ({
    type: SET_WEATHER_DATA,
    payload: weatherData
})

export const setErrorMessage: ActionCreator<typeof SET_ERROR_MESSAGE, string> = error => ({
    type: SET_ERROR_MESSAGE,
    payload: error
})

export const getCurrentWeather = (city: string) => (dispatch: Dispatch<WeatherActionsTypes>) => {
        weatherApi.getWeatherForecast(city)
            .then( (res) => dispatch(setWeatherData(res)))
            .catch( (err) => dispatch(setErrorMessage(err.response.data.message))) 
}