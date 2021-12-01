import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import s from "./InputField.module.css";
import { capitalize } from "../../utils";
import useCurrentWeather from "./useCurrentWeather";

const InputField = function () {
  const { value, handleChange, error } = useCurrentWeather();

  return (
    <div className={s.inputWrapper}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Enter the city"
          type="text"
          value={value}
          onChange={() => handleChange}
          variant="standard"
        />
        <input className={clsx({ [s.errorInput]: error }, s.input)} />
        {!!error && <div className={s.error}>{capitalize(error)}</div>}
      </Box>
    </div>
  );
};

export default InputField;
