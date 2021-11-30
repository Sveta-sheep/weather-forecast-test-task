import { getCurrentWeather } from "./../weatherSlice/thinks";
import { WeatherDataType } from "./../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  weatherData: WeatherDataType;
  error: string | null;
}

const initialState: WeatherState = {
  weatherData: {},
  error: "",
};

export const weatherSlice = createSlice({
  name: "weather forecast",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherDataType>) => {
      state.weatherData = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.error = action.payload ?? null;
      });
  },
});

export const { setWeatherData, setErrorMessage } = weatherSlice.actions;

export default weatherSlice.reducer;
