// routes
import {  ALL_ROUTES } from "../../../routes/path";

// components
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="eva:home-fill" />,
		path: "/main/home",
	},
	{
		title: "About",
		icon: <Iconify icon="icon-park-solid:info" />,
		path: ALL_ROUTES.ABOUT,
	},
	{
		title: "Services",
		icon: <Iconify icon="tabler:briefcase-filled" />,
		path: ALL_ROUTES.SERVICES,
	},
	{
		title: "Tracking",
		icon: <Iconify icon="zondicons:location" />,
		path: ALL_ROUTES.TRACKING,
	},
	{
		title: "News",
		icon: <Iconify icon="ion:newspaper-sharp" />,
		path: ALL_ROUTES.NEWS,
	},
	{
		title: "Contact",
		icon: <Iconify icon="streamline:customer-support-1-solid" />,
		path: ALL_ROUTES.CONTACT,
	},
];

export default navConfig;
