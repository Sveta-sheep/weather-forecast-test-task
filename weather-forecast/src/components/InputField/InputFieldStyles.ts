import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { NONAME } from "dns";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: 350,
      height: 40,
      borderRadius: 5,
      border: "2px solid white",
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
      "&.Mui-focused": {
        outline: "none",
        border: "2px solid rgb(26, 74, 177)",
      },
    },
  })
);

// .input {
//     width: 350px;
//     height: 40px;
//     border-radius: 5px;
//     border: 2px solid white;
//     font-size: 20px;
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
// }

// .input:focus {
//     outline: none;
//     border: 2px solid rgb(26, 74, 177);
// }

// .error {
//     color: rgb(219, 41, 41);

// }

// .errorInput,
// .errorInput:focus {
//     border: 2px solid rgb(219, 41, 41);
// }

// .inputWrapper {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     gap: 8px;
// }
