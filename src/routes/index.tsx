import App from "@/App";
import Taska from "@/pages/Taska";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App></App>
    Component: App,
    children: [
      {
        index: true,
        // path: "tasks",
        Component: Taska,
      },
      {
        path: "tasks",
        Component: Taska,
      },
      {
        path: "users",
        Component: User,
      },
    ],
  },
]);

export default router;
