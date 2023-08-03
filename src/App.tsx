import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MiniDrawer from "./components/drawer";
import NotFound from "./routes/404";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { RouteObject } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import Root from ".";
import { Api } from "./configs/axios";
import { defs as PostsDefs } from "./routes/Posts/components/Posts";
import MainGrid from "./routes/MainGrid";
import { defs as TagsDefs } from "./routes/Tags/components/Tags";
import { defs as UsersDefs } from "./routes/Users/components/Users";

type IListItem = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
  path: string;
};

export type IRoutes = RouteObject & IListItem;

export const routes: IRoutes[] = [
  {
    label: "Users",
    path: "/users",
    Icon: GroupIcon,
    element: <MainGrid defs={UsersDefs} />,
    loader: async () => {
      return Api.get("/Users").then((res) => res.data);
    },
  },
  {
    label: "Posts",
    path: "/posts",
    Icon: NoteAltIcon,
    element: <MainGrid defs={PostsDefs} />,
    loader: async () => {
      return Api.get("/Posts").then((res) => res.data);
    },
  },
  {
    label: "Tags",
    path: "/tags",
    Icon: SellIcon,
    element: <MainGrid defs={TagsDefs} />,
    loader: async () => {
      return Api.get("/Tags").then((res) => res.data);
    },
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
