import { createTheme } from "@mui/material/styles";

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
