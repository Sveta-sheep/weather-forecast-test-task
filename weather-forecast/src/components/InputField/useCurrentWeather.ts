import { selectWeatherData } from "./../../redux/weatherSlice/selectors";
import { getCurrentWeather } from "../../redux/weatherSlice/thinks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import { selectErrorMessage } from "../../redux/weatherSlice/selectors";
import { clearError } from "../../redux/weatherSlice/reducer";
import { debounce } from "ts-debounce";

const useCurrentWeather = () => {
  const [value, setValue] = useState("");
  const error = useSelector(selectErrorMessage);
  const weatherData = useSelector(selectWeatherData);
  const dispatch = useDispatch();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const getWeatherRequest = useCallback(() => {
    if (weatherData) dispatch(clearError());
    dispatch(getCurrentWeather(value));
  }, [weatherData, value, dispatch]);

  const getWeatherReguestWithDebounce = debounce(getWeatherRequest, 2000);

  useEffect(() => {
    if (value) {
      getWeatherReguestWithDebounce();
    }

    return () => {
      getWeatherReguestWithDebounce.cancel();
    };
  }, [getWeatherReguestWithDebounce, value]);

  return { value, handleChange, error };
};

export default useCurrentWeather;
