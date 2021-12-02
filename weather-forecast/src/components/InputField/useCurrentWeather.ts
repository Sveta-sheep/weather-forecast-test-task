import { selectWeatherData } from "./../../redux/weatherSlice/selectors";
import { getCurrentWeather } from "../../redux/weatherSlice/thinks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import React from "react";
import { selectErrorMessage } from "../../redux/weatherSlice/selectors";
import { clearError } from "../../redux/weatherSlice/reducer";
import { debounce } from "ts-debounce";

const useCurrentWeather = () => {
  const [value, setValue] = useState("");
  const error = useSelector(selectErrorMessage);
  const weatherData = useSelector(selectWeatherData);
  const dispatch = useDispatch();
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.currentTarget.value);

  const getWeatherRequestWithDebounce = useMemo(() => {
    return debounce(() => {
      if (weatherData) dispatch(clearError());
      dispatch(getCurrentWeather(value));
    }, 2000);
  }, [weatherData, value, dispatch]);

  useEffect(() => {
    if (value) {
      getWeatherRequestWithDebounce();
    }

    return () => {
      getWeatherRequestWithDebounce.cancel();
    };
  }, [getWeatherRequestWithDebounce, value]);

  return { value, handleChange, error };
};

export default useCurrentWeather;
