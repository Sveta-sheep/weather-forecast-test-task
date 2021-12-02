import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import { capitalize } from "../../utils";
import useCurrentWeather from "./useCurrentWeather";
import useStyles from "./InputFieldStyles";

const InputField = function () {
  const { value, handleChange, error } = useCurrentWeather();
  const classes = useStyles();

  return (
    <Box className={classes.inputWrapper} component="form" autoComplete="off">
      <TextField
        error={!!error}
        className={clsx({ [classes.errorInput]: error }, classes.input)}
        id="standard-basic"
        label={error ? "Error" : "Enter the city"}
        type="text"
        value={value}
        onChange={handleChange}
        variant="standard"
      />
      {!!error && <div className={classes.error}>{capitalize(error)}</div>}
    </Box>
  );
};

export default InputField;
