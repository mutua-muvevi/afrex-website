import { Navigate, useRoutes } from "react-router-dom";
import {
	ComingSoonPage,
	LazyAbout,
	LazyContact,
	LazyHome,
	LazyNews,
	LazyServices,
	LazyTracking,
	MaintenancePage,
	Page403,
	Page404,
	Page500,
} from "./elements";

import CompactLayout from "../layout/compact";
import MainLayout from "../layout/main/layout";

//-----------------------------------------------------------
export default function Router() {
	return useRoutes([
		{ path: "/", element: <Navigate to="/main/home" replace /> },
		{
			path: "main",
			element: <MainLayout />,
			children: [
				{ path: "home", element: <LazyHome /> },
				{ path: "about", element: <LazyAbout /> },
				{ path: "services", element: <LazyServices/> },
				{ path: "tracking", element: <LazyTracking/> },
				{ path: "news", element: <LazyNews /> },
				{ path: "contact", element: <LazyContact /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
		{
			element: <CompactLayout />,
			children: [
				{ path: "coming-soon", element: <ComingSoonPage /> },
				{ path: "maintenance", element: <MaintenancePage /> },
				{ path: "500", element: <Page500 /> },
				{ path: "404", element: <Page404 /> },
				{ path: "403", element: <Page403 /> },
			],
		},
	]);
}
