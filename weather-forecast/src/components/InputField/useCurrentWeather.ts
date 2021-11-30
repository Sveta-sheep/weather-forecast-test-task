import { getCurrentWeather } from "../../redux/weatherSlice/thinks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import React from "react";
import _ from "lodash";
import { selectErrorMessage } from "../../redux/weatherSlice/selectors";
import { setErrorMessage } from "../../redux/weatherSlice/reducer";

const useCurrentWeather = () => {
  const firstLoad = useRef(true);
  const [value, setValue] = useState("");
  const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    // dispatch(setErrorMessage(null));
    dispatch(_.debounce(getCurrentWeather(value), 2000));
  }, [dispatch, value]);

  return [value, handleChange, error];
};

export default useCurrentWeather;
