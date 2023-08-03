import { default as MuiList } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { IRoutes } from "../../App";

interface IListProps {
  open?: boolean;
  listItems: IRoutes[];
}

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const List: FC<IListProps> = ({ open, listItems }) => {
  return (
    <MuiList>
      {listItems.map(({ label, path, Icon }, idx) => (
        <StyledLink key={idx} to={path}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </StyledLink>
      ))}
    </MuiList>
  );
};

export default List;
