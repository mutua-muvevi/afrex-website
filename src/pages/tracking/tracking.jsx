import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import MainTracking from "./section/main";


const Tracking = () => {
	const banner = {
		title: "Track your Comodity",
		subtitle:
			"We at Afrex Bridge Connection LLC offer various Business to Business services which include.",
		type: "image",
		src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704754626/afrex/About/airplane-lease_xfhykp.webp",
		height: "70vh",
	};
	return (
		<Page title="Track your Comodity">
			<ReusableBanner
				title={banner.title}
				subtitle={banner.subtitle}
				type="image"
				src={banner.src}
				height="70vh"
			/>
			<MainTracking/>
		</Page>
	);
};

export default Tracking;
