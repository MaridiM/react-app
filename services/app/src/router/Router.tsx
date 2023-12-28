import { App } from "app";
import { AboutPage } from "pages";
import {createBrowserRouter} from "react-router-dom";

const routes = [
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