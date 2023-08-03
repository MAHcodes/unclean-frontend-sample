import { Link } from "react-router-dom";
import { routes } from "./App";
import {
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Card = styled(Stack)(({ theme }) => ({
  color: theme.palette.primary.main,
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
      {routes.map(({ Icon, path, label }) => (
        <Link key={path} to={path} style={{ textDecoration: "none" }}>
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
