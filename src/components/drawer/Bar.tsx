import MenuIcon from "@mui/icons-material/Menu";
import { Stack, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Link } from "react-router-dom";
import { drawerWidth } from ".";
import ThemeButton from "./ThemeButton";

interface IBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  flex: 1,
  textDecoration: "none",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Bar: FC<IBarProps> = ({ open, handleDrawerOpen }) => (
  <AppBar position="fixed" open={open}>
    <Toolbar>
      <Stack sx={{ flex: 1 }} justifyContent="space-between" direction="row">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <StyledLink to="/">
          <Typography variant="h6" noWrap component="div">
            Unclean Frontend Sample
          </Typography>
        </StyledLink>
        <ThemeButton />
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Bar;
