import GroupIcon from "@mui/icons-material/Group";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SellIcon from "@mui/icons-material/Sell";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { lazy } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from ".";
import Loadable from "./components/Loadable";
import MiniDrawer from "./components/drawer";
import { Api } from "./configs/axios";
import { defs as PostsDefs } from "./pages/Posts/components/PostsGrid";
import { defs as TagsDefs } from "./pages/Tags/components/TagsGrid";
import { defs as UsersDefs } from "./pages/Users/components/UsersGrid";
const MainGrid = Loadable(lazy(() => import("./routes/MainGrid")));
const NotFound = Loadable(lazy(() => import("./routes/404")));

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
