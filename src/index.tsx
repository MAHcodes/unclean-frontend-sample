import {
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { listItems } from "./components/drawer/List";

const Card = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(3, 4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  ":hover": {
    boxShadow: theme.shadows[4],
  },
}));

const Root = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      justifyContent="center"
      spacing={2}
    >
      {listItems.map(({ Icon, to, label }) => (
        <Link key={to} to={to} style={{ textDecoration: "none" }}>
          <Card spacing={2}>
            <Icon sx={{ width: "3rem", height: "3rem" }} />
            <Typography variant="h6">{label}</Typography>
          </Card>
        </Link>
      ))}
    </Stack>
  );
};

export default Root;
