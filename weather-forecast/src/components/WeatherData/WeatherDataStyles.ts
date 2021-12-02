import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Cambria",
      "Cochin",
      "Georgia",
      "Times",
      "Times New Roman",
      "serif",
    ].join(","),
    fontSize: 21,
  },
});

export const useStyles = makeStyles({
  weatherDescription: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
  },
  weatherDataWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherData: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },
  weatherProperty: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 600,
    textDecoration: "underline",
  },
  weatherValue: {
    fontFamily: ["Verdana", "Geneva", "Tahoma", "sans-serif"].join(","),
  },
});
