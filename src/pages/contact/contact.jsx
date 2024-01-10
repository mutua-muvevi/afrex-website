import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import Subscribe from "../../modules/subscribe/subscribe";
import ContactUpperBody from "./sections/body";
import ContactForm from "./sections/form";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1704751125/afrex/homepage/person-office-during-work-day_xgnul0.jpg"

const Contact = () => {
	return (
		<Page title="Contact us">
			<ReusableBanner
				title="Contact"
				subtitle="The latest news from Afrex Bridge Connections"
				type="image"
				src={image}
				height="70vh"
			/>
			<ContactUpperBody/>
			<ContactForm/>
			<Subscribe/>
		</Page>
	);
};

export default Contact;
