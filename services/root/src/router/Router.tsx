import { createBrowserRouter } from "react-router-dom";
import appRouter from 'about/Router'
import { App } from "app";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [appRouter],
    },
]);