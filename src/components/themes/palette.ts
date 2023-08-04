import { createTheme } from "@mui/material/styles";
import { ThemeMode } from "../../redux/MuiTheme/types";

const Palette = (mode: ThemeMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#212121",
      },
    },
  });
};

export default Palette;
