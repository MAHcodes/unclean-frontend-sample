import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../../index.css";
import { FC, ReactNode } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface Props {
  children: ReactNode;
}

const customTheme = createTheme({
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      main: "#212121",
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
        alignItems: "center",
      },
    },
  },
});

const CustomThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
