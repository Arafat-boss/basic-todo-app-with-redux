import App from "@/App";
import Taska from "@/pages/Taska";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App></App>
        Component: App,
        children:[
            {
                path:"users",
                Component: User,
            },
            {
                path:"tasks",
                Component: Taska,
            },
        ]
    }
])

export default router;