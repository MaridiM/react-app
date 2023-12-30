import { AboutPage, MainPage, ShopPage } from "pages";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    SHOP = 'shop',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SHOP]: '/shop',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.SHOP]: {
        path: RoutePath.shop,
        element: <ShopPage />,
    },
}
