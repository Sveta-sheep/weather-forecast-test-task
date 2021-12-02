import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  weatherDescription: {
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
    fontFamily: [
      "Cambria",
      "Cochin",
      "Georgia",
      "Times",
      "Times New Roman",
      "serif",
    ].join(","),
    fontSize: 21,
    fontWeight: 600,
    textDecoration: "underline",
  },
  weatherValue: {
    fontFamily: ["Verdana", "Geneva", "Tahoma", "sans-serif"].join(","),
  },
});
