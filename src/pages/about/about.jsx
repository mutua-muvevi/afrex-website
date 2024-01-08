import { Page } from "../../components/page";
import { coreValuesList } from "../../constants/core-values";
import { officeLocation } from "../../constants/offices";
import { whyUsAccordion } from "../../constants/why-us";
import ReusableBanner from "../../modules/banner/banner";
import LeftRight from "../../modules/content/left-right";
import Subscribe from "../../modules/subscribe/subscribe";
import Offices from "../home/sections/offices";
import AboutAccordion from "./sections/accordion";
import CoreValues from "./sections/core";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"
const content = [
	"Foreign companies invest in Kenya and set up local and regional operations to take advantage of Kenya's strategic location, diverse economy, entrepreneural and skilled workforce, comprehensive road and airport infrastructure and status as a regional finance center. It is the mostindustrially developed country in East Africa with gross domestic product of $ 96 billion.",
	"We, at Afrex, open up investment opportunities for foreign companies and individuals who are seeking to expand existing businesses and create companies in Kenya and overseas.",
	"We have helped many companies expand to countries around the world. We guide investors seeking business opportunities and contracts through the complex process of public and private procurement requirements set by various regulation.",
	"Kenya a country of 54 million people, has a market-based economy and is widely regarded as the economics, commercial, financial and logistical center of East Africa.it is considered to have the strongest industrial base in East africa and has succeeded in attracting foreign investors from all walks of life"
];

const About = () => {

	const aboutPage = {
		banner: {
			title: "About us",
			subtitle: "The latest news from Afrex Bridge Connections",
			type: "image",
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704752520/afrex/About/pexels-antony-trivet-14167593_mkakgh.jpg",
			height: "70vh",
		},
		intro: {
			title: "Who we are",
			subtitle: "Afrex Bridge Connections is a company that helps foreign companies and individuals to invest in Kenya and overseas.",
			content: content,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704751922/afrex/About/two-african-businessman-meeting-together_siqvfe.jpg",
		},
		coreValues: {
			title: "Our Core Values",
			subtitle: "We believe in:",
			content: coreValuesList,
			backgroundImage: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704752161/afrex/About/portrait-young-happy-african-man-woman-showing-thumbs-up_xxew2h.jpg",
		},
		whyUs: {
			title: "Why us",
			subtitle: "We are the best",
			content: whyUsAccordion,
			backgroundImage: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704752362/afrex/About/multiracial-business-people-standing-office-discuss-together-diverse-group-employees-formal-wear_vxfahh.jpg",
		},
		offices: {
			title: "Our Offices",
			subtitle: "Where you can find us",
			offices: officeLocation,
		}
	}

	return (
		<Page title="About us">
			<ReusableBanner
				title={aboutPage.banner.title}
				subtitle={aboutPage.banner.subtitle}
				type={aboutPage.banner.type}
				src={aboutPage.banner.src}
				height={aboutPage.banner.height}
			/>
			<LeftRight
				title={aboutPage.intro.title}
				subtitle={aboutPage.intro.subtitle}
				content={aboutPage.intro.content}
				image={aboutPage.intro.image}
			/>
			<CoreValues
				title={aboutPage.coreValues.title}
				subtitle={aboutPage.coreValues.subtitle}
				content={aboutPage.coreValues.content}
				backgroundImage={aboutPage.coreValues.backgroundImage}
			/>
			<AboutAccordion
				title={aboutPage.whyUs.title}
				subtitle={aboutPage.whyUs.subtitle}
				content={aboutPage.whyUs.content}
				backgroundImage={aboutPage.whyUs.backgroundImage}
			/>
			<Offices
				title={aboutPage.offices.title}
				subtitle={aboutPage.offices.subtitle}
				offices={aboutPage.offices.offices}
			/>
			<Subscribe/>
		</Page>
	);
};

export default About;
