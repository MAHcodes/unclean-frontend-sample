import { lazy } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Root from ".";
import MiniDrawer from "./components/drawer";
import Loadable from "./components/Loadable";
import { Api } from "./configs/axios";
const Users = Loadable(lazy(() => import("./pages/Users")));
const Posts = Loadable(lazy(() => import("./pages/Posts")));
const Tags = Loadable(lazy(() => import("./pages/Tags")));
const NotFound = Loadable(lazy(() => import("./routes/404")));

export const routes: RouteObject[] = [
  {
    path: "/users",
    element: <Users />,
    loader: async () => {
      return Api.get("/Users").then((res) => res.data);
    },
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: async () => {
      return Api.get("/Posts").then((res) => res.data);
    },
  },
  {
    path: "/tags",
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
