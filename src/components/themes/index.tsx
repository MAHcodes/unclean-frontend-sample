import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../../index.css";
import { FC, ReactNode, useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useThemeMode } from "../../redux/Preferences/Slices";
import Palette from "./palette";

interface ICustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: FC<ICustomThemeProviderProps> = ({ children }) => {
  const mode = useThemeMode();
  const theme = Palette(mode);

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      shape: {
        borderRadius: 12,
      },
      palette: theme.palette,
      components: {
        MuiStack: {
          defaultProps: {
            useFlexGap: true,
            alignItems: "center",
          },
        },
      },
    }),
    [theme],
  );

  const themes = createTheme(themeOptions);

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
