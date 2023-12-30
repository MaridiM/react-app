import { App } from "app";
import { AboutPage } from "pages";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element:  <AboutPage />
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;