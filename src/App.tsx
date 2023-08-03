import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MiniDrawer from "./components/drawer";
import NotFound from "./routes/404";
import Main from "./routes/main";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { RouteObject } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import Root from ".";

type IListItem = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
  path: string;
};

export type IRoutes = RouteObject & IListItem;

export const routes: IRoutes[] = [
  {
    label: "User",
    path: "/user",
    Icon: GroupIcon,
    element: <Main />,
  },
  {
    label: "Posts",
    path: "/posts",
    Icon: NoteAltIcon,
    element: <Main />,
  },
  {
    label: "Tags",
    path: "/tags",
    Icon: SellIcon,
    element: <Main />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MiniDrawer />,
    errorElement: <NotFound />,
    children: [
      ...routes,
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
