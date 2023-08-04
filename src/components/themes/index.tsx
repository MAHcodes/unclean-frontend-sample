import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { FC, ReactNode, memo, useMemo } from "react";
import "../../index.css";
import { useThemeMode } from "../../redux/Preferences/Slices";
import componentsOverrides from "../common/themes/overrides";
import Palette from "./palette";
import { THEMEMODE, systemToThemeMode } from "../../redux/Preferences/helpers";

interface ICustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: FC<ICustomThemeProviderProps> = ({ children }) => {
  const mode = useThemeMode();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = Palette(
    mode === THEMEMODE.SYSTEM ? systemToThemeMode(prefersDarkMode) : mode,
  );

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      shape: {
        borderRadius: 12,
      },
      palette: theme.palette,
    }),
    [theme],
  );

  const themes = createTheme(themeOptions);

  themes.components = componentsOverrides(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default memo(CustomThemeProvider);