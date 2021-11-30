import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { getCurrentWeather } from "../../redux/weatherSlice/thinks";

import s from "./InputField.module.css";
import { selectErrorMessage } from "../../redux/weatherSlice/selectors";
import { capitalize } from "../../utils";

const InputField = function () {
  const firstLoad = useRef(true);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(selectErrorMessage);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    timeout.current = setTimeout(() => {
      dispatch(getCurrentWeather(value));
    }, 2000);

    return () => {
      if (!!timeout.current) clearTimeout(timeout.current);
    };
  }, [dispatch, value]);

  return (
    <div className={s.inputWrapper}>
      <input
        className={clsx({ [s.errorInput]: error }, s.input)}
        type="text"
        value={value}
        onChange={handleChange}
      />
      {!!error && <div className={s.error}>{capitalize(error)}</div>}
    </div>
  );
};

export default InputField;
