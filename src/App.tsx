import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MiniDrawer from "./components/drawer";
import NotFound from "./routes/404";
import Main from "./routes/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MiniDrawer />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/users",
        element: <Main />,
      },
      {
        path: "/tags",
        element: <Main />,
      },
      {
        path: "/posts",
        element: <Main />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
