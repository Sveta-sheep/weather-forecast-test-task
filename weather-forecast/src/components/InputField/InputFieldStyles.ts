import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    width: 350,
    height: 40,
    borderRadius: 5,
    color: "white",
    fontSize: 20,
    fontFamily: [
      "Lucida Sans",
      "Lucida Sans Regular",
      "Lucida Grande",
      "Lucida Sans Unicode",
      "Geneva",
      "Verdana",
      "sans-serif",
    ].join(","),
  },
  error: {
    color: "rgb(219, 41, 41)",
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
    gap: 8,
  },
});

export default useStyles;
