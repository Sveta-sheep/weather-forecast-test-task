import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    width: 350,
    height: 40,
    borderRadius: 5,
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    "&.Mui-focused": {
      borderColor: "pink",
    },
  },
  error: {
    color: theme.palette.error.main,
  },
  errorInput: {
    "&.Mui-focused": {
      border: "2px solid rgb(219, 41, 41)",
    },
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
  },
}));

export default useStyles;
