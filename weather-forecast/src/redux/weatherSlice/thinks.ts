import { WeatherDataType } from "./../types";
import { weatherApi } from "./../../service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../utils/getErrorMessage";

export const getCurrentWeather = createAsyncThunk<
  WeatherDataType,
  string,
  {
    rejectValue: string | null;
  }
>("weather/getCurrentWeather", async (city, thunkAPI) => {
  try {
    const response = await weatherApi.getWeatherForecast(city);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error as Error));
  }
});
