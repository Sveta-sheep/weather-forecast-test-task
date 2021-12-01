import { selectWeatherData } from "./../../redux/weatherSlice/selectors";
import { getCurrentWeather } from "../../redux/weatherSlice/thinks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { selectErrorMessage } from "../../redux/weatherSlice/selectors";
import { clearError } from "../../redux/weatherSlice/reducer";
import { debounce } from "ts-debounce";

const useCurrentWeather = () => {
  const firstLoad = useRef(true);
  const [value, setValue] = useState("");
  const error = useSelector(selectErrorMessage);
  const weatherData = useSelector(selectWeatherData);
  const dispatch = useDispatch();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    if (weatherData) dispatch(clearError());
    dispatch(debounce(getCurrentWeather(value), 2000));
  }, [dispatch, value, weatherData]);

  return [value, handleChange, error];
};

export default useCurrentWeather;
