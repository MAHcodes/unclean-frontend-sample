import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { IconButton, ListItemIcon, useMediaQuery } from "@mui/material";
import { changeThemeMode, useThemeMode } from "../../redux/Preferences/Slices";
import { useAppDispatch } from "../../redux/hooks";
import { THEMEMODE } from "../../redux/Preferences/helpers";

const ThemeButton = () => {
  const mode = useThemeMode();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();

  const handleThemeModeChange = (theme: THEMEMODE) => {
    dispatch(changeThemeMode(theme));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDarkTheme = () => {
    handleThemeModeChange(THEMEMODE.DARK);
    handleClose();
  };

  const handleLightTheme = () => {
    handleThemeModeChange(THEMEMODE.LIGHT);
    handleClose();
  };

  const handleSystemTheme = () => {
    handleThemeModeChange(prefersDarkMode ? THEMEMODE.DARK : THEMEMODE.LIGHT);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const ThemeModeIcon = {
    [THEMEMODE.LIGHT]: <LightModeIcon />,
    [THEMEMODE.DARK]: <DarkModeIcon />,
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        {ThemeModeIcon[mode]}
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleLightTheme}>
          <ListItemIcon>{ThemeModeIcon[THEMEMODE.LIGHT]}</ListItemIcon>
          Light
        </MenuItem>
        <MenuItem onClick={handleDarkTheme}>
          <ListItemIcon>{ThemeModeIcon[THEMEMODE.DARK]}</ListItemIcon>
          Dark
        </MenuItem>
        <MenuItem onClick={handleSystemTheme}>
          <ListItemIcon>
            <SettingsBrightnessIcon />
          </ListItemIcon>
          System
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeButton;
