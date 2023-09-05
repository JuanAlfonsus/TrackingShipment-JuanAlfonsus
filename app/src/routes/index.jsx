import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import TrackingShipmentView from "../views/TrackingShipmentView";
import AboutMeView from "../views/AboutMeView";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <TrackingShipmentView />
            },
            {
                path: '/about-me',
                element: <AboutMeView />
            }
        ]
    },
]);

export default router