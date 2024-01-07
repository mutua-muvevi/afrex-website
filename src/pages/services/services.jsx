import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"

const Services = () => {
	return (
		<Page title="Our Services">
			<ReusableBanner
				title="Our Services"
				subtitle="The latest news from Afrex Bridge Connections"
				type="image"
				src={image}
				height="70vh"
			/>
		</Page>
	);
};

export default Services;
