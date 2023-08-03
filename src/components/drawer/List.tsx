import { default as MuiList } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC } from "react";
import { Link } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap, styled } from "@mui/material";

export interface IListItem {
  label: string;
  to: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
}

interface IListProps {
  open?: boolean;
  listItems: IListItem[];
}

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const List: FC<IListProps> = ({ open, listItems }) => {
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
