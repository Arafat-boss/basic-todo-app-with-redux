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
                path:"user",
                Component: User,
            },
            {
                path:"task",
                Component: Taska,
            },
        ]
    }
])

export default router;