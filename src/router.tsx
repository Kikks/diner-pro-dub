import { createBrowserRouter } from "react-router-dom";

import Home from "@/screens/home";
import AppLayout from "./layouts/app-layout";
import Partnerships from "./screens/partnerships";
import PartnershipRequest from "./screens/partnership-request";
import ViewPartnershipRequest from "./screens/view-partnership-request";
import PartnershipsRequested from "./screens/partnerships-requested";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/categories",
				element: <div>Categories</div>
			},
			{
				path: "/partnerships",
				element: <Partnerships />
			},
			{
				path: "/partnership-request",
				element: <PartnershipRequest />
			},
			{
				path: "/partnership-request/:id",
				element: <ViewPartnershipRequest />
			},
			{
				path: "/partnerships-requested",
				element: <PartnershipsRequested />
			},
			{
				path: "/about",
				element: <div>About Us</div>
			}
		]
	}
]);

export default router;
