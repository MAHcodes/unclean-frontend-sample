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
const Users = Loadable(lazy(() => import("./pages/Users")));
const Posts = Loadable(lazy(() => import("./pages/Posts")));
const Tags = Loadable(lazy(() => import("./pages/Tags")));
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
    element: <Users />,
    loader: async () => {
      return Api.get("/Users").then((res) => res.data);
    },
  },
  {
    label: "Posts",
    path: "/posts",
    Icon: NoteAltIcon,
    element: <Posts />,
    loader: async () => {
      return Api.get("/Posts").then((res) => res.data);
    },
  },
  {
    label: "Tags",
    path: "/tags",
    Icon: SellIcon,
    element: <Tags />,
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
