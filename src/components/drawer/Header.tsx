import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton, styled } from "@mui/material";
import { FC } from "react";

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface DrawerHeaderProps {
  handleDrawerClose: () => void;
}

const DrawerHeader: FC<DrawerHeaderProps> = ({ handleDrawerClose }) => {
  return (
    <Header>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </Header>
  );
};

export default DrawerHeader;
