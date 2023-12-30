import { createBrowserRouter, RouteObject } from "react-router-dom";
import aboutRouter from 'about/Router'
import { App } from "app";

console.log("ROUTER", aboutRouter)

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            ...aboutRouter
        ],
    },
]


export const router = createBrowserRouter(routes);
export default routes;