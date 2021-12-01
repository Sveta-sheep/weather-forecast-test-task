import React, { ChangeEventHandler } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import s from "./InputField.module.css";
import { selectErrorMessage } from "../../redux/weatherSlice/selectors";
import { capitalize } from "../../utils";
import useCurrentWeather from "./useCurrentWeather";

const InputField = function () {
  const { value, handleChange, error } = useCurrentWeather();

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
