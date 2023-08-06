import GroupIcon from "@mui/icons-material/Group";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SellIcon from "@mui/icons-material/Sell";
import { styled, SvgIconTypeMap } from "@mui/material";
import { default as MuiList } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";
import { Link } from "react-router-dom";

type IListItem = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
  to: string;
};

export const listItems: IListItem[] = [
  {
    label: "Users",
    to: "/users",
    Icon: GroupIcon,
  },
  {
    label: "Posts",
    Icon: NoteAltIcon,
    to: "/posts",
  },
  {
    label: "Tags",
    to: "/tags",
    Icon: SellIcon,
  },
];

interface IListProps {
  open?: boolean;
}

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const List: FC<IListProps> = ({ open }) => {
  return (
    <MuiList>
      {listItems.map(({ label, to, Icon }, idx) => (
        <StyledLink key={idx} to={to}>
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
