import { Page } from "../../components/page";
import { officeLocation } from "../../constants/offices";
import ReusableBanner from "../../modules/banner/banner";
import LeftRight from "../../modules/content/left-right";
import Subscribe from "../../modules/subscribe/subscribe";
import HomeFeatures from "./sections/features";
import HomeNews from "./sections/news";
import Offices from "./sections/offices";
import HomeServices from "./sections/services";

const subtitle =
	"Sed sapien felis vestibulum ut dignissim quis sagittis sit amet ipsum donec consectetur at orci quis viverra nullam tempus felis eget nunc feugiat vitae efficitur risus pulvinar sed commodo ligula id purus commodo feugiat etiam aliquet aliquam nisl id venenatis integer et arcu vel justo commodo malesuada donec eget euismod elit aliquam vel ornare augue maecenas sed urna facilisis dictum lacus auctor accumsan ex nullam ex orci placerat sed massa sit amet mollis consectetur neque donec semper suscipit rhoncus class aptent taciti.";

const content = [
	"The creation of AFREX BUSINESS NETWORK CONNECTIONS took place in 2021 on the basis of a solid foundation that relies on the proven expertise of its founder as well as that of its qualified staff in facilitating the creation and registration of businesses as well as in providing post incorporation services with secretarial services for companies newly incorporated but not yet well established.",
	"We focus on providing lasting support to investors by offering them the assurance of success throughout the entire process of incorporation of companies and flawless exercise of business activities. We aim at helping investors to avoid numerous difficulties encountered by new comers when doing business into a new environment.",
	"We center on sustainable support to investors by offering additional post incorporation services with Secretarial services, Business Planning, Accounting and Tax, Human Resources Management, Branding, Marketing and other general consulting services to ensure mutual success.",
];

const Home = () => {
	const homepage = {
		banner: {
			src: "https://res.cloudinary.com/dqweh6zte/video/upload/v1704748655/afrex/homepage/pexels-rodnae-productions-7841663_720p_e1ufaa.mp4",
			title: "Afrex Bridge Connections",
			subtitle: subtitle,
		},
		intro: {
			title: "Business Connections",
			subtitle:
				"The best business connections and logistics service in Kenya and Africa",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704749022/afrex/homepage/interracial-colleagues-shaking-hands_ezfshl.jpg",
			content: content,
		},
		features: {
			title: "Our Features",
			subtitle:
				"The best business connections and logistics service in Kenya and Africa",
			backgroundImage:
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704750761/afrex/homepage/complex-aerial-view-city_1_qpeygh.jpg",
			items: [
				{
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704750907/afrex/homepage/businessman-checking-bankbook_tfbxk0.jpg",
					title: "Business registration",
					description:
						"We provide company registration, business permits and licenses, work permits and resident director services.",
				},
				{
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704751125/afrex/homepage/person-office-during-work-day_xgnul0.jpg",
					title: "Business support",
					description:
						"We provide virtual office services (V.O.S) and day to day operations support to help businesses handle their administrative tasks.",
				},
				{
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704751062/afrex/homepage/cheerful-businesspeople-reaching-agreement_qdk1vv.jpg",
					title: "Business Opportunities",
					description:
						"We in provide investment and trade facilitation services to attract foreign direct investments into East Africa and sub-Saharan countries. We also offer a range of business facilitation services for both foreign and local businesses.",
				},
				{
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704751194/afrex/homepage/attractive-african-businessman-glasses-suit-holding-papers_g1dpmz.jpg",
					title: "Market Advisory",
					description:
						"We help companies in finding potential business partners",
				},
				{
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704751253/afrex/homepage/ethnic-employee-gesturing-thumb-up_xeunhl.jpg",
					title: "Business Permit and Licences",
					description:
						"While conducting business main activities, there are special licenses and permits related to specific operations that are required. We will take you through, in obtaining such permits and licenses with the relevant government bodies",
				},
				{
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704751314/afrex/homepage/african-american-research-agency-coworkers-meeting-about-startup-project-financial-status-business-people-desk-company-office-finance-department-talking-about-marketing-expenses_n5etut.jpg",
					title: "Business consultancy",
					description:
						"We offer management consultancy with a team of Industry experts, financial experts, business start-up experts, digital expert and innovation experts",
				},
			],
		},
		services: {
			title: "What we do",
			subtitle:
				"We at Afrex Bridge Connection LLC offer various Business to Business services which include.",
			backgroundImage:
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704749161/afrex/homepage/complex-aerial-view-city_qsayli.jpg",
			items: [
				{
					title: "Business Registration",
					description: `In our role of offering facilitations through the process of creating
					and registering companies on behalf of clients, our commitment is to ensure
					full assistance in the process. To do so, we observe and scrupulously meet
					the criteria and conditions in compliance with the Kenya Company Act 2015...`,
					link: "/services/business-registration",
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704749266/afrex/homepage/crop-ethnic-businessman-signing-papers_gshfe2.jpg",
				},
				{
					title: "Company Registration",
					description: `AFREX covers the registration of companies from the start up to the
					registration of all business permits and licenses required for companies to be
					fully operational, including work permits for foreign residents, VAT and
					PIN with the Tax Department, Social Security and Health Insurance Certificates.
					We handle this process by doing the following.`,
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704749820/afrex/homepage/businessman-happy-about-new-contract_1_nekb8f.jpg",
				},
				{
					title: "Professional Expertise",
					description: `AFREX connects you with highly experience professionals to
					(advice, recommending, doing market research, business plan, referrals,
					compliance issues, conception of projects, project management, risk management,
					marketing strategies, web design, IT management, web application).`,
					link: "/services/professional-expertise",
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704749652/afrex/homepage/business-people-using-monitor-financial-presentation-conference-with-coworkers-men-sharing-data-analysis-marketing-strategy-with-group-colleagues-briefing-meeting_n5cr5r.jpg",
				},
				{
					title: "Administrative and Business Support",
					description: `We assign teams of seasoned/experienced specialists while respecting
					your budget and your project deadlines. Our recruitment services can
					respond to a specific request for a given period, or be part of a framework
					agreement often comprising several categories and profiles.`,
					link: "/services/adminstrative-and-business-support",
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704750016/afrex/homepage/side-view-cropped-man-working-financial-report_blsiaz.jpg",
				},
				{
					title: "Connection to business opportunity",
					description: `If you want to build your business connections and accelerate your international growth,
					then you have found the right place. Our industry knowledge on international network will
					give you a chance to connect with leading international companies that will help you spur
					the growth of your company and open doors and opportunities in the global market...`,
					link: "/services/connection-to-business-opportunity",
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704750093/afrex/homepage/african-business-male-people-shaking-hands_e3imfm.jpg",
				},
				{
					title: "Business Support Services",
					description: `The setting up and creation of companies is a very laborious procedure which, at times,
					requires the establishment of adequate structures for its normal functioning.
					AFREX is here to also offer professional administrative services to companies or owners of
					businesses that do not have registered offices or places to carry out their activities.`,
					link: "/services/business-support",
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704750196/afrex/homepage/people-working-call-center_plnhnl.jpg",
				},
				{
					title: "Airport Transport Services",
					description: `We provide air transport services for international deliveries by cargo freight and chartered aircraft with
					major destinations around the world. Very often, in order to ensure secure deliveries by avoiding
					countless transshipments for deliveries to distant destinations, we offer charter flights for direct
					transport.`,
					link: "/services/airport-leasing",
					image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704750437/afrex/homepage/airplane-2214497_1280_abptij.jpg",
				},
			],
		},
		offices: {
			title: "Our Offices",
			subtitle: "Where you can find us",
			offices: officeLocation,
		},
	};
	return (
		<Page title="Home">
			<ReusableBanner
				title="Afrex "
				subtitle="The latest news from Afrex Bridge Connections"
				type="video"
				src={homepage.banner.src}
				height="70vh"
			/>
			<LeftRight
				title={homepage.intro.title}
				subtitle={homepage.intro.subtitle}
				image={homepage.intro.image}
				content={homepage.intro.content}
			/>
			<HomeServices
				title={homepage.services.title}
				subtitle={homepage.services.subtitle}
				items={homepage.services.items}
				backgroundImage={homepage.services.backgroundImage}
			/>
			<Offices
				title={homepage.offices.title}
				subtitle={homepage.offices.subtitle}
				offices={homepage.offices.offices}
			/>
			<HomeFeatures
				title={homepage.features.title}
				subtitle={homepage.features.subtitle}
				items={homepage.features.items}
				backgroundImage={homepage.features.backgroundImage}
			/>
			<Subscribe />
			<HomeNews />
		</Page>
	);
};

export default Home;
